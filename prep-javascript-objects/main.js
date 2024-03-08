const person = {
  firstName: 'Lebron',
  lastName: 'James',
  hobby: 'Playing Basketball'
}
console.log(person);

let fullName = person.firstName + ' ' + person.lastName;
console.log('Full name: ', fullName);

person.job = 'Basketball Player';
console.log('Job: ',person.job)

person.previousJob = 'High school student';
console.log('Previous Job: ', person['previousJob']);

console.log(person)
