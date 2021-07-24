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

const device = "iphone";
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
function add(a, b) {
  return a + b;
}
const sum = add(a, b);
console.log(sum);

function hello(name) {
  //ES6의 템플릿 리터럴 (Template Literal)
  console.log(`Hello, ${name}!`);
  //console.log('Hello, ' + name + '!');
}
hello("Amy");

const ad = (a, b) => {
  return a + b;
}; //혹은 const ad = (a, b) => a + b;
console.log(ad(1, 2));

//객체
const dog = {
  name: "멍멍이",
  age: 2,
  sound: 4,
  say: function say() {
    console.log(this.sound);
  } //this: 자신이 속해있는 객체
};
console.log(dog.name);
console.log(dog.age);
dog.say();
console.log(dog);

console.log(Object.entries(dog));
console.log(Object.keys(dog));
console.log(Object.values(dog));

function print(dog) {
  //function print({name, age})도 가능
  const { name, age } = dog; //객체 비구조화 할당
  const text = `${name}: ${age}`;
  console.log(text);
  //const text = '${hero.name}: ...
}
print(dog);

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum); //객체 속 sum 변수
console.log(numbers.a); //getter 함수
console.log(numbers.b);

numbers.a = 5; //setter 함수 (동시에 일반 함수도)
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);

//배열
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];
console.log(objects);
console.log(objects[1]);

objects.push({
  name: "멍뭉이"
}); //배열에 새 항목 추가 시 push 함수
console.log(objects[2]);
console.log(objects.length); //배열 길이

//반복문
const names = ["멍멍이", "야옹이", "멍뭉이"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
for (let name of names) {
  console.log(name);
} //사용할 일은 별로.. 배열의 내장 함수 사용

for (let key in dog) {
  console.log(`${key}: ${dog[key]}`);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break;
}

function biggerThanThree(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 3) {
      result.push(nums[i]);
    }
  }
  return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(nums));

//배열 내장함수
const arrayNum = [11, 12, 13, 14, 15];

arrayNum.forEach((num) => {
  console.log(num);
}); //함수의 파라미터 num은 각 원소를 가리킴

const square = (n) => n * n; //변수 아니고 변화함수
const squared = arrayNum.map(square);
//arrayNum.map(n => n * n);
console.log(squared);

const index = arrayNum.indexOf(13);
console.log(index);
//단 배열 안에 있는 값이 객체거나, 배열이면 찾을 수 없음

const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];

const indx = todos.findIndex((todo) => todo.id === 4);
console.log(indx);

const todo = todos.find((todo) => todo.id === 4);
console.log(todo); //find함수는 찾아낸 값 자체를 반환

const tasksNotDone = todos.filter((todo) => todo.done === false);
//todos.filter(todo => !todo.done);
console.log(tasksNotDone);

arrayNum.splice(-2, 1);
console.log(arrayNum); //splice(몇 번째, 몇 개)

const slices = arrayNum.slice(0, 2); //0 이상 2 미만
console.log(slices);
console.log(arrayNum);
//slice는 기존 배열을 건드리지 않음 (splice와의 차이)

const shiftValue = arrayNum.shift();
console.log(shiftValue);
console.log(arrayNum); //첫번째 원소 제거

const popValue = arrayNum.pop();
console.log(popValue);
console.log(arrayNum); //마지막 원소 제거

arrayNum.unshift(11);
console.log(arrayNum); //맨 앞 새 원소 추가

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated); //합치는 배열에는 영향 없음

const joinArr = [1, 2, 3, 4, 5];
console.log(joinArr.join());
console.log(joinArr.join(" "));
console.log(joinArr.join(", ")); //배열 값을 문자열 형태로

const reduceArr = [1, 2, 3, 4, 5];
let summ = reduceArr.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);
console.log(summ);
let avg = reduceArr.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
});
console.log(avg);
/*두 개의 파라미터:
1) accumulator, current, index, array를 파라미터로 가져와서 
결과 반환하는 콜백함수
(accumulator: 누적 값, current: 현재 값, 
index: 현재 인덱스, array: 현재 처리 중인 배열 자신)
2) reduce 함수에서 사용할 초깃값
*/

function countBiggerThanTen(numbers) {
  let result = numbers.reduce( (accumulator, current) => {
    if(current > 10) accumulator ++;
    return accumulator;
  }, 0);
  return result;
}

function countBiggerThanTen2(numbers) {
  let result = 0;
  numbers.forEach(n => {
    if(n > 10) result++;
  })
  return result;
}

function countBiggerThanTen3(numbers) {
  return numbers.filter(n => n > 10).length;
}

let count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
count = countBiggerThanTen2([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
count = countBiggerThanTen3([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);

//프로토타입과 클래스
function Animal(type, name, sound){
  this.type = type;
  this.name = name;
  this.sound = sound;
  // this.say = function(){
  //   console.log(this.sound);
  // }
}

Animal.prototype.say = function(){
  console.log(this.sound);
}
Animal.prototype.sharedValue = 1
//.prototype.[원하는키] =


const dogs = new Animal('개', '멍멍이', '멍멍');
const cats = new Animal('고양이', '야옹이', '야옹');

dogs.say()
cats.say()

console.log(dogs.sharedValue);
console.log(cats.sharedValue);

function Dog(name, sound){
  Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dogs2 = new Dog('멍멍이', '멍멍');
const cats2 = new Cat('야옹이', '야옹');

dogs2.say();
cats2.say();

class Animals {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  } //자동으로 prototype으로 등록
}

class Dogs extends Animals {
  constructor(name, sound){
    super('개', name, sound);
  }
}

class Cats extends Animals {
  constructor(name, sound){
    super('고양이', name, sound);
  }
}

const dogs3 = new Animals('개', '멍멍이', '멍멍');
const cats3 = new Animals('고양이', '야옹이', '야옹');

dogs3.say();
cats3.say();

const dogs4 = new Dogs('멍멍이', '멍멍');
const cats4 = new Cats('야옹이', '야옹');

dogs4.say();
cats4.say();

class Food {
  constructor(name) {
    this.name = name
    this.brands = [];
  }
  addBrand(brand){
    this.brands.push(brand);
  }
  print(){
    console.log(`${this.name}을/를 파는 음식점들:`);
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print()
chicken.print();