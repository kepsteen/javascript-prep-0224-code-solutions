function whileLoop1() {
  let newArray = [];
  let numToAdd = 0;
  while(numToAdd <= 9) {
    newArray.push(numToAdd);
    numToAdd += 1;
  }
  return newArray
}
const whileLoop1Result = whileLoop1();
console.log('whileLoop1: ', whileLoop1Result);

function whileLoop2() {
  let newArray = [];
  let numToAdd = 0;
  while (numToAdd <= 18) {
    newArray.push(numToAdd);
    numToAdd += 2;
  }
  return newArray
}
const whileLoop2Result = whileLoop2();
console.log('whileLoop2: ', whileLoop2Result)

function forLoop1 () {
  let newArray = [];
  for (num = 0; num <= 9; num ++) {
    newArray.push(num);
  }
  return newArray;
}
const forLoop1result = forLoop1();
console.log('forLoop1: ', forLoop1result)

function forLoop2() {
  for (i=100; i >= 0; i--) {
    if (i === 0) {
      console.log('BOOM');
    }
    else {
      console.log( 'Time to explosion: ' + i)
    }
  }
}
forLoop2();

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};

function forInLoop1(object) {
  let newArray = [];
  for (const property in object) {
    newArray.push(property)
  }
  return newArray
}
const forInLoop1Result = forInLoop1(person);
console.log('forInLoop1: ', forInLoop1Result)

function forInLoop2(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(object[key])
  }
  return newArray;
}
const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2: ', forInLoop2Result)
