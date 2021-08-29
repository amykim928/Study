//새로운 항목 입력 및 추가하는 컴포넌트. state를 통해 인풋의 상태 관리
import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  //TodoInsert value 상태 관리
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //버튼을 클릭하면 onSubmit 이벤트 발생
  const onSubmit = useCallback(
    (e) => {
      onInsert(value); //props로 받아온 onInsert 함수
      setValue(''); //value 값 초기화

      //submit 이벤트는 브라우저 새로고침 발생시킴
      //이를 방지하기 위해 아래 함수 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  // const onClick = useCallback(
  //   () => {
  //     onInsert(value);
  //     setValue('');
  //   },
  //   [onInsert, value],
  // ); onSubmit과 같은 처리, 이 경우엔 button에서 함수 호출
  //onSubmit을 사용하는 이유는 인풋에서 enter를 눌렀을 때도 발생하기 때문
  //onClick만 버튼에 사용하면, 인풋에 따로 onKeyPress 이벤트를 처리해주어야 함

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
