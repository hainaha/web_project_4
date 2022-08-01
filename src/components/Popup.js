export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add("popup_opened");
  }

  close() {
    this._element.classList.remove("popup_opened");
  }

  setEventListeners() {
    this._element
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });

    this._element.addEventListener("click", (evt) => {
      if (!evt.target.closest(".popup__container")) {
        this.close();
      }
    });
    this._handleEscClose();
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
}
