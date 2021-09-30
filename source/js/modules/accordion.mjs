const accordion = document.querySelector(`.footer__top`);
const toggleBaseClass = `toggle`;
const togglePlusClass = `toggle--button-plus`;
const toggleMinusClass = `toggle--button-minus`;
const menuClass = `accordion`;
const menuVisibleClass = `accordion--visible`;
const itemClass = `accordion__item`;

function showMenu(evt) {
  const toggle = evt.target.closest(`.${toggleBaseClass}`);
  if (!toggle) {
    return;
  }

  const item = toggle.closest(`.${menuClass}`);
  const isVisible = item.classList.contains(menuVisibleClass);

  hideMenu();

  if (isVisible) {
    item.classList.remove(menuVisibleClass);
  } else {
    item.classList.add(menuVisibleClass);
    toggle.classList.add(toggleMinusClass);
    toggle.classList.remove(togglePlusClass);
  }
}

function hideMenu() {
  const items = accordion.querySelectorAll(`.${menuVisibleClass}`);
  const toggles = accordion.querySelectorAll(`.${toggleBaseClass}`);

  items.forEach((item) => {
    if (item) {
      item.classList.remove(menuVisibleClass);
    }
  });

  toggles.forEach((toggle) => {
    if (toggle) {
      toggle.classList.remove(toggleMinusClass);
      toggle.classList.add(togglePlusClass);
    }
  });
}

function init() {
  if (accordion) {
    const menus = accordion.querySelectorAll(`.footer__inner`);
    const menuItems = accordion.querySelectorAll(`.chapters__list, .address__list`);
    const toggles = accordion.querySelectorAll(`.toggle`);

    if (menus) {
      menus.forEach((menu) => {
        menu.classList.add(menuClass);
      });
    }

    if (menuItems) {
      menuItems.forEach((element) => {
        element.classList.add(itemClass);
      });
    }

    if (toggles) {
      toggles.forEach((toggle) => {
        toggle.classList.add(togglePlusClass);
      });
    }

    accordion.addEventListener(`click`, showMenu);
  }
}

init();
