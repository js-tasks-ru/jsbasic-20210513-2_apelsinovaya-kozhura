import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.makeMenu();
    this.scrollRibbon();
    this.categorySelection();
  }
  makeMenu() {
    let menu = this.categories
      .map(
        (categorie) =>
          `<a href="#" class="ribbon__item" data-id="${categorie.id}">${categorie.name}</a>`
      )
      .join('');

    this.elem.insertAdjacentHTML(
      'afterbegin',
      `<!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner">
      ${menu}
    </nav>

    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`
    );
  }
  scrollRibbon() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    arrowLeft.classList.remove('ribbon__arrow_visible');
    arrowRight.classList.add('ribbon__arrow_visible');
    arrowRight.onclick = () => {
      ribbonInner.scrollBy(350, 0);
    };
    arrowLeft.onclick = () => {
      ribbonInner.scrollBy(-350, 0);
    };
    ribbonInner.onscroll = () => {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft == 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        arrowLeft.classList.add('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    };
  }
  categorySelection() {
    let ribbonItems = this.elem.querySelectorAll('.ribbon__item');
    for (let ribbonItem of ribbonItems) {
      ribbonItem.onclick = (event) => {
        event.preventDefault();
        let prevActiveItem = this.elem.querySelector('.ribbon__item_active');
        if (prevActiveItem) {
          prevActiveItem.classList.remove('ribbon__item_active');
        }
        ribbonItem.classList.add('ribbon__item_active');

        let newRibbon = new CustomEvent('ribbon-select', {
          detail: ribbonItem.dataset.id,
          bubbles: true,
        });

        this.elem.dispatchEvent(newRibbon);
      };
    }
  }
}
