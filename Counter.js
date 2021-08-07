import React, { Component } from 'react';

//state: 컴포넌트 내부에서 바꿀 수 있는 값
class Counter extends Component {
  constructor(props) {
    super(props); //state의 초깃값 설정.
    //현재 클래스형 컴포넌트가 상속되고 있는 리액트의 Component 클래스가 지닌 생성자 함수 호출
    this.state = {
      number: 0,
      fixedNumber: 0,
    }; //객체 형식
  } //컴포넌트의 생성자 메서드

  //   state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   }; constructor 없이 state 초깃값 설정

  render() {
    const { number, fixedNumber } = this.state; //state 조회할 때는 this.state로
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            //버튼 클릭 시 호출할 함수 지정

            //this.setState에 객체 대신 함수 인자 전달
            // this.setState((prevState) => {
            //   //prevState는 기존 상태, props는 현재 지니고 있는 props
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // })); //함수에서 바로 객체를 반환
            
            
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );

            //this.setState({ number: number + 1 }); //state 바꾸는 함수
            //this.setState({ number: this.state.number + 1 });
            //두 번 사용해도 1씩 더해짐. state 값이 바로 바뀌는 것은 아니기 때문
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
