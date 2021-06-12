import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = this.makeCard(product);
    this.addProduct(product);
  }
  makeCard(product) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.insertAdjacentHTML(
      'afterbegin',
      `<div class="card__top">
      <img
        src="/assets/images/products/${product.image}"
        class="card__image"
        alt="product"
      />
      <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
      </button>
    </div>`
    );
    return card;
  }
  addProduct(product) {
    let button = this.elem.querySelector('.card__button');
    let eventBuy = new CustomEvent('product-add', {
      detail: product.id,
      bubbles: true,
    });

    button.onclick = function () {
      button.dispatchEvent(eventBuy);
    };
  }
}
