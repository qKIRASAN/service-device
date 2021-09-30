const ABSTRACT_LENGTH = 200;
const PLACEHOLDER = `..`;

const content = document.querySelector(`.abstract`);
const button = document.querySelector(`#about-button`);
const buttonClass = `about__button`;
const origin = content.innerText;

function init() {
  button.classList.add(buttonClass);
  button.addEventListener(`click`, restore);
  trim();
}

function trim() {
  const summary = content.innerText.substring(0, ABSTRACT_LENGTH);

  if (content.innerText.length !== ABSTRACT_LENGTH) {
    content.innerText = summary + PLACEHOLDER;

    button.addEventListener(`click`, restore);
    button.removeEventListener(`click`, trim);
  }
}

function restore() {
  content.innerText = origin;

  button.addEventListener(`click`, trim);
  button.removeEventListener(`click`, restore);
}

init();
