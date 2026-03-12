import CardWidget from './CardWidget';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.content');
  const cardWidget = new CardWidget(container);

  cardWidget.bindToDOM();
});
