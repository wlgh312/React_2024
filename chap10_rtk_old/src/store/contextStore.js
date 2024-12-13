// contextStore.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// const BASELONG = process.env.REACT_APP_BASELONG;
// const BASEBASE = process.env.REACT_APP_BASEURL
const BASELONG = 'http://localhost:8000/contacts_long/';
const BASEBASE = 'http://localhost:8000/contacts/';

// 비동기 Action 기술
// 실행되는 callback 함수의 매개변수는 딱 1개만 지정 가능
// data => {no: 1, size: 10}
export const getContactListAction = createAsyncThunk('CONTACT/GETCONTACTLIST', async (data) => {
  const params = { pageno: data.no, pagesize: data.size }
  const resp = await axios.get(BASELONG, { params });
  return resp.data;
});
// data => no
export const getContactAction = createAsyncThunk('CONTACT/GETCONTACT', async (data) => {
  const resp = await axios.get(BASEBASE + data);
  return resp.data;
})
// data => no
export const deleteContactAction = createAsyncThunk('CONTACT/DELETECONTACT', async (data) => {
  const resp = await axios.delete(BASEBASE + data);
  return resp.data;
})
// data => { no: '', name: ?, tel: ?, address: ?, photo: '' }
export const addContactAction = createAsyncThunk('CONTACT/ADDCONTACT', async (data) => {
  const headers = { 'Content-Type': 'application/json' }
  const resp = await axios.post(BASEBASE, data, { headers });
  return resp.data;
})

const contactStore = createSlice({
  name: 'contactStore',
  initialState: {
    contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
    contact: { no: '', name: '', tel: '', address: '', photo: '' },
    etc: { status: '', message: '' },
    loading: false,
    error: null,
  },
  reducers: {
    // action => evt.target
    changeContextAction: (state, action) => {
      // console.log(action.payload.name)
      // 데이터 직렬화 에러 => false
      state.contact[action.payload.name] = action.payload.value;
    },
    clearContextAction: (state, action) => {
      // console.log(action.payload.name)
      // 데이터 직렬화 에러 => false
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
    }
  },
  extraReducers: (builder) => {
    // 비동기 각 action에 3가지 상태값을 준다
    // getContactListAction.pending => 데이터를 가져오기 전
    // getContactListAction.fulfilled => 데이터를 정상적으로 가져옴
    // getContactListAction.rejected => 데이터 가져오기 실패
    // 에 따른 initialState를 조작
    builder.addCase(getContactListAction.pending, (state) => {
      state.loading = true;
      state.contactList = { pageno: '', pagesize: '', totalcount: '', contacts: [] };
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(getContactListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contactList = action.payload;
    });
    builder.addCase(getContactListAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getContactAction.pending, (state) => {
      state.loading = true;
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(getContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(getContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // delete
    builder.addCase(deleteContactAction.pending, (state) => {
      state.loading = true;
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(deleteContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.etc = action.payload;
    });
    builder.addCase(deleteContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // add
    builder.addCase(addContactAction.pending, (state) => {
      state.loading = true;
      state.etc = { status: '', message: '' };
      state.error = null;
    });
    builder.addCase(addContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.etc = action.payload;
    });
    builder.addCase(addContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
})
export default contactStore;
export const { changeContextAction, clearContextAction } = contactStore.actions;
