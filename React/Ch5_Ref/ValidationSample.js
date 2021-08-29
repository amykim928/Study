import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }; //state의 password 값 업데이트
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  }; //validated 값을 검증 결과로 설정, input에 포커스
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)} //ref 콜백 함수 설정
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          //버튼을 누르기 전에는 비어있는 문자열 전달.
          //버튼을 누른 후에는 검증 결과에 따라 success 값 또는 failure 값을 설정
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;

//creatRef를 통한 ref 설정
// import React, { Component } from 'react';

// class RefSample extends Component {

// input = React.createRef();
// handleFocus = () => {
//     this.input.current.focus();
// }
//     render() {
//         return (
//             <div>
//                 <input ref = {this.input} />
//             </div>
//         );
//     }
// }

// export default ValidationSample;/
