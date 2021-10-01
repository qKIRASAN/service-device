import {createFocusArea} from './focus-area.mjs';
import {scroll} from './scroll-lock.mjs';
import {isEscEvent} from './utils.mjs';

const requestButton = document.querySelector(`.header__button`);
const popup = document.querySelector(`.popup`);
const popupFocusArea = createFocusArea(popup);
const popupVisibleClass = `popup--visible`;
const popupInnerClass = `popup__inner`;
const closeButtonClass = `popup__button`;

function showPopup() {
  if (popup) {
    const name = popup.querySelector(`input`);

    popup.classList.add(popupVisibleClass);
    popupFocusArea.lock();
    scroll.lock();
    name.focus();

    popup.addEventListener(`keydown`, hidePopup);
    popup.addEventListener(`click`, hidePopup);
  }
}

function hidePopup(evt) {
  const isCloseButton = evt.target.closest(`.${closeButtonClass}`);
  const isFormWrapper = evt.target.closest(`.${popupInnerClass}`);

  if (isEscEvent(evt) || evt.type === `click`) {
    if (evt.type === `click` && isFormWrapper && !isCloseButton) {
      return;
    }

    popup.classList.remove(popupVisibleClass);
    popupFocusArea.unlock();
    scroll.unlock();

    requestButton.focus();
    popup.removeEventListener(`keydown`, hidePopup);
    popup.removeEventListener(`click`, hidePopup);
  }
}

requestButton.addEventListener(`click`, showPopup);
