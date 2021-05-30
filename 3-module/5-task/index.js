function getMinMax(str) {
  // ваш код...
  let result = {
    min: '',
    max: ''
  };
  let strWithoutSpace = str.split(' ').join();
  let strWithoutComma = strWithoutSpace.split(',');
  let numbers = strWithoutComma.filter(Number);
  result.max = Math.max.apply(Math, numbers);
  result.min = Math.min.apply(Math, numbers);
  return result
}
