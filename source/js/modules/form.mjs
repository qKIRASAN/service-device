import {getAttributeValue, saveAttributeValue} from './utils.mjs';

const forms = document.querySelectorAll(`.form`);
const formFieldClass = `form__field`;
const checkboxClass = `checkbox`;

if (forms) {
  forms.forEach((form) => init(form));
}

function init(form) {
  const inputs = form.querySelectorAll(`input, textarea`);

  if (inputs) {
    inputs.forEach((input) => {
      input.addEventListener(`invalid`, validate);
      input.addEventListener(`change`, validate);
      input.addEventListener(`focus`, focus);
      input.addEventListener(`blur`, blur);
    });
  }
}

function focus(evt) {
  const fielid = evt.target;

  if (fielid.placeholder) {
    saveAttributeValue(fielid.placeholder);
  }

  if (fielid.placeholder.length > 0) {
    fielid.placeholder = ``;
  }
}

function blur(evt) {
  const fielid = evt.target;

  if (fielid.closest(`.${formFieldClass}`)) {
    fielid.placeholder = getAttributeValue();
  }
}

function validate(evt) {
  const fielid = evt.target;
  const isInvalid = !fielid.validity.valid;
  const input = fielid.closest(`.${formFieldClass}`);
  const checkbox = fielid.closest(`.${checkboxClass}`);
  const formFieldInvalidClass = `${formFieldClass}--invalid`;
  const checkboxInvalidClass = `${checkboxClass}--invalid`;

  if (input) {
    if (isInvalid) {
      input.classList.add(formFieldInvalidClass);
    } else {
      input.classList.remove(formFieldInvalidClass);
    }
  }

  if (checkbox) {
    if (isInvalid) {
      checkbox.classList.add(checkboxInvalidClass);
    } else {
      checkbox.classList.remove(checkboxInvalidClass);
    }
  }
}
