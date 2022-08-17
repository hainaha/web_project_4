export default class Card {
  constructor({ data, cardSelector, handleCardClick, deleteCardClick }, api) {
    this._text = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._likesNumber = data.likes.length;
    this._id = data._id;
    this._owner = data.owner;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCardClick = deleteCardClick;
    this._api = api;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _isLiked() {
    let isliked = this._api.getUserData().then((me) => {
      this._likes.some(function (user) {
        if (JSON.stringify(user._id) === JSON.stringify(me._id)) {
          isliked = true;
          return isliked;
        }
      });
      if (isliked === true) {
        this._element
          .querySelector(".like-button")
          .classList.add("like-button_active");
        this._element
          .querySelector(".card__likes")
          .classList.add("card__likes_active");
      }
    });
  }

  _isNotMine() {
    this._api.getUserData().then((me) => {
      if (JSON.stringify(this._owner) !== JSON.stringify(me)) {
        this._element
          .querySelector(".card__delete-icon")
          .classList.add("card__delete-icon_hidden");
      }
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._isNotMine();
    this._isLiked();

    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._text;
    this._element.querySelector(".card__title").textContent = this._text;
    this._element.querySelector(".card__likes").textContent = this._likesNumber;
    this._element.querySelector(".card__id").textContent = this._id;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".like-button")
      .addEventListener("click", () => {
        this._likeCard();
      });

    this._element
      .querySelector(".card__delete-icon")
      .addEventListener("click", () => {
        this._deleteCardClick();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  _likeCard() {
    if (
      !this._element
        .querySelector(".like-button")
        .classList.contains("like-button_active")
    ) {
      this._api.likeCard(this._id).then((res) => {
        this._updateLikeCounter(res);
        this._activateLike();
      });
    } else {
      this._api.unlikeCard(this._id).then((res) => {
        this._updateLikeCounter(res);
        this._activateLike();
      });
    }
  }

  _updateLikeCounter(res) {
    this._element.querySelector(".card__likes").textContent = res.likes.length;
  }

  _activateLike() {
    this._element
      .querySelector(".like-button")
      .classList.toggle("like-button_active");
    this._element
      .querySelector(".card__likes")
      .classList.toggle("card__likes_active");
  }

  deleteCard() {
    this._element.remove();
  }
}
