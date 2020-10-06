export default class CallbackChatWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = null;
    this.form = null;
  }

  static get markup() {
    return `<button class="close-btn">X</button>
    <div class="title">Напишите нам</div>
    <textarea></textarea>
    <button class="send-btn button">Отправить</button>`;
  }

  bindToDOM() {
    this.element = document.createElement('div');
    this.element.classList.add('callback-chat-widget');

    this.form = document.createElement('div');
    this.form.classList.add('chat-form', 'hidden');
    this.form.innerHTML = this.constructor.markup;

    this.showFormBtn = document.createElement('div');
    this.showFormBtn.classList.add('show-form-btn');

    this.element.appendChild(this.form);
    this.element.appendChild(this.showFormBtn);

    this.parentEl.append(this.element);
  }

  init() {
    this.bindToDOM();
    this.registerEvents();
  }

  toggleForm() {
    this.form.classList.toggle('hidden');
    this.showFormBtn.classList.toggle('hidden');
    this.showFormBtn.style.zIndex = this.showFormBtn.classList
      .contains('hidden') ? -1 : 999;
  }

  registerEvents() {
    this.form.querySelector('.close-btn').addEventListener('click', this.toggleForm.bind(this));
    this.showFormBtn.addEventListener('click', this.toggleForm.bind(this));
  }
}
