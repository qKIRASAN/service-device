const BODY_SCROLL_LOCK = `page__body--scroll-lock`;
const STYLE = `style`;

const body = document.querySelector(`body`);

export function lockScroll() {
  const scrollBarWidth = getScrollBarWidth();

  body.classList.add(BODY_SCROLL_LOCK);
  body.style.paddingRight = `${scrollBarWidth}px`;
}

export function unlockScroll() {
  body.classList.remove(BODY_SCROLL_LOCK);
  body.removeAttribute(STYLE);
}

function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
