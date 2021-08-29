import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}; //평균값 계산 메서드

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  //useRef: 함수형 컴포넌트에서 ref를 쉽게 사용

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성 (이후 함수 재사용)
  //useCallback: 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하는 것을 최적화

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); //리스트에 숫자 삽입. 입력한 값 초기화. 포커스가 인풋 쪽으로
  //number나 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  //useMemo: 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고,
  //원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
