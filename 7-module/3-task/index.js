export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.addEventListener('click', (event) => this.onClick(event));
    this.makeStepSlider();
  }
  makeStepSlider() {
    this.elem.innerHTML = `<div class="slider__thumb">
    <span class="slider__value">0</span>
  </div>

  <!--Полоска слайдера-->
  <div class="slider__progress" style="width: 0%"></div>

  <!-- Шаги слайдера (вертикальные чёрточки) -->
  <div class="slider__steps">
    <!-- текущий выбранный шаг выделен этим классом -->

  </div>
  </div>`;
    let sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; this.steps > i; i++) {
      if (this.value == i) {
        sliderSteps.insertAdjacentHTML(
          'beforeend',
          `<span class='slider__step-active'></span>`
        );
      } else {
        sliderSteps.insertAdjacentHTML('beforeend', `<span></span>`);
      }
    }
  }

  onClick(event) {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;

    let value = Math.round(leftRelative * segments);
    let valuePercents = (value / segments) * 100;

    let sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = value;

    let activeStep = this.elem.querySelector('.slider__step-active');
    activeStep.classList.remove('slider__step-active');

    let sliderSteps = this.elem.querySelector('.slider__steps');
    sliderSteps.children[value].classList.add('slider__step-active');

    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.style.left = `${valuePercents}%`;

    let progress = this.elem.querySelector('.slider__progress');
    progress.style.width = `${valuePercents}%`;

    let sliderChange = new CustomEvent('slider-change', {
      detail: value,
      bubbles: true,
    });
    this.elem.dispatchEvent(sliderChange);
  }
}
