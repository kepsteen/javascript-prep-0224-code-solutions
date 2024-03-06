
let number1 = 5;
let number2 = 10;
let product = number1 * number2;
console.log('Product: ', product);
console.log('Type of product: ', typeof product)

let charge = 20;
let payment = 10;
let amountRemaining = charge - payment;
console.log('Amount remaining: ', amountRemaining)
console.log('Type of amountRemaining: ', typeof amountRemaining)


let assignments = 80;
let tests = 95;
let final = 90;
let grade = (assignments + final + tests)/3
console.log('Grade: ', grade)
console.log('Type of grade: ', typeof grade)

let firstName = 'Cody';
let lastName = 'Epstein';
let fullName = firstName + ' ' + lastName;
console.log('Full name: ', fullName)
console.log('Type of fullName: ', typeof fullName)

let pH = 2;
let isAcidic = null;
if (pH < 7) {
  isAcidic = true;
}
else {
  isAcidic = false;
}
console.log('isAcidic: ', isAcidic)
console.log('Type of isAcidic: ', typeof isAcidic)

let numberOfSoldiers = 300;
let isSparta = null;
if(numberOfSoldiers === 300) {
  isSparta = true;
}
else {
  isSparta = false;
}
console.log('isSparta: ', isSparta)
console.log('Type of isSparta: ', typeof isSparta)

let nickname = fullName;
nickname += ' is the GOAT!';
console.log('Nickname: ', nickname)
console.log('Type of nickname: ', typeof nickname)
