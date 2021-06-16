import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.makeSlides();
    this.addProduct();
    this.initCarousel();
  }
  makeSlides() {
    let slidesCarousel = this.slides
      .map(
        (slide) =>
          `<div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${
          slide.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button" data-product-id="${
            slide.id
          }">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
      )
      .join('');

    this.elem.insertAdjacentHTML(
      'afterbegin',
      `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${slidesCarousel}
      </div>`
    );
  }
  initCarousel() {
    let carousel = this.elem.querySelector('.carousel__inner');
    let image = this.elem.querySelector('.carousel__img');
    let maxSlides = this.elem.querySelectorAll('.carousel__slide').length;
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let currentSlide = 1;
    arrowLeft.style.display = 'none';
    arrowRight.onclick = function () {
      currentSlide++;
      carousel.style.transform = `translateX(-${
        image.offsetWidth * (currentSlide - 1)
      }px)`;
      if (currentSlide == maxSlides) {
        arrowRight.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
      }
    };
    arrowLeft.onclick = function () {
      currentSlide--;
      carousel.style.transform = `translateX(-${
        image.offsetWidth * (currentSlide - 1)
      }px)`;
      if (currentSlide == 1) {
        arrowLeft.style.display = 'none';
      } else {
        arrowRight.style.display = '';
      }
    };
  }

  addProduct() {
    let buttons = this.elem.querySelectorAll('.carousel__button');
    for (let button of buttons) {
      let event = new CustomEvent('product-add', {
        detail: button.dataset.productId,
        bubbles: true,
      });

      button.onclick = function () {
        button.dispatchEvent(event);
      };
    }
  }
}
