export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  close() {
    this._element.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
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
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
