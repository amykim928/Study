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
  let result = numbers.reduce((accumulator, current) => {
    if (current > 10) accumulator++;
    return accumulator;
  }, 0);
  return result;
}

function countBiggerThanTen2(numbers) {
  let result = 0;
  numbers.forEach((n) => {
    if (n > 10) result++;
  });
  return result;
}

function countBiggerThanTen3(numbers) {
  return numbers.filter((n) => n > 10).length;
}

let count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
count = countBiggerThanTen2([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
count = countBiggerThanTen3([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);

//프로토타입과 클래스
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  // this.say = function(){
  //   console.log(this.sound);
  // }
}

Animal.prototype.say = function () {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;
//.prototype.[원하는키] =

const dogs = new Animal("개", "멍멍이", "멍멍");
const cats = new Animal("고양이", "야옹이", "야옹");

dogs.say();
cats.say();

console.log(dogs.sharedValue);
console.log(cats.sharedValue);

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}
Cat.prototype = Animal.prototype;

const dogs2 = new Dog("멍멍이", "멍멍");
const cats2 = new Cat("야옹이", "야옹");

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
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cats extends Animals {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dogs3 = new Animals("개", "멍멍이", "멍멍");
const cats3 = new Animals("고양이", "야옹이", "야옹");

dogs3.say();
cats3.say();

const dogs4 = new Dogs("멍멍이", "멍멍");
const cats4 = new Cats("야옹이", "야옹");

dogs4.say();
cats4.say();

class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을/를 파는 음식점들:`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노 피자");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();

//삼항 연산자
const array = [];
// let text = "";
// if (array.length === 0) {
//   text = "배열이 비어있습니다.";
// } else {
//   text = "배열이 비어있지 않습니다.";
// }
let text =
  array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
console.log(text);

const condition1 = false;
const condition2 = false;

const conditionValue = condition1 ? "와우!" : condition2 ? "blabla" : "foo";
console.log(conditionValue);

//Truthy and Falsy
function printP(person) {
  //  if (person === undefined || person === null) {
  if (!person) {
    console.log("person이 없네요.");
    return;
  }
  console.log(person.name);
}

// const person = {
//   name: 'John'
// };
const person = null;
printP(person);

console.log(!3);
console.log(!"hello");
console.log(!["array?"]);
console.log(![]);
console.log(!{ value: 1 });

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
//NaN: Not A Number 문자열을 숫자로 변환 시 발생

//단축 평가 (short-circuit evauluation) 논리 계산법
const mong = {
  name: "멍멍이"
};

function getName(animal) {
  // if(animal){
  //   return animal.name;
  // } //객체가 있을 때
  // return undefined;
  return animal && animal.name;
}

const name = getName(mong);
console.log(name);
/* A && B : A가 Truthy한 값이면 B가 결과값
A가 Falsy한 값이면 A가 결과값 */
const name2 = getName();
console.log(name2);

console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1

const namelessDog = {
  name: ""
};

function getName2(animal) {
  const name = animal && animal.name;
  // if(!name){
  //   return '이름이 없는 동물입니다.';
  // }
  // return name;
  return name || "이름이 없는 동물입니다";
}

const nameless = getName2(namelessDog);
console.log(nameless);
/* A || B : A가 Truthy할 경우 결과는 A
A가 Falsy할 경우 결과는 B */

console.log(true || "hello"); // true
console.log(false || "hello"); // hello
console.log("hello" || "bye"); // hello
console.log(null || "hello"); // hello
console.log(undefined || "hello"); // hello
console.log("" || "hello"); // hello
console.log(0 || 0); // 0
console.log(1 || "hello"); // 1
console.log(1 || 1); // 1

//함수의 기본 파라미터
function calculateCircleArea(r = 1) {
  //const radius = r || 1; //r 값이 없을 경우 기본값
  return Math.PI * r * r;
}
const area = calculateCircleArea(4);
console.log(area);

const calculateCircle = (r = 1) => Math.PI * r * r;
const area2 = calculateCircle();
console.log(area2);

//조건문 심화
function isAnimal(text) {
  // return (
  //   text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  // );
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(text);
}
console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false

const isAni = (name) => ["고양이", "개", "거북이", "너구리"].includes(name);

console.log(isAni("개")); // true
console.log(isAni("노트북")); // false

function getSound(animal) {
  // if (animal === '개') return '멍멍!';
  // if (animal === '고양이') return '야옹~';
  // if (animal === '참새') return '짹짹';
  // if (animal === '비둘기') return '구구 구 구';
  // return '...?';
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~",
    참새: "짹짹",
    비둘기: "구구 구 구"
  };
  return sounds[animal] || "...?";
}

console.log(getSound("개")); // 멍멍!
console.log(getSound("비둘기")); // 구구 구 구

function makeSound(animal) {
  const tasks = {
    개() {
      console.log("멍멍!");
    },
    고양이() {
      console.log("고양이");
    },
    비둘기() {
      console.log("구구 구 구");
    }
  };
  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  tasks[animal]();
}

makeSound("고양이");
makeSound("노트북");

//비구조화 할당 (구조분해) 문법
const object = { aa: 1,};
const { aa, bb = 2 } = object;
console.log(aa);
console.log(bb);

const object2 = { aaa: 1};
function printab({aaa, bbb = 2}){
  console.log(aaa);
  console.log(bbb);
}
printab(object2); //값이 없으면 undefined

const an = {
  name: '멍멍이',
  type: '개'
};

const nickname = an.name;
console.log(nickname);
const { name: nickname2 } = an;
console.log(nickname2);

const arry = [1];
const [one, two = 2] = arry;

console.log(one);
console.log(two);

const deepObject = {
  state: {
    information: {
      namename: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  deepValue: 5
};

// const { namename, languages } = deepObject.state.information;
// const { deepValue } = deepObject;

// const extracted = {
//   namename, //namename: namename과 동일
//   languages,
//   deepValue
// };
// console.log(extracted);

const {
  state: {
    information: {namename, languages}
  },
  deepValue
} = deepObject;

const extracted = {
  namename,
  languages,
  deepValue
};

console.log(extracted);

//spread와 rest
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime, 
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};
//기존의 것을 건드리지 않고, 새로운 객체 생성

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const animalArr = ['개', '고양이', '참새'];
const anotherAnimals = [...animalArr, '비둘기', ...animalArr];
console.log(animalArr)
console.log(anotherAnimals)

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest); //rest는 나머지 값

const { attribute, ...sslime } = cuteSlime;
console.log(attribute)
console.log(sslime);

const numberss = [0, 1, 2, 3, 4, 5, 6];
const [ first, ...other] = numberss;
console.log(first);
console.log(other);

// function sumRest(a, b, c, d, e, f, g) {
//   let sum = 0;
//   if (a) sum += a;
//   if (b) sum += b;
//   if (c) sum += c;
//   if (d) sum += d;
//   if (e) sum += e;
//   if (f) sum += f;
//   if (g) sum += g;
//   //undefined이 값으로 들어오면 NaN이 되는 걸 방지
//   return sum;
// } -> 훨씬 더 간단한 방법으로
function sumRest(...rest){
  return rest.reduce((acc, current) => acc += current, 0);
}

const result = sumRest(...numberss);
console.log(result);

function max(...numbers) {
  return numbers.reduce(
    (acc, current) => (current > acc ? current : acc),
    numbers[0]
  );
}

const rresult = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(rresult);

/*비동기 처리: 특정 코드의 연산이 끝날 때까지 코드의 실행을
멈추지 않고 다음 코드를 먼저 실행*/
// console.log('Hello');
// setTimeout(function() {
// 	console.log('Bye');
// }, 3000);
// console.log('Hello Again');
//hello -> hello again -> 3초 후 bye 출력

//promise
// function increaseAndPrint(n, callback) {
//   setTimeout(() => {
//     const increased = n + 1;
//     console.log(increased);
//     if (callback) {
//       callback(increased);
//     }
//   }, 1000);

// }
//setTimeout(function(){}, delay);
//clearTimeout(): setTimeout에서 반환한 숫자타입 값 해제

// increaseAndPrint(0, n => {
//   increaseAndPrint(n, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           console.log('끝!');
//         });
//       });
//     });
//   });
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
// //resolve를 호출할 때 특정 값을 파라미터로 넣으면,
// //이 값은 작업이 끝나고 나서 사용할 수 있음 (.then을 붙여서)

// myPromise.then(n => {
//   console.log(n);
// });

const myPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
     reject(new Error()); //실패하는 상황에 사용
   }, 1000);
 });

 myPromise
   .then(n => {
     console.log(n);
   })
   .catch(error => {
     console.log(error); //실패했을 때 수행할 작업
   });