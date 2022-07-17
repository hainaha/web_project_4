import { createNewCard } from "./index.js";

class Popup {
  constructor(popupSelector, openButtonSelector, closeButtonSelector) {
    this._popupSelector = popupSelector;
    this._openButtonSelector = openButtonSelector;
    this._closeButtonSelector = closeButtonSelector;
  }

  generatePopup() {
    this._element = document.querySelector(this._popupSelector);
    this._setEventListeners();
    this._setCloseEventListeners();
  }

  handlePopup() {
    this._element.classList.toggle("popup_opened");
  }

  _setEventListeners() {
    document
      .querySelector(this._openButtonSelector)
      .addEventListener("click", () => {
        this.handlePopup();
      });
  }

  _setCloseEventListeners() {
    this._element
      .querySelector(this._closeButtonSelector)
      .addEventListener("click", () => {
        this.handlePopup();
      });

    this._element.addEventListener("click", (evt) => {
      if (!evt.target.closest(".popup__container")) {
        this._element.classList.remove("popup_opened");
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this._element.classList.remove("popup_opened");
      }
    });
  }
}

class EditProfilePopup extends Popup {
  constructor(popupSelector, openButtonSelector, closeButtonSelector) {
    super(popupSelector, openButtonSelector, closeButtonSelector);
    this._popupSelector = "#edit-profile_popup";
    this._openButtonSelector = ".edit-button";
    this._closeButtonSelector = "#edit-profile_close";
  }

  _saveEditProfile() {
    const inputName = document.querySelector("#input-name");
    const inputAboutMe = document.querySelector("#input-aboutme");
    let profileName = document.querySelector(".header__title");
    let aboutMe = document.querySelector(".header__subtitle");
    profileName.textContent = inputName.value;
    aboutMe.textContent = inputAboutMe.value;
    this.handlePopup();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._element
      .querySelector("#edit-profile_save")
      .addEventListener("click", () => {
        this._saveEditProfile();
      });
  }
}

class AddCardPopup extends Popup {
  constructor(popupSelector, openButtonSelector, closeButtonSelector) {
    super(popupSelector, openButtonSelector, closeButtonSelector);
    this._popupSelector = "#add-card_popup";
    this._openButtonSelector = ".add-button";
    this._closeButtonSelector = "#add-card_close";
  }

  handlePopup() {
    super.handlePopup();
    document.forms.addCardForm.reset();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._element
      .querySelector("#create-card")
      .addEventListener("click", () => {
        createNewCard();
      });
  }
}

class ImagePopup extends Popup {
  constructor(popupSelector, openButtonSelector, closeButtonSelector) {
    super(popupSelector, openButtonSelector, closeButtonSelector);
    this._popupSelector = ".popup_image";
    this._openButtonSelector = ".card__image";
    this._closeButtonSelector = ".popup__close_image";
  }

  generatePopup(cardElement) {
    this._element = cardElement.querySelector(this._popupSelector);
    this._setCloseEventListeners();
  }
}

export { Popup, EditProfilePopup, AddCardPopup, ImagePopup };
