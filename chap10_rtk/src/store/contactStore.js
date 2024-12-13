

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// .env 파일 참조 - 프로젝트 Root에 있어야 한다
// 수정을 했다면 프로젝트 재 시작 필수
const BASELONG = process.env.REACT_APP_BASELONG; //'http://localhost:8000/contacts_long';
const BASEURL = process.env.REACT_APP_BASEURL;

// 비동기 action
// async 함수의 매개변수는 오로지 1개 설정 가능. 1개 이상이면 객체로 전달한다
// data => { no: 1, size: 5 }
export const getContactListAction = createAsyncThunk('CONTACT/GETCONTACTLIST', async (data) => {
  const params = { pageno: data.no, pagesize: data.size }
  const resp = await axios.get(BASELONG, { params });
  // console.log(resp.data)
  return resp.data;
})
// data => 1
export const getContactAction = createAsyncThunk('CONTACT/GETCONTACT', async (data) => {
  console.log(data)
  const resp = await axios.get('http://localhost:8000/contacts/' + data);
  console.log(resp.data)
  return resp.data;
})
// data => { name: ?, tel: ?, address: ? }
export const addContactAction = createAsyncThunk('CONTACT/ADDCONTACT', async (data) => {
  console.log(data)
  const resp = await axios.post('http://localhost:8000/contacts/', data);
  console.log(resp.data)
  return resp.data;
})

const contactStore = createSlice({
  name: 'contactStore',
  initialState: {
    contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
    contact: { id: '', name: '', tel: '', address: '', photo: '' },
    statusData: { status: '', message: '' },
    loading: false,
    error: null,
  },
  reducers: {
    // contact 수정은 시간 걸리는 작업이 아니다. 동기로 실행해도 문제 없음
    // action.payload => evt.target
    changeContactAction: (state, action) => {
      state.contact[action.payload.name] = action.payload.value;
    }
  },
  extraReducers: (builder) => {
    // pending => 로딩되는 동안 처리
    // fulfilled => 데이터가 성공적으로 도착한 경우
    // rejected => 에러가 발생한 경우
    builder.addCase(getContactListAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contactList = { pageno: '', pagesize: '', totalcount: '', contacts: [] };
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
    });
    builder.addCase(getContactListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contactList = action.payload;
    });
    builder.addCase(getContactListAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // getContact
    builder.addCase(getContactAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
    });
    builder.addCase(getContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(getContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // addContact
    builder.addCase(addContactAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
      state.statusData = { status: '', message: '' };
    });
    builder.addCase(addContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.statusData = action.payload;
    });
    builder.addCase(addContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
})
export default contactStore;
export const { changeContactAction } = contactStore.actions;
