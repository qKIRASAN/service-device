import {createFocusArea} from './focus-area.js';
import {lockScroll, unlockScroll} from './scroll-lock.js';
import {isEscEvent} from './utils.js';

const POPUP_VISIBLE_CLASS = `popup--visible`;
const POPUP_INNER_CLASS = `popup__inner`;
const CLOSE_BUTTON_CLASS = `popup__button`;

const requestButton = document.querySelector(`.header__button`);
const popup = document.querySelector(`.popup`);
const popupFocusArea = createFocusArea(popup);

function showPopup() {
  if (popup) {
    const name = popup.querySelector(`input`);

    popup.classList.add(POPUP_VISIBLE_CLASS);
    popupFocusArea.lock();
    lockScroll();
    name.focus();

    popup.addEventListener(`keydown`, hidePopup);
    popup.addEventListener(`click`, hidePopup);
  }
}

function hidePopup(evt) {
  const isCloseButton = evt.target.closest(`.${CLOSE_BUTTON_CLASS}`);
  const isFormWrapper = evt.target.closest(`.${POPUP_INNER_CLASS}`);

  if (isEscEvent(evt) || evt.type === `click`) {
    if (evt.type === `click` && isFormWrapper && !isCloseButton) {
      return;
    }

    popup.classList.remove(POPUP_VISIBLE_CLASS);
    popupFocusArea.unlock();
    unlockScroll();

    requestButton.focus();
    popup.removeEventListener(`keydown`, hidePopup);
    popup.removeEventListener(`click`, hidePopup);
  }
}

requestButton.addEventListener(`click`, showPopup);
