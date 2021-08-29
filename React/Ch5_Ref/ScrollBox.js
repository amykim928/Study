import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box; //비구조화 할당 문법
    //const scrollHeight = this.box.scrollHeight;
    //const clientHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clientHeight; //스코롤바를 맨 아래로 내림
  };
  /*scrollTop: 세로 스크롤바 위치, scrollHeight: 스크롤이 있는 박스 안의 div 높이
  clientHeight: 스크롤이 있는 박스의 높이 */
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };
    //overflow auto 속성: 컨텐츠에 따라 스크롤바 추가 여부 자동 결정
    //position relative 속성: 원래 있던 곳을 기준으로 좌표 결정

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(yellow, pink)',
    }; //가로, 세로, 배경

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }} //스크롤박스 조작을 위해 ref콜백 함수 사용
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
