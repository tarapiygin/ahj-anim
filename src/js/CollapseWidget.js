export default class CollapseWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = null;
    this.btn = null;
    this.collapseEl = null;
  }

  static get markup() {
    return `<button class="collapsible-button">Collapse</button>
    <div class="collapsible-area hidden">
        <div class="content">Содержимое этого контейнера может коллапсировать при нажатии на кнопку</div>
    </div>`;
  }

  bindToDOM() {
    this.element = document.createElement('div');
    this.element.classList.add('container', 'collapsible-widget');
    this.element.innerHTML = this.constructor.markup;
    this.parentEl.append(this.element);
  }

  init() {
    this.bindToDOM();
    this.btn = this.element.querySelector('.collapsible-button');
    this.collapseEl = this.element.querySelector('.collapsible-area');
    this.registerEvents();
  }

  onClickCollapseBtn() {
    this.collapseEl.classList.toggle('hidden');
  }

  registerEvents() {
    this.btn.addEventListener('click', this.onClickCollapseBtn.bind(this));
  }
}
