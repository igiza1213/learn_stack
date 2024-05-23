// // 배열 array
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(typeof array);
// console.log(array);
// console.log(array[0]);
// console.log(array[3]);
// console.log(array.length);
// console.log(Array.isArray(array));

// // 객체 object

// const object = {
//   name: "Javascript",
//   position: "컴파일 언어",
//   rank: 1,
// };

// console.log(typeof object);
// console.log(object.name);

// /*
// 이름: msg
// 나이: 17
// 성적: [99, 100, 88, 77, 45]
// 자동차 유무: 있음
// */

// const man1 = ["msg", 17, [99, 100, 88, 77, 45], true];

// const man2 = {
//   name: "msg",
//   age: 17,
//   score: [99, 100, 88, 77, 45],
//   car: true,
//   say: function () {
//     console.log("Hello");
//   },
// };

// // 같이 쓰기

// const peoples = [
//   { name: "msg", age: 17 },
//   { name: "dnjeh", age: 17 },
//   { name: "samboku", age: 17 },
//   { name: "naebin", age: 16 },
// ];

//함수
function add(a, b) {
  let sum = a + b;
  return sum;
}

const result = add(3, 4);

console.log(result);

//화살표 함수
const name = (arg1, arg2) => {
  // 코드
};

const a = () => 1;
const b = () => (a, b);

//콜백함수

const array = [1, 2, 3, 4, 5];
array.map((value, index) => {
  console.log(value, index);
});
