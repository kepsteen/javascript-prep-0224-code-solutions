function isAdult(age) {
  return (age >= 18) ? true : false;
}
let isAdultResult = isAdult(25);
console.log("Are they an adult (true/false): ", isAdultResult)

function didStudentPass(score) {
  return (score >= 70) ? true : false;
}
let didStudentPassResult = didStudentPass(69);
console.log("Did student pass?: ", didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  }
  else if (score < 70) {
    return 'D';
  }
  else if (score < 80) {
    return 'C';
  }
  else if (score < 90) {
    return 'B';
  }
  else if (score < 100) {
    return 'A';
  }
  else {
    return 'A++'
  }
}
let gradeCalculatorResult = gradeCalculator(110);
console.log('Student grade: ', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  }
  else if (season === 'spring') {
    'the flowers are blooming'
  }
  else if (season === 'winter') {
    return 'it is cold today'
  }
  else if(season === 'autumn') {
    return 'the leaves are changing colors';
  }
  else {
    return 'please enter a valid season'
  }
}
let seasonMessengerResult = seasonMessenger('winter');
console.log(seasonMessengerResult)

function dayDetector(dayOfTheWeek) {
  return (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') ? 'Have a good weekend' : 'It is a weekday!';
}
let dayDetectorResult = dayDetector('sunday');
console.log(dayDetectorResult)
