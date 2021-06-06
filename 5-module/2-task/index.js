function toggleText() {
  // ваш код...
  let button = document.getElementsByClassName("toggle-text-button")[0];
  let someText = document.getElementById("text");
  button.onclick = function () {
    if (someText.hidden == false) {
      someText.hidden = true;
    } else {
      someText.hidden = false;
    }
  };
}
