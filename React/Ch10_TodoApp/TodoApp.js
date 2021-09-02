import React, { useReducer, useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로 추가
      //{type: 'INSERT', todo: { id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE': //제거
      // {type: 'REMOVE', id: 1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': //토글
      // { type: 'TOGGLE', id: 1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  //useReducer(함수, 초기상태, 초기상태 생성 함수)
  //undefined일 경우 맨 처음 렌더링될 때만 세번째 파라미터(함수)가 호출

  //todos 상태 사용
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링해 보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);
  //useState의 기본값에 함수를 넣어주면 (파라미터를 함수 형태로 넣음)
  //컴포넌트가 처음 렌더링될 때만 함수가 실행
  //const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기

  //const nextId = useRef(4);

  //todos 배열에 새 객체 추가
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      //setTodos(todos.concat(todo));
      //setTodos((todos) => todos.concat(todo)); //useState의 함수형 업데이트
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; //nextId 1씩 더하기
    },
    //[todos],
    [],
  );

  //todos 배열에서 id로 항목 지우기
  const onRemove = useCallback((id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id)); //useState의 함수형 업데이트
    dispatch({ type: 'REMOVE', id });
  }, []);

  //수정 기능: map을 사용하여 특정 id를 가지고 있는 객체의 checked 값을 반전
  const onToggle = useCallback((id) => {
    // setTodos(
    //   (todos) =>
    //     todos.map((todo) =>
    //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //     ), //useState의 함수형 업데이트
    // );
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
