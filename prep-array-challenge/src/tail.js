/* exported tail */
function tail(array) {
  const newArray = [];
  for (i=1;i<array.length;i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
