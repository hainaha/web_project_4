import Popup from "./Popup.js";
// Classe PopupWithForm
// o	OK Extends Popup ok
// o	OK Levar um retorno de chamada do envio do formulário para dentro do construtor e do seletor pop-up
// o	OK Método privado _getInputValues() coleta os dados dos campos de entrada
// o	Alterar setEventListeners() – adicionar enviar
// o	Alterar close() – redefinir o formulário quando fechar
// o	Criar uma instância da classe PopupWithForm para cada pop-up (em index.js)

export default class PopupWithForm extends Popup {
  constructor(popupSelector, saveForm){
    super(popupSelector);
    this._saveForm = saveForm;
  }

  _getInputValues(){
    this._inputList = this._element.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
      });
    return this._formValues;
  }

  setEventListeners(saveButtonSelector){
    super.setEventListeners();
    this._element
      .querySelector(saveButtonSelector)
      .addEventListener("click", () => {
        this._saveEditProfile();
      });
    this._element
      .querySelector(saveButtonSelector)
      .addEventListener("click", () => {
        createNewCard();
      });
  }
  }

  close(){

  }
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

  export function createNewCard() {
    const card__image = document.querySelector("#card-image").value;
    const card__title = document.querySelector("#card-title").value;
    const card = new Card(
      { title: card__title, src: card__image },
      "#cards__template"
    );
    const cardElement = card.generateCard();
    document.querySelector(".content").prepend(cardElement);
    addCardPopup.handlePopup();
  }

  handlePopup() {
    super.handlePopup();
    resetValidation(this._element.querySelector(".popup__form"));
  }

  export const resetValidation = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__error_visible");
      errorElement.textContent = "";
    });
  };

  _setEventListeners() {
    super._setEventListeners();
    this._element
      .querySelector("#edit-profile_save")
      .addEventListener("click", () => {
        this._saveEditProfile();
      });
  }
//}

//class AddCardPopup extends Popup {
  constructor(popupSelector, openButtonSelector, closeButtonSelector) {
    super(popupSelector, openButtonSelector, closeButtonSelector);
    this._popupSelector = "#add-card_popup";
    this._openButtonSelector = ".add-button";
    this._closeButtonSelector = "#add-card_close";
  }

  handlePopup() {
    super.handlePopup();
    document.forms.addCardForm.reset();
    resetValidation(this._element.querySelector(".popup__form"));
  }

  _setEventListeners() {
    super._setEventListeners();
    this._element
      .querySelector("#create-card")
      .addEventListener("click", () => {
        createNewCard();
      });
  }
//}
