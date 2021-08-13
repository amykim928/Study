//각 라이프사이클 메서드를 실행할 때마다 콘솔 디버거에 기록하고, 부모 컴포넌트에서 props로 색상을 받아
//버튼을 누르면 state.number 값이 1씩 증가하는 컴포넌트
import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref 설정

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  } //부모에게 받은 color 값을 state에 동기화

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4; //숫자의 마지막 자리가 4이면 리렌더링 X
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  } //DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/*
        {this.props.missing.value}
        에러 발생용
        */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

/*라이프 사이클(수명 주기): 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝남

** 마운트(mount): DOM이 생성되고 웹 브라우저 상에서 나타나는 것
1) constructor(props): 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메서드. 초기 state 설정
2) getDerivedStateFromProps(nextProps, prevState): props에 있는 값을 state에 넣을 때(동기화) 사용하는 메서드
3) render: 우리가 준비한 UI를 렌더링하는 메서드
4) componentDidMount(nextProps, nextState): 컴포넌트가 웹 브라우저 상에 나타난 후 호출하는 메서드(첫 렌더링 후)

** 업데이트(update): props가 바뀔 때, state가 바뀔 때, 부모 컴포넌트가 리렌더링될 때, 
this.forceUpdate로 강제로 렌더링을 트리거할 때
1) getDeriveStateFromProps: 업데이트 시작 전, props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
2) shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지 결정 
(this.forceUpdate() 함수를 호출하면 이 과정은 생략 후 바로 render 함수 호출)
3) render: 컴포넌트를 리렌더링
4) getSnapshotBeforeUpdate(prevProps, prevState): 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
5) componentDidUpdate(prevProps, prevState, snapshot): 업데이터 작업 끝난 후 호출하는 메서드
(snapshot은 getSnapshotBeforeUpdate에서 반환한 값)

** 언마운트(unmount): 컴포넌트를 DOM에서 제거 (마운트와 반대)
componentWillUnmount: 컴포넌트가 웹 브라우저에서 사라지기 전에 호출하는 메서드

** componentDidCatch(error, info): 컴포넌트 렌더링 도중에 에러가 발생했을 때 앱이 먹통되지 않고 오류 UI를 보여줌
(info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보 제공)
컴포넌트 자신에게 발생하는 에러는 잡지 못하고, 자신의 this.props.children으로 전달되는 컴포넌트에서 발생한 에러만 잡음*/
