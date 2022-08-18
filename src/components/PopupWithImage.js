import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(cardElement) {
    super.open();
    this._card = cardElement;
    this._element.querySelector(".popup__expanded-image").src =
      this._card.querySelector(".card__image").src;
    this._element.querySelector(".popup__expanded-image").alt =
      this._card.querySelector(".card__title").textContent;
    this._element.querySelector(".popup__place-name").textContent =
      this._card.querySelector(".card__title").textContent;
  }
}
