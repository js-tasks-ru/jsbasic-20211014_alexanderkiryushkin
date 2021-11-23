import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.createSlide();
    this.initCarousel();
    this.addCustomEvent();
  }

  render() {
    this.elem = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    </div>
    `);
  }

  createSlide() {
    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');

    for (let slide of this.slides) {
      let carouselSlide = createElement(`
    <div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
    `);
      carouselInner.append(carouselSlide);
    }
    this.elem.append(carouselInner);
  }

  initCarousel() {
    const carousel = this.elem.querySelector('.carousel__inner');
    const rightButton = this.elem.querySelector('.carousel__arrow_right');
    const leftButton = this.elem.querySelector('.carousel__arrow_left');
    let slidesCount = carousel.children.length;
    let count = 1;
    let width = 0;
    leftButton.style.display = 'none';

    rightButton.addEventListener('click', () => {
      leftButton.style.display = '';
      count++;
      if (count === slidesCount) {
        rightButton.style.display = 'none';
      }
      carousel.style.transform = `translateX(-${width = width + carousel.offsetWidth}px)`;
    });

    leftButton.addEventListener('click', () => {
      count--;
      if (count === 1) {
        leftButton.style.display = 'none';
        rightButton.style.display = '';
      }
      carousel.style.transform = `translateX(-${width = width - carousel.offsetWidth}px)`;
    });
  }

  addCustomEvent() {
    let slideElements = this.elem.querySelectorAll(".carousel__slide");
    slideElements.forEach((element) => {
      let button = element.querySelector(".carousel__button");
      button.onclick = function () {
        button.dispatchEvent(
          new CustomEvent("product-add", {
            detail: element.dataset.id,
            bubbles: true,
          })
        );
      };
    });
  }
}
