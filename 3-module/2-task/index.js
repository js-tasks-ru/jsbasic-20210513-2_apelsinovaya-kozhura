function filterRange(arr, a, b) {
  // ваш код...
  let result = arr.filter(item => a <= item && item <= b);
  return result;
}
