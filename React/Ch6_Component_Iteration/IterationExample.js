import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더함
    setNames(nextNames); // names 업데이트
    setInputText(''); //inputText를 비움
  };
  //배열에 새 항목 추가: push(기존 배열 자체 변경), concat(새로운 배열을 만듦)
  const keyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  //enter키를 누르면 추가
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }; //filter함수로 특정 요소 제거

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  //map함수를 사용하여 반복되는 컴포넌트를 렌더링
  //고유한 값이 없을 때만 index 값을 key로 설정 => 배열이 변경될 때 효율적으로 렌더링하지 못함
  return (
    <>
      <input
        placeholder="입력 후 Enter키 혹은 추가"
        value={inputText}
        onChange={onChange}
        onKeyPress={keyPress}
      />
      <button onClick={onClick}>추가</button>
      <u1>{nameList}</u1>
    </>
  );
  //input 상태 관리 및 버튼 클릭 시 함수 호출
};

export default IterationSample;

//arr.map(callback, [thisArg])
//callback: 새로운 배열의 요소를 생성하는 함수
/*callback 함수 파라미터 3가지
1) currentValue: 현재 처리하고 있는 요소
2) index: 현재 처리하고 있는 요소의 index 값
3) array: 현재 처리하고 있는 원본 배열*/
//thisArg(선택): callback 함수 내부에서 사용할 this 레퍼런스

//key: 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용
//불변성 유지: 상태 업데이트 시 기존 상태를 그대로 두면서 새로운 값을 상태로 설정 (리액트 컴포넌트 성능 최적화 가능)

//상태 안에서 배열을 변형할 때는 배열에 직접 접근하여 수정하는 것이 아니라
//concat, filter 등의 배열 내장 함수를 사용하여 새로운 배열을 만든 후 이를 새로운 상태로 설정해야 함!
