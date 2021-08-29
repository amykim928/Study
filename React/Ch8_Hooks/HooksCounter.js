//import React, { useState } from 'react';
import React, { useReducer } from "react";

// const Counter = () => {
//     const [value, setValue] = useState(0);
//     return (
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{value}</b>입니다.
//             </p>
//             <button onClick = {() => setValue(value+1)}>+1</button>
//             <button onClick = {() => setValue(value-1)}>-1</button>
//         </div>
//     );
// };

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      //기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //userReducer 실행 시 state(현재 가리키고 있는 상태), dispatch (액션 발생 함수)를 받아옴
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
export default Counter;

//reducer: 현재 상태, 업데이트를 위해 필요한 정보를 다음 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수
//useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요는 없음 (액션 객체: { type: 'INCREMENT', ...})
//useReducer의 첫 번째 파라미터: 리듀서 함수, 두 번째 파라미터: 해당 리듀서의 기본값
