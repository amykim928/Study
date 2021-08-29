import React from "react";
//import styles from "./CSSModule.module.css";
import styles from "./CSSModule.module.scss";
//CSS Module이 적용된 스타일 파일을 불러오면 객체 하나를 전달받게 되는데 CSS Module에서 사용한
//클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있음 ex) {wrapper: "CSSModule_wrapper_1SbdQ"}
import classNames from "classnames";

const cx = classNames.bind(styles);
//사전에 styles를 받아와 사용하여 cx('클래스 이름', '클래스 이름2') 형태로 사용 가능

const CSSModule = () => {
  // 두 개 이상 클래스 적용
  return (
    //혹은 <div className={[styles.wrapper, styles.inverted].join(' ')}
    //혹은 <div className={cx('wrapper','inverted')}>
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};
//고유한 클래스 이름 사용: 클래스를 적용하고 싶은 JSX 엘리먼트에 className={style.[클래스 이름]} 형태로 전달
export default CSSModule;
