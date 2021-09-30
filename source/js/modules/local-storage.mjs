const forms = document.querySelectorAll(`.form`);

if (forms) {
  forms.forEach((form) => createStorage(form));
}

function createStorage(form) {
  const formFields = form.querySelectorAll(`input, textarea`);

  if (formFields) {
    formFields.forEach((field) => {
      if (field.type === `text` && localStorage.getItem(`user-name`)) {
        field.value = localStorage.getItem(`user-name`);
      }

      if (field.type === `tel` && localStorage.getItem(`user-phone`)) {
        field.value = localStorage.getItem(`user-phone`);
      }

      if (field.type === `textarea` && localStorage.getItem(`user-message`)) {
        field.value = localStorage.getItem(`user-message`);
      }

      field.addEventListener(`change`, saveData);
    });
  }
}

function saveData(evt) {
  if (evt.target.type === `text`) {
    localStorage.setItem(`user-name`, evt.target.value);
  }

  if (evt.target.type === `tel`) {
    localStorage.setItem(`user-phone`, evt.target.value);
  }

  if (evt.target.type === `textarea`) {
    localStorage.setItem(`user-message`, evt.target.value);
  }
}
