//컴포넌트를 만들기 위한 코드 선언
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//proptypes: 컴포넌트의 필수 props 혹은 props의 타입 지정
//props는 컴포넌트 속성을 설정할 때 사용, 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
//컴포넌트 자신은 해당 props를 읽기 전용으로만 사용 가능

//함수형 컴포넌트
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   //const { name, children } = props; //비구조화 문법
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 가장 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };
// //children: 컴포넌트 태그 사이의 내용을 보여주는 props

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 가장 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본 이름',
// }; //props 기본값 설정

// MyComponent.propTypes = {
//   name: PropTypes.string, //name은 무조건 string 형태로 전달해야 함
//   favoriteNumber: PropTypes.number.isRequired,
//   //isRequired는 propTypes를 지정하지 않을 때 경고 메시지를 띄워줌
// };
// 함수형, 클래스형 컴포넌트 둘 다 사용 가능

export default MyComponent;
