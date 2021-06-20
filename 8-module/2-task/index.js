import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};

    this.createProductGrig();
  }

  createProductGrig() {
    this.elem = document.createElement('div');
    this.elem.classList.add('products-grid');
    this.elem.insertAdjacentHTML(
      'afterbegin',
      `<div class="products-grid__inner"></div>`
    );

    this.product_inner = this.elem.querySelector('.products-grid__inner');

    this.filteredProducts = this.products;
    this.updateCards();
  }

  updateCards() {
    this.filteredProducts.forEach((product) => {
      let cards = new ProductCard(product).elem;
      this.product_inner.append(cards);
    });
  }

  updateFilter(filter) {
    this.filters = Object.assign({}, this.filters, filter);
    this.filteredProducts = this.products
      .filter((product) => {
        if (this.filters.noNuts) {
          if (product.nuts === false || product.nuts === undefined) {
            return true;
          }
          return false;
        }
        return true;
      })
      .filter((product) => {
        if (this.filters.vegeterianOnly) {
          if (product.vegeterian === true) {
            return true;
          }
          return false;
        }
        return true;
      })
      .filter((product) => {
        if (this.filters.maxSpiciness) {
          if (product.spiciness <= this.filters.maxSpiciness) {
            return true;
          }
          return false;
        }
        return true;
      })
      .filter((product) => {
        if (this.filters.category) {
          if (
            this.filters.category === product.category ||
            this.filters.category === ''
          ) {
            return true;
          }
          return false;
        }
        return true;
      });

    this.product_inner.innerHTML = null;
    this.updateCards();
  }
}
