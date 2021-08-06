import React from 'react'; 
//프로젝트 생성 과정에서 node_modules 디렉터리에 설치된 react 모듈 사용
//모듈 사용은 원래 브라우저에 없는 기능. 브라우저에서 사용 시 번들러(bundler) 사용
//번들러 도구를 사용하면 불러온(import 혹은 require로) 모듈을 모두 합쳐 하나의 파일로 생성
//import logo from './logo.svg';
//import './App.css';
//웹팩의 로더(loader) 기능을 사용하면 SVG 파일과 CSS 파일을 불러와서 사용할 수 있음
//로더 중 babel-loader는 js 파일을 불러오면서 치신 js 문법으로 작성된 코드를 바벨을 사용하여 ES5 문법으로 변환

function App() { //함수형 컴포넌트 (HTML이 아니라 JSX)
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  } //바로 div 옆에 쓰는 것도 가능
  return (
    <div style = {style}>
    {name === '리액트'?(
      <h1>리액트입니다.</h1>
    ) : (
      <h2>리액트가 아닙니다.</h2>
    )}
    </div>
    
    //<div> </div> 혹은 <Fragment> </Fragment>로도 가능
    //요소 여러개를 하나의 요소 감싸야 하는 이유:
    //Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록
    //컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 함
  );
  //return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
  //return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
  //&&연산자 사용 시 주의할 점: const number = 0; return number && <div>내용</div>; => falsy한 값이지만 나타남
  //undefined를 렌더링하지 않기! (undefined return X) => return name || '값이 undefined입니다.';
}

export default App;
