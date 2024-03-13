/* exported capitalize */
function capitalize(string) {
let newString = string[0].toUpperCase();
for (i=1;i<string.length;i++) {
  newString += string[i].toLowerCase();
}
return newString
}
