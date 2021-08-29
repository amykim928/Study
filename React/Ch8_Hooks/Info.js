import React, { useEffect, useState, useReducer } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");

  //useEffect: 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정하는 Hook (렌더링 직후마다 실행)

  // useEffect(() => {
  //     console.log('렌더링이 완료되었습니다!');
  //     console.log({
  //         name,
  //         nickname
  //     });
  // });

  // useEffect(() => {
  //     console.log('마운트될 때만 실행됩니다.');
  // },[]); //컴포넌트 화면에 맨 처음 렌더링할 때만 실행 (업데이트될 때는 X)

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   }; //뒷정리 함수
  // }, [name]); //name 값이 업데이트될 때만 실행

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickname = (e) => {
  //     setNickname(e.target.value);
  //   };

  //   return (
  //     <div>
  //       <div>
  //         <input value={name} onChange={onChangeName} />
  //         <input value={nickname} onChange={onChangeNickname} />
  //       </div>
  //       <div>
  //         <div>
  //           <b>이름:</b> {name}
  //         </div>
  //         <div>
  //           <b>닉네임:</b> {nickname}
  //         </div>
  //       </div>
  //     </div>
  //   );

  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });
  // const { name, nickname } = state;

  // const onChange = (e) => {
  //   dispatch(e.target);
  // }; //e.target 값 자체를 액션 값으로 사용

  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  }); //커스텀 Hooks 사용
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
