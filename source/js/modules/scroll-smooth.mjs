const request = document.querySelector(`.promo__button`);

function scrollSmooth(hash) {
  const element = document.querySelector(hash);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: `smooth`,
    });
  }
}

function scrollPage(evt) {
  if (!evt.currentTarget.hasAttribute(`href`)) {
    return;
  }

  evt.preventDefault();
  scrollSmooth(evt.currentTarget.hash);
}

request.addEventListener(`click`, scrollPage);
