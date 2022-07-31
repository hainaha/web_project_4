export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    // this._openButtonSelector = openButtonSelector;
    // this._closeButtonSelector = closeButtonSelector;
  }

  // Classe Popup
  // o	Parâmetro do construtor – seletor popup OK
  // o	Métodos públicos que abrirão e fecharão o popup open() e close() OK
  // o	Método privado _handleEscClose() – fechar com tecla esc
  // o	Método público setEventListeners() – evento de click no botão de fechar e ao clicar fora da janela

  open() {
    this._element.classList.add("popup_opened");
  }

  close() {
    this._element.classList.remove("popup_opened");
  }

  generatePopup() {
    // this._element = document.querySelector(this._popupSelector);
    // this._setEventListeners();
    this.setEventListeners();
  }

  // acho que tem que ir pro index

  // _setEventListeners() {
  //   document
  //     .querySelector(this._openButtonSelector)
  //     .addEventListener("click", () => {
  //       this.open();
  //     });
  // }

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
