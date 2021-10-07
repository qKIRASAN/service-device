const TOGGLE_BASE_CLASS = `toggle`;
const TOGGLE_PLUS_CLASS = `toggle--button-plus`;
const TOGGLE_MINUS_CLASS = `toggle--button-minus`;
const MENU_CLASS = `accordion`;
const MENU_VISIBLE_CLASS = `accordion--visible`;
const ITEM_CLASS = `accordion__item`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const VALUE_SHOW = `показать`;
const VALUE_HIDE = `скрыть`;

const accordion = document.querySelector(`.footer__top`);

function showMenu(evt) {
  const toggle = evt.target.closest(`.${TOGGLE_BASE_CLASS}`);
  if (!toggle) {
    return;
  }

  const ariaLabelValue = toggle.getAttribute(ARIA_LABEL_ATTRIBUTE);
  const initialValue = ariaLabelValue.replace(VALUE_HIDE, VALUE_SHOW);
  const replacement = ariaLabelValue.replace(VALUE_SHOW, VALUE_HIDE);

  const item = toggle.closest(`.${MENU_CLASS}`);
  const isVisible = item.classList.contains(MENU_VISIBLE_CLASS);

  hideMenu();

  if (isVisible) {
    item.classList.remove(MENU_VISIBLE_CLASS);
    toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, initialValue);
  } else {
    item.classList.add(MENU_VISIBLE_CLASS);
    toggle.classList.add(TOGGLE_MINUS_CLASS);
    toggle.classList.remove(TOGGLE_PLUS_CLASS);
    toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, replacement);
  }
}

function hideMenu() {
  const items = accordion.querySelectorAll(`.${MENU_VISIBLE_CLASS}`);
  const toggles = accordion.querySelectorAll(`.${TOGGLE_BASE_CLASS}`);

  items.forEach((item) => {
    if (item) {
      item.classList.remove(MENU_VISIBLE_CLASS);
    }
  });

  toggles.forEach((toggle) => {
    if (toggle) {
      const ariaLabelValue = toggle.getAttribute(ARIA_LABEL_ATTRIBUTE);
      const replacement = ariaLabelValue.replace(VALUE_HIDE, VALUE_SHOW);

      toggle.classList.remove(TOGGLE_MINUS_CLASS);
      toggle.classList.add(TOGGLE_PLUS_CLASS);
      toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, replacement);
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
        menu.classList.add(MENU_CLASS);
      });
    }

    if (menuItems) {
      menuItems.forEach((element) => {
        element.classList.add(ITEM_CLASS);
      });
    }

    if (toggles) {
      toggles.forEach((toggle) => {
        toggle.classList.add(TOGGLE_PLUS_CLASS);
      });
    }

    accordion.addEventListener(`click`, showMenu);
  }
}

init();
