/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scroll_smooth_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.mjs */ "./source/js/modules/scroll-smooth.mjs");
/* harmony import */ var _modules_local_storage_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/local-storage.mjs */ "./source/js/modules/local-storage.mjs");
/* harmony import */ var _modules_phone_mask_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/phone-mask.mjs */ "./source/js/modules/phone-mask.mjs");
/* harmony import */ var _modules_trim_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/trim.mjs */ "./source/js/modules/trim.mjs");
/* harmony import */ var _modules_accordion_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion.mjs */ "./source/js/modules/accordion.mjs");
/* harmony import */ var _modules_form_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form.mjs */ "./source/js/modules/form.mjs");
/* harmony import */ var _modules_popup_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popup.mjs */ "./source/js/modules/popup.mjs");









/***/ }),

/***/ "./source/js/modules/accordion.mjs":
/*!*****************************************!*\
  !*** ./source/js/modules/accordion.mjs ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/***/ }),

/***/ "./source/js/modules/focus-area.mjs":
/*!******************************************!*\
  !*** ./source/js/modules/focus-area.mjs ***!
  \******************************************/
/*! exports provided: createFocusArea */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusArea", function() { return createFocusArea; });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./source/js/modules/utils.mjs");


function createFocusArea(selector) {
  const elements = selector.querySelectorAll(`
    input:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled])
    `);

  const firstElement = elements[0];
  const lastElement = elements[elements.length - 1];

  function lockFocus(evt) {
    if (Object(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__["isTabEvent"])(evt)) {
      if (evt.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          evt.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          evt.preventDefault();
        }
      }
    }
  }

  return {
    lock() {
      selector.addEventListener(`keydown`, lockFocus);
    },
    unlock() {
      selector.removeEventListener(`keydown`, lockFocus);
    }
  };
}


/***/ }),

/***/ "./source/js/modules/form.mjs":
/*!************************************!*\
  !*** ./source/js/modules/form.mjs ***!
  \************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./source/js/modules/utils.mjs");


const forms = document.querySelectorAll(`.form`);
const formFieldClass = `form__field`;
const checkboxClass = `checkbox`;

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
  const fielid = evt.target;

  if (fielid.placeholder) {
    Object(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__["saveAttributeValue"])(fielid.placeholder);
  }

  if (fielid.placeholder.length > 0) {
    fielid.placeholder = ``;
  }
}

function blur(evt) {
  const fielid = evt.target;

  if (fielid.closest(`.${formFieldClass}`)) {
    fielid.placeholder = Object(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__["getAttributeValue"])();
  }
}

function validate(evt) {
  const fielid = evt.target;
  const isInvalid = !fielid.validity.valid;
  const input = fielid.closest(`.${formFieldClass}`);
  const checkbox = fielid.closest(`.${checkboxClass}`);
  const formFieldInvalidClass = `${formFieldClass}--invalid`;
  const checkboxInvalidClass = `${checkboxClass}--invalid`;

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


/***/ }),

/***/ "./source/js/modules/local-storage.mjs":
/*!*********************************************!*\
  !*** ./source/js/modules/local-storage.mjs ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/***/ }),

/***/ "./source/js/modules/phone-mask.mjs":
/*!******************************************!*\
  !*** ./source/js/modules/phone-mask.mjs ***!
  \******************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const inputs = document.querySelectorAll(`input[type=tel]`);

if (inputs) {
  inputs.forEach((input) => createMask(input));
}

function createMask(input) {
  const maskPattern = {
    mask: `{+7}(000)000-00-00`
  };

  // eslint-disable-next-line no-undef
  return new IMask(input, maskPattern);
}


/***/ }),

/***/ "./source/js/modules/popup.mjs":
/*!*************************************!*\
  !*** ./source/js/modules/popup.mjs ***!
  \*************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_area_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-area.mjs */ "./source/js/modules/focus-area.mjs");
