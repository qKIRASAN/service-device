import {getAttributeValue, saveAttributeValue} from './utils.js';

const FORM_FIELD_CLASS = `form__field`;
const CHECKBOX_CLASS = `checkbox`;

const forms = document.querySelectorAll(`.form`);

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
  const field = evt.target;

  if (field.placeholder) {
    saveAttributeValue(field.placeholder);
  }

  if (field.placeholder.length > 0) {
    field.placeholder = ``;
  }
}

function blur(evt) {
  const field = evt.target;

  if (field.closest(`.${FORM_FIELD_CLASS}`)) {
    field.placeholder = getAttributeValue();
  }
}

function validate(evt) {
  const field = evt.target;
  const isInvalid = !field.validity.valid;
  const input = field.closest(`.${FORM_FIELD_CLASS}`);
  const checkbox = field.closest(`.${CHECKBOX_CLASS}`);
  const formFieldInvalidClass = `${FORM_FIELD_CLASS}--invalid`;
  const checkboxInvalidClass = `${CHECKBOX_CLASS}--invalid`;

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
