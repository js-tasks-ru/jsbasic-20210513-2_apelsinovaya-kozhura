function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    str = str.substring(0, maxlength - 1) + "…";
  }
  return str;
}
