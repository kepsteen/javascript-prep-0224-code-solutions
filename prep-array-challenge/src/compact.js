/* exported compact */
function compact(array) {
  const newArray = [];
  for (i=0;i<array.length;i++) {
    if (array[i]) {
      newArray.push(array[i])
    }
  }
  return newArray;
}
