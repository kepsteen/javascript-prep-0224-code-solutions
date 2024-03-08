function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoResult = addTwoNumbers(1,2)
console.log('addTwoNumbers result: ', addTwoResult)

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convHours = convertHoursToMinutes(3);
console.log('convertHoursToMinutes result: ', convHours)

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('Shawn');
console.log('getGreeting result: ', greeting)

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMulltiplyResult = addAndMultiplyBy5(5, 10);
console.log('addAndMultiplyBy5 result: ', addAndMulltiplyResult)

function multiplyAndDivideBy5(num1, num2) {
  return(num1 * num2)/5;
}
const multiplyAndDivideResult = multiplyAndDivideBy5(2,5);
console.log('multiplyAndDivideBy5 result: ',multiplyAndDivideResult)

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractResult = subtractTwoNumbers(3,2);
console.log('subtractTwoNumbers result: ', subtractResult)

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumferenceResult = getCircleCircumference(2);
console.log('getCircleCircumference result: ', circumferenceResult)

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Cody', 'Epstein');
console.log('fullName result: ', fullName)

function cube(number) {
  return number * number * number;
}
const cubedNumber = cube(2);
console.log('cube result: ', cubedNumber)
