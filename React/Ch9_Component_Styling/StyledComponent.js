import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

//위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들기
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  /*props로 넣어준 값을 직접 전달해줄 수 있음*/
  background: ${(props) => props.color || "blue"}; //blue는 기본 색상
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  /*@media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%auto;
  }*/
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;
//Tagged 템플릿 리터럴: `을 사용하여 만든 문자열
//템플릿 사이사이에 들어가는 자바스크립트 객체나 함수의 원본 값을 그대로 추출
//styled.div 뒤에 Tagged 템플릿 리터럴 문법을 통해 스타일을 넣어주면,
//해당 스타일이 적용된 div로 이루어진 리액트 컴포넌트가 생성됨
//사용해야 할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링을 해주고 싶으면
//const MyInput = styled('input')`background:gray;` 처럼 태그의 타입을 styled 함수의 인자로 전달하거나,
//const StyledLink = styled(Link)`color: blue; `처럼 아예 컴포넌트 형식의 값을 넣어줌

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /*& 문자를 사용하여 Sass처럼 자기 자신 선택 가능*/
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &.hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  } /*inverted 값이 true일 때 특정 스타일을 부여 */
`;

const StyledComponent = () => {
  return (
    //color 값을 props로 넣음
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
