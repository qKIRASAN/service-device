import IMask from 'imask/esm/imask.js';

const inputs = document.querySelectorAll(`input[type=tel]`);

if (inputs) {
  inputs.forEach((input) => createMask(input));
}

function createMask(input) {
  const maskPattern = {
    mask: `{+7}(000)000-00-00`
  };

  return new IMask(input, maskPattern);
}
