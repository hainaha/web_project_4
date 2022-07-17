export class ImagePopup {
  constructor() {
    this._popupSelector = ".popup_image";
    this._openButtonSelector = ".card__image";
    this._closeButtonSelector = ".popup__close_image";
  }

  //alterei generate
  generatePopup(cardElement) {
    this._element = cardElement.querySelector(this._popupSelector);
    //this._setEventListeners();
    this._setCloseEventListeners();
  }

  handlePopup() {
    // console.log(this._element);
    // console.log(this._element);
    this._element.classList.toggle("popup_opened");
  }

  //acrescentei
  // _setEventListeners() {
  //   document.querySelectorAll(this._openButtonSelector).forEach((item) => {
  //     item.addEventListener("click", () => {
  //       this.handlePopup();
  //     });
  //   });
  // }

  // _setEventListeners() {
  //   document
  //     .querySelector(this._openButtonSelector)
  //     .addEventListener("click", () => {
  //       this.handlePopup();
  //     });
  // }

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
