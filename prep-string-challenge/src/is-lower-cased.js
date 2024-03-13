/* exported isLowerCased */
function isLowerCased(word) {
  for (i=0;i<word.length;i++) {
    if (word[i].match(/^[A-za-z]+$/)) {
      if (word[i] === word[i].toUpperCase()) {
        return false;
      }
    }
  }
  return true;
}
