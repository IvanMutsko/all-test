// =================================================

// const getData = async url => {
//   const res = await fetch(url);
//   const json = await res.json();

//   return json;
// };

// const url = 'https://jsonplaceholder.typicode.com/todos/';

// try {
//   const data = await getData(url);
//   console.log(data);
// } catch (error) {
//   console.error(error.message);
// }

// =================================================

// const asyncFn = async () => {
//   return 'Success!';
// };

// const asyncFn = async () => {
//   throw new Error('Bla bla bla....')
// };

// asyncFn()
//   .then(value => console.log(value))
//   .catch(error => console.error(error));

// const timerPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 2000);
//   });

// const asyncFn = async () => {
//   console.log('Timer start');
//   const startTime = performance.now();
//   await timerPromise();
//   const endTime = performance.now();
//   console.log('Timer ended', endTime - startTime);
// };

// asyncFn();

// =================================================

// const myPromise = new Promise((resolve, reject) => {});

// myPromise.then(value => {}).catch(error => {});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error));

// const getData = url =>
//   new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(json => resolve(json))
//       .catch(error => reject(error));
//   });

// getData('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));

// =================================================

// class NumbersArray extends Array {
//   sum() {
//     return this.reduce((el, acc) => (acc += el), 0);
//   }
// }

// const myArr = new NumbersArray(2, 5, 7);

// console.log(myArr);
// myArr.sum();

// console.log(myArr.sum());

// const myName = 'Ivan';
// console.log(myName);
// console.log(myName.toLocaleUpperCase());

// =================================================

// class Comment {
//   constructor(text) {
//     (this.text = text), (this.votesQty = 0);
//   }

//   static mergeComments(first, second) {
//     return `${first} ${second}`;
//   }

//   upvote() {
//     this.votesQty += 1;
//   }
//   downvote() {
//     this.votesQty -= 1;
//   }
// }

// const test = Comment.mergeComments('First comment', 'Second comment');

// const myComment = new Comment('My new comment');

// console.log(Comment);
// console.log(myComment);
// console.log(test);

// =================================================

// class Comment {
//   constructor(text) {
//     (this.text = text), (this.votesQty = 0);
//   }

//   upvote() {
//     this.votesQty += 1;
//   }
//   downvote() {
//     this.votesQty -= 1;
//   }
// }

// console.log(Comment);

// const firstComment = new Comment('My first comment');
// firstComment.upvote();
// firstComment.upvote();
// firstComment.upvote();

// firstComment.downvote();

// console.log(firstComment);

// const isCommentEx = firstComment instanceof Comment;

// console.log(isCommentEx); //перевірка приналежності до класу

// console.log(firstComment.text);
// console.log(firstComment.votesQty);

// console.log(firstComment.hasOwnProperty('text'));
// console.log(firstComment.hasOwnProperty('votesQty'));
// console.log(firstComment.hasOwnProperty('upvote'));
// console.log(firstComment.hasOwnProperty('downvote'));
// console.log(firstComment.hasOwnProperty('hasOwnProperty'));

// const secondComment = new Comment('My second comment');
// const thirdComment = new Comment('My third comment');

// =================================================

// const myArr = [true, 124, 'qwe', undefined, null, [], {}];
// console.log(myArr);

// const typesArr = [];

// for (let i = 0; i < myArr.length; i++) {
//   console.log(typeof myArr[i]);
//   typesArr.push(typeof myArr[i]);
// }

// console.log(typesArr);

// myArr.forEach((el, idx) => {
//   console.log(`"${el}" have index: ${idx}`);
// });

// let i = 0;

// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// let y = 5;

// do {
//   console.log(y);
//   y += 5;
// } while (y < 25);

// for (const key in myArr) {
//   console.log(myArr[key]);
// }

// const person = {
//   name: 'Ivan',
//   age: 27,
//   city: 'Lviv',
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));

// Object.keys(person).forEach(el => console.log(person[el]));

// const text = 'qwased';

// for (let el of text) {
//   console.log(el);
// }

// =================================================

// const sumFn = (a, b) => {
//   return a + b;
// };

// const value1 = 3;
// const value2 = 0;

// value1 && value2 ? console.log(sumFn(value1, value2)) : console.log('One is args 0');

// =================================================

// const key = 4;

// switch (key) {
//   case 1:
//     console.log(`Key is 1`);
//     break;
//   case 2:
//     console.log(`Key is 2`);
//     break;
//   case 3:
//     console.log(`Key is 3`);
//     break;

//   default:
//     console.log(`Key is not a 1/2/3`);
//     break;
// }

// =================================================

// let val = 10;

// if (val === 5) {
//   console.log((val = 5));
// }
// if (val === 10) {
//   console.log((val = 10));
// }
// if (val === 20) {
//   console.log((val = 20));
// }

