console.log("안녕하세요!");
console.log("Javascript를 배워봅시다");

//변수
let value = 1; //변수 선언 시 let 사용
console.log(value);

const a = 3;
//a = 2는 안 됨 const는 상수 선언 시 사용
console.log(a);

//대입연산자
let b = 1 + 2 - (3 * 4) / 4;
console.log(b);

console.log(b++);
console.log(++b); //a-- --a도 가능

b *= 2;
console.log(b);

//논리 연산자
let c = !true;
console.log(c);
c = !false;
console.log(c);

//&& (AND 연산자) || (OR 연산자)
const v = !((true && false) || (true && false) || !false);
console.log(v);
//연산 순서는 NOT -> AND -> OR 순

//비교 연산자
const x = 1;
const y = "1";
let equals = x === y;
console.log(equals);
equals = x == y;
console.log(equals);
//===과 ==의 차이: 2개 있을 때에는 타입 검사 X
// 0 == false, null == undefined
equals = x !== y;
console.log(equals);
// != 경우 타입 검사 X
console.log(x >= y);
console.log("안녕" + "하세요");

//조건문
const f = 1;
if (f + 1 === 2) {
  console.log("f + 1 이 2 입니다.");
}
if (true) {
  const f = 2;
  console.log("if문 안의 f 값은 " + f);
}
console.log("if문 밖의 a 값은 " + f);
//if - else if - else 순

const device = 'iphone';
switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "galaxy":
    console.log("갤럭시!");
    break;
  default:
    console.log("어느 회사?");
}

//함수
function add(a, b){
  return a + b;
}
const sum = add(a, b);
console.log(sum);

function hello(name) {
  //ES6의 템플릿 리터럴 (Template Literal)
  console.log(`Hello, ${name}!`);
  //console.log('Hello, ' + name + '!');
}
hello('Amy');

const ad = (a, b) => {
  return a + b;
}; //혹은 const ad = (a, b) => a + b;
console.log(ad(1, 2));

//객체
const dog = {
  name: '멍멍이',
  age: 2,
  sound: 4,
  say: function say(){
    console.log(this.sound);
  } //this: 자신이 속해있는 객체
};
console.log(dog.name);
console.log(dog.age);
dog.say();
console.log(dog);

function print(dog){ //function print({name, age})도 가능
  const { name, age } = dog; //객체 비구조화 할당
  const text = `${name}: ${age}`;
  console.log(text);
  //const text = '${hero.name}: ...
}
print(dog);

const numbers = {
  a: 1,
  b: 2,
  get sum(){
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.a = 5;
console.log(numbers);
console.log(numbers.sum);