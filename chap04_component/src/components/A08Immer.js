

import React, { useCallback, useState } from "react";
// npm i immer
//라이브러리 참고 : use-immer, lodash
import { produce } from 'immer'

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      arr: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback(() => {
    setPerson((person) => ({ ...person, name: '흥부' }))
  }, []);
  const changeAddress = useCallback(() => {
    setPerson((person) => {
      const newPerson = {
        ...person,
        info: {
          ...person.info,
          address: 'SEOUL'
        }
      }
      return newPerson;
    });
  }, []);
  const changeOne = useCallback(() => {
    setPerson((person) => {
      const newPerson = {
        ...person,
        info: {
          ...person.info,
          etc: {
            ...person.info.etc,
            one: '복잡하다...'
          }
        }
      }
      return newPerson;
    });
  }, []);
  const addArray = useCallback(() => {
    const random = Math.ceil(Math.random() * 100);

    setPerson((person) => {
      // const newArr = [...person.info.arr, random];
      const newArr = person.info.arr.concat(random);

      const newPerson = {
        ...person,
        info: {
          ...person.info,
          arr: newArr
        }
      }
      return newPerson;
    });
  }, []);

  // immer
  const changeNameImmer = useCallback((x) => {
    setPerson((person) => {
      // draft는 person의 깊은 복사본.
      // 즉 etc, arr, info, person이 모두 새로운 객체
      const newPerson = produce(person, draft => {
        draft.name = x;
      });
      return newPerson;
    })
  }, []);
  const changeAddressImmer = useCallback((x) => {
    setPerson((person) => {
      // draft는 person의 깊은 복사본.
      // 즉 etc, arr, info, person이 모두 새로운 객체
      return produce(person, draft => {
        draft.info.address = x;
      });
    })
  }, []);
  const changeOneImmer = useCallback(() => {
    setPerson((person) => {
      return produce(person, draft => {
        // 리턴하면 에러
        draft.info.etc.one = '간단하다...';
      });
    })
  }, []);

  const addArrayImmer = useCallback(() => {
    const random = Math.ceil(Math.random() * 100);

    setPerson((person) => {
      return produce(person, draft => {
        draft.info.arr.push(random);
      });
    })
  }, []);
  const updateArrayImmer = useCallback((idx, value) => {
    setPerson((person) => {
      return produce(person, draft => {
        draft.info.arr[idx] = value;
      });
    })
  }, []);
  const deleteArrayImmer = useCallback((idx) => {
    setPerson((person) => {
      return produce(person, draft => {
        draft.info.arr.splice(idx, 1)
      });
    })
  }, []);


  return (
    <div className="mb-5">
      <h3>A08 Immer</h3>

      <div className="mb-3">
        Name: {person.name} <br />
        Address: {person.info.address} <br />
        One: {person.info.etc.one} <br />

        Ary:{" "}
        {person.info.arr.map((item, i) => (
          <span key={i}>{item} </span>
        ))}
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={changeAddress}>Address</button>
        <button onClick={changeOne}>One</button>
        <button onClick={addArray}>ADD</button>
        <br />

        <button onClick={() => changeNameImmer('향단')}>Name</button>
        <button onClick={() => changeAddressImmer('부산')}>Address</button>
        <button onClick={changeOneImmer}>One</button>

        <button onClick={addArrayImmer}>ADD</button>
        <button onClick={() => updateArrayImmer(1, 3000)}>UPDATE</button>
        <button onClick={() => deleteArrayImmer(1)}>DELETE</button>
      </div>
    </div>
  );
}
export default A08Immer;

