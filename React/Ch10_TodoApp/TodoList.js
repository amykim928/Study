//todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해서
//여러 개의 TodoListItem 컴포넌트로 변환
import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div> //todos 상태 사용, props로 받아온 onRemove 함수를 TodoListItem으로 전달
  );
};

export default TodoList;
