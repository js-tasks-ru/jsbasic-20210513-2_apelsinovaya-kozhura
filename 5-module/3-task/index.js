function initCarousel() {
  // ваш код...
  let widthImage = document.querySelector('.carousel__img').offsetWidth;
  let carousel = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let currentSlide = 1;
  arrowLeft.style.display = 'none';
  arrowRight.onclick = function () {
    currentSlide++;
    carousel.style.transform = `translateX(-${
      widthImage * (currentSlide - 1)
    }px)`;
    if (currentSlide == 4) {
      arrowRight.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
  };
  arrowLeft.onclick = function () {
    currentSlide--;
    carousel.style.transform = `translateX(-${
      widthImage * (currentSlide - 1)
    }px)`;
    if (currentSlide == 1) {
      arrowLeft.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  };
}
