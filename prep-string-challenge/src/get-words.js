/* exported getWords */
function getWords(string) {
  if (string === '') {
    return []
  }
  else {
    const newArray = string.split(' ');
    return newArray;
  }
}
