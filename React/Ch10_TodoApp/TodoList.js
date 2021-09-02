//todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해서
//여러 개의 TodoListItem 컴포넌트로 변환
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} //전체 크기
      height={513} //전체 높이
      rowCount={todos.length} //항목 개수
      rowHeight={57} //항목 높이
      rowRenderer={rowRenderer} //항목을 렌더링할 때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} //List에 기본 적용되는 outline 스타일 제거
    /> //컴포넌트가 전달받은 props를 사용하여 자동으로 최적화됨

    // <div>
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div> //todos 상태 사용, props로 받아온 onRemove 함수를 TodoListItem으로 전달
  );
};

export default React.memo(TodoList);
//App 컴포넌트에 다른 state가 추가되어 해당 값들이 업데이트될 때
//해당 컴포넌트가 불필요한 리렌더링을 하는 것을 미리 최적화
