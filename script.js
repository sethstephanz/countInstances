let string = 'hello';

function countAllCharacters(str) {
  let obj = {};
  let split = str.split('');
  for (let i in split) {
    let indexValue = split[i];
    if (!obj.hasOwnProperty(indexValue)) {
      obj[indexValue] = 1;
    } else {
      obj[indexValue] += 1;
    }
  }
  return obj;
}

countAllCharacters(string);
