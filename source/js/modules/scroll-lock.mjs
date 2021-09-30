export const scroll = (function () {
  const body = document.querySelector(`body`);

  function getScrollBarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function lockScroll() {
    const scrollBarWidth = getScrollBarWidth();

    body.classList.add(`page__body--scroll-lock`);
    body.style.paddingRight = `${scrollBarWidth}px`;
  }

  function unlockScroll() {
    body.classList.remove(`page__body--scroll-lock`);
    body.removeAttribute(`style`);
  }

  return {
    lock() {
      lockScroll();
    },
    unlock() {
      unlockScroll();
    }
  };
})();
