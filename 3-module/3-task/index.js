function camelize(str) {
  // ваш код...
  return str
      .split('-')
      .map((key, index) => index == 0 ? key : key[0].toUpperCase() + key.slice(1))
      .join('')
}
