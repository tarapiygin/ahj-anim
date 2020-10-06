export default class CollapseWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = null;
    this.btn = null;
    this.collapseEl = null;
  }

  static get markup() {
    return '<button class="like-button">Like!</button>';
  }

  bindToDOM() {
    this.element = document.createElement('div');
    this.element.classList.add('container', 'like-container');
    this.element.innerHTML = this.constructor.markup;
    this.parentEl.append(this.element);
  }

  init() {
    this.bindToDOM();
    this.btn = this.element.querySelector('.like-button');
    this.registerEvents();
  }

  onClickBtn(e) {
    e.preventDefault();
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.addEventListener('animationend', () => heart.remove());
    heart.style.top = `${this.btn.offsetTop - heart.offsetHeight / 2}px`;
    heart.style.left = `${this.btn.offsetLeft + (this.btn.offsetWidth - heart.offsetWidth) / 2}px`;
    document.body.appendChild(heart);
    const randomAnimation = Math.floor(Math.random() * 4);
    heart.classList.add(`heart-animation${randomAnimation}`);
  }

  registerEvents() {
    this.btn.addEventListener('click', this.onClickBtn.bind(this));
  }
}
