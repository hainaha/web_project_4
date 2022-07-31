import { PopupWithImage } from "../components/PopupWithImage";

export default class Card {
  constructor({ data, cardSelector, handleCardClick }) {
    this._text = data.title;
    this._image = data.src;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._text;
    this._element.querySelector(".card__title").textContent = this._text;
    // this._element.querySelector(".popup__expanded-image").src = this._image;
    // this._element.querySelector(".popup__place-name").textContent = this._text;

    return this._element;
  }

  // _openImagePopup() {
  //   this._element
  //     .querySelector(".popup_image")
  //     .classList.toggle("popup_opened");
  //   const imagePopup = new ImagePopup(this._element);
  //   imagePopup.generatePopup(this._element);
  // }

  _setEventListeners() {
    this._element
      .querySelector(".like-button")
      .addEventListener("click", () => {
        this._likeCard();
      });

    this._element
      .querySelector(".card__delete-icon")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  _likeCard() {
    this._element
      .querySelector(".like-button")
      .classList.toggle("like-button_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}
