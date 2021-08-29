import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };
  //constructor에서 state 초깃값 설정
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      //e.target.name: 해당 인풋의 name
      //객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨
    }); //state에 있는 값으로 설정
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  }; //현재 comment 값을 메시지 박스로 띄운 후 공백 설정

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  //메서드 바인딩은 생성자 메서드 (constructor)에서 하는 것이 정석이지만, 새 메서드를 만들 때마다
  //constructor도 수정해야 하는 불편함이 있어 화살표 함수 형태로 메서드를 정의하는 방법이 좀 더 간단함.

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
//e객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
//SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없음

//this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
//메서드와 this의 관계가 끊어져 버리게 됨.
//따라서 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로
//제대로 가리키기 위해서는 메서드를 this와 바인딩(binding)하는 작업이 필요함.

export default EventPractice;
/*이벤트 사용 시 주의사항
1) 이벤트 이름은 카멜 표기법으로 작성
2) 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
3) DOM 요소에만 이벤트를 설정할 수 있음 (직접 만든 컴포넌트 자체에 설정 X)
MyComponent에 onClick 값을 설정한다면 해당 컴포넌트를 클릭할때 doSomething 함수를 실행하는 것이
아니라 그냥 이름이 onClick인 props를 MyComponent에게 전달 <MyComponent onClick = {doSomething}/> */
