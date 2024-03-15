/* exported getValues */
function getValues(object) {
  const valueArray = [];
  for (key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
