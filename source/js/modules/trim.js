const ABSTRACT_LENGTH = 200;
const PLACEHOLDER = `..`;
const BUTTON_CLASS = `about__button`;
const BUTTON_VALUE_DETAIL = `Подробнее`;
const BUTTON_VALUE_COLLAPSE = `Свернуть`;

const content = document.querySelector(`.abstract`);
const button = document.querySelector(`#about-button`);
const origin = content.innerText;

function init() {
  button.classList.add(BUTTON_CLASS);
  button.addEventListener(`click`, restore);
  trim();
}

function trim() {
  const summary = content.innerText.substring(0, ABSTRACT_LENGTH);

  if (content.innerText.length !== ABSTRACT_LENGTH) {
    content.innerText = summary + PLACEHOLDER;

    button.textContent = BUTTON_VALUE_DETAIL;
    button.addEventListener(`click`, restore);
    button.removeEventListener(`click`, trim);
  }
}

function restore() {
  content.innerText = origin;

  button.textContent = BUTTON_VALUE_COLLAPSE;
  button.addEventListener(`click`, trim);
  button.removeEventListener(`click`, restore);
}

init();
