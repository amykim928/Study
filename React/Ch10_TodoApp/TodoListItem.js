//각 할 일 항목에 대한 정보를 보여주는 컴포넌트.
//todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌
import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; //조건부 스타일링을 위함
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div> //props로 받아 온 style을 적용
    //TodoListItem-virtualized 클래스는 컴포넌트 사이사이에 테두리를 제대로 쳐주고,
    //홀수 번째/짝수 번째 항목에 다른 배경 색상을 설정하기 위해서
  ); //삭제 함수 호출
};

export default React.memo(TodoListItem);
//컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여
//함수형 컴포넌트의 리렌더링 성능 최적화
