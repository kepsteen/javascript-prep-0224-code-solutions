/* exported isUpperCased */
function isUpperCased(word) {
  for(i=0;i<word.length;i++) {
    if(word[i] === word[i].toLowerCase()) {
      return false
    }
  }
  return true

}