/* harmony import */ var _scroll_lock_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-lock.mjs */ "./source/js/modules/scroll-lock.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./source/js/modules/utils.mjs");




const requestButton = document.querySelector(`.header__button`);
const popup = document.querySelector(`.popup`);
const popupFocusArea = Object(_focus_area_mjs__WEBPACK_IMPORTED_MODULE_0__["createFocusArea"])(popup);
const popupVisibleClass = `popup--visible`;
const popupInnerClass = `popup__inner`;
const closeButtonClass = `popup__button`;

function showPopup() {
  if (popup) {
    const name = popup.querySelector(`input`);

    popup.classList.add(popupVisibleClass);
    popupFocusArea.lock();
    _scroll_lock_mjs__WEBPACK_IMPORTED_MODULE_1__["scroll"].lock();
    name.focus();

    popup.addEventListener(`keydown`, hidePopup);
    popup.addEventListener(`click`, hidePopup);
  }
}

function hidePopup(evt) {
  const isCloseButton = evt.target.closest(`.${closeButtonClass}`);
  const isFormWrapper = evt.target.closest(`.${popupInnerClass}`);

  if (Object(_utils_mjs__WEBPACK_IMPORTED_MODULE_2__["isEscEvent"])(evt) || evt.type === `click`) {
    if (evt.type === `click` && isFormWrapper && !isCloseButton) {
      return;
    }

    popup.classList.remove(popupVisibleClass);
    popupFocusArea.unlock();
    _scroll_lock_mjs__WEBPACK_IMPORTED_MODULE_1__["scroll"].unlock();

    requestButton.focus();
    popup.removeEventListener(`keydown`, hidePopup);
    popup.removeEventListener(`click`, hidePopup);
  }
}

requestButton.addEventListener(`click`, showPopup);


/***/ }),

/***/ "./source/js/modules/scroll-lock.mjs":
/*!*******************************************!*\
  !*** ./source/js/modules/scroll-lock.mjs ***!
  \*******************************************/
/*! exports provided: scroll */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
const scroll = (function () {
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


/***/ }),

/***/ "./source/js/modules/scroll-smooth.mjs":
/*!*********************************************!*\
  !*** ./source/js/modules/scroll-smooth.mjs ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/***/ }),

/***/ "./source/js/modules/trim.mjs":
/*!************************************!*\
  !*** ./source/js/modules/trim.mjs ***!
  \************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ABSTRACT_LENGTH = 200;
const PLACEHOLDER = `..`;

const content = document.querySelector(`.abstract`);
const button = document.querySelector(`#about-button`);
const buttonClass = `about__button`;
const origin = content.innerText;

function init() {
  button.classList.add(buttonClass);
  button.addEventListener(`click`, restore);
  trim();
}

function trim() {
  const summary = content.innerText.substring(0, ABSTRACT_LENGTH);

  if (content.innerText.length !== ABSTRACT_LENGTH) {
    content.innerText = summary + PLACEHOLDER;

    button.addEventListener(`click`, restore);
    button.removeEventListener(`click`, trim);
  }
}

function restore() {
  content.innerText = origin;

  button.addEventListener(`click`, trim);
  button.removeEventListener(`click`, restore);
}

init();


/***/ }),

/***/ "./source/js/modules/utils.mjs":
/*!*************************************!*\
  !*** ./source/js/modules/utils.mjs ***!
  \*************************************/
/*! exports provided: saveAttributeValue, getAttributeValue, isEscEvent, isTabEvent */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAttributeValue", function() { return saveAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeValue", function() { return getAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscEvent", function() { return isEscEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabEvent", function() { return isTabEvent; });
let attributeValue = ``;

function saveAttributeValue(value) {
  attributeValue = value;

  return attributeValue;
}

function getAttributeValue() {
  return attributeValue;
}

function isEscEvent(evt) {
  return evt.key === `Escape`;
}

function isTabEvent(evt) {
  return evt.key === `Tab`;
}


/***/ })

/******/ });