// const person = {
//   name: 'Ivan',
//   age: 27,
//   city: 'Lviv',
// };

// if (!person.name) {
//   console.log(`Name is undefined`);
// } else {
//   console.log(`Person name is ${person.name}`);
// }

// const sumFn = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'One of arguments NaN';
//   }
//   return a + b;
// };

// console.log(sumFn(10, 5));
// console.log(sumFn('asd', 5));

// =================================================

// const person = {
//   name: 'Ivan',
//   age: 27,
//   city: 'Lviv',
//   logFunc: value => 'Inner function...',
// };

// const { name, age, city, logFunc } = person;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(logFunc());

// const fruits = ['Apple', 'Banana', 'Mango'];

// const [first, second, third] = fruits;

// console.log(first);
// console.log(second);
// console.log(third);

// =================================================

// const myArr = [1, 2, 3];

// console.log(myArr);

// myArr.push(5);
// console.log(myArr);

// const removedEl = myArr.pop();
// console.log(removedEl);

// myArr.unshift(true);

// const removedEl2 = myArr.shift();
// console.log(removedEl2);

// myArr.forEach(el => console.log(el * 3));

// console.log(myArr);

// const newArr = myArr.map(el => el * 5);
// console.log(newArr);

// =================================================

// const myArr = [1, 2, 3, 4, 5, 6, 7];
// console.log(myArr);

// const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(myArr2);

// const myArr3 = myArr;

// console.log(myArr === myArr2);
// console.log(myArr === myArr3);
// console.log(myArr.length);
// console.log(myArr[4]);
// console.log(myArr[10]);

// myArr.length = 15;
// console.log(myArr);
// console.log(myArr[10]);

// =================================================

// const myFn = a => {
//   console.log(a);
// };

// myFn(5 === 2);

// =================================================

// const FnWithError = () => {
//   throw new Error('Some error in function...');
// };

// try {
//   FnWithError();
// } catch (error) {
//   console.error(error.message);
// }

// console.log('Continue...');

// =================================================

// function myFn(a, b) {
//   let c;
//   a += 1;
//   c = a + b;
//   return c;
// } // можна випадково переназначити

// // myFn = 5
// console.log(myFn);

// const myFn2 = function (a, b) {
//   let c;
//   a += 1;
//   c = a + b;
//   return c;
// };

// const myFn3 = (a, b = 5) => {
//   let c;
//   a += 1;
//   c = a + b;
//   return c;
// };

// console.log(myFn3(2));
// console.log(myFn3(2, 6));

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// });

// const post = {
//   title: 'Learn JS',
//   text: 'Learning JS is amazing',
// };

// console.table(newPost(post));

// setTimeout(function () {
//   console.log('Test in timeout');
// }, 2000);

// setTimeout(() => {
//   console.log('Test in timeout');
// }, 3000);

// =================================================

// console.log(4 && true && 0);
// console.log(0 || false || null);
// const text = 'Hello';
// const text2 = 'World';
// console.log(text + ' ' + 'World' + '!');
// console.log(`${text} ${text2}! My name Ivan`);

// =================================================

// const a = 5;

// function myFn() {
//   function innerFn() {
//     console.log(a);
//   }
//   innerFn();
// }

// myFn();

// let q;
// let w;

// function fn2() {
//   let w;
//   q = 10;
//   w = 4;

//   console.log(w);
// }

// fn2();

// console.log(q);
// console.log(w);

// =================================================

// function fn(a, b) {
//   return a + b;
// }

// const first = 3;
// const second = 5;

// console.log(fn(first, second));

// console.dir(fn);

// const person = {
//   name: 'Key',
//   age: 27,
//   city: 'Lviv',
// };

// function increaseAge(personObj) {
//   const updatedPerson = { ...personObj };
//   updatedPerson.age += 1;

//   return updatedPerson;
// }

// const newPerson = increaseAge(person);
// console.log(newPerson);
// console.log(person);

// function printMyName() {
//   console.log('Ivan');
// }

// setTimeout(printMyName, 2000);

// =================================================

// console.log(JSON.stringify({ name: 'John', age: 30, car: null }));

// const age = 22;

// const person = {
//   name: 'Key',
//   age,
//   city: 'Lviv',
//   logFunc: value => {
//     console.log(value);
//   },
// };

// console.log(person);

// person.name = 'Ivan';
// delete person.age;

// const log = 'active';
// person[log] = true;

// person.skills = {};

// person.skills.js = true;
// person.skills.css = true;
// person.skills.html = true;

// person.logFunc('I`m in func');

// console.table(person);

// const b = { ...person }; //вкладений об'єкт мутується
// const c = Object.assign({}, person); //вкладений об'єкт мутується
// const d = JSON.parse(JSON.stringify(person)); //вкладдені обєкти не мутуються

// b.age = 27;
// console.log(b);
// console.table(person);
// console.log(c);
// console.log(d);
