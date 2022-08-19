import "./index.css";
import { containerSelector, configurationObject } from "../utils/constants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_cohort_01",
  headers: {
    authorization: "0c70245d-208a-4884-9ebb-077526421f9a",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: ".header__title",
  aboutSelector: ".header__subtitle",
  avatarSelector: ".header__avatar",
  idSelector: ".header__id",
});

api
  .getUserData()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .then(() => {
    api.getInitialCards().then((initialCards) => {
      const cardList = new Section(
        {
          items: initialCards,
          renderer: (cardItem) => {
            const cardElement = createCard(cardItem);
            cardList.addItem(cardElement);
          },
        },
        containerSelector
      );
      cardList.renderItems();
    });
  });

const editAvatarPopup = new PopupWithForm({
  popupSelector: "#edit-avatar_popup",
  formSelector: "#editAvatarForm",
  handleFormSubmit: (item) => {
    api.updateUserImage(item.avatar).then((res) => {
      document.querySelector(".header__avatar").src = res.avatar;
    });
  },
  resetValidation: (formElement) => {
    const buttonElement = formElement.querySelector("#edit-avatar_save");
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__error_visible");
      errorElement.textContent = "";
      buttonElement.disabled = true;
      buttonElement.classList.add("popup__button_disabled");
    });
  },
});

editAvatarPopup.setEventListeners();
const editAvatarButton = document.querySelector(".avatar-button");
editAvatarButton.addEventListener("click", () => {
  editAvatarPopup.open();
});

const editProfilePopup = new PopupWithForm({
  popupSelector: "#edit-profile_popup",
  formSelector: "#editProfileForm",
  handleFormSubmit: (item) => {
    userInfo.updateUserInfo(item);
    api.updateUserData(item);
  },
  resetValidation: (formElement) => {
    const buttonElement = formElement.querySelector("#edit-profile_save");
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__error_visible");
      errorElement.textContent = "";
      buttonElement.disabled = true;
      buttonElement.classList.add("popup__button_disabled");
    });
  },
});

editProfilePopup.setEventListeners();
const editProfileButton = document.querySelector(".edit-button");
editProfileButton.addEventListener("click", () => {
  editProfilePopup.open();
  const userData = userInfo.getUserInfo();
  document.querySelector("#input-name").value = userData.name;
  document.querySelector("#input-about").value = userData.about;
});

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card_popup",
  formSelector: "#addCardForm",
  handleFormSubmit: (cardItem) => {
    api.addCard(cardItem).then((res) => {
      let cardData = [];
      cardData.push(res);
      const newCard = new Section(
        {
          items: cardData,
          renderer: (cardItem) => {
            const cardElement = createCard(cardItem);
            newCard.prependItem(cardElement);
          },
        },
        containerSelector
      );
      newCard.renderItems();
    });
  },
  resetValidation: (formElement) => {
    const buttonElement = formElement.querySelector("#create-card");
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__error_visible");
      errorElement.textContent = "";
      buttonElement.disabled = true;
      buttonElement.classList.add("popup__button_disabled");
    });
  },
});

addCardPopup.setEventListeners();
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
  addCardPopup.open();
});

const addCardFormValidator = new FormValidator(
  configurationObject,
  document.forms.addCardForm
);

const editProfileFormValidator = new FormValidator(
  configurationObject,
  document.forms.editProfileForm
);

const editAvatarFormValidator = new FormValidator(
  configurationObject,
  document.forms.editAvatarForm
);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

function createCard(cardItem) {
  const card = new Card(
    {
      data: cardItem,
      cardSelector: "#cards__template",
      handleCardClick: () => {
        const imagePopup = new PopupWithImage(".popup_image");
        imagePopup.setEventListeners();
        imagePopup.open(cardElement);
      },
      deleteCardClick: () => {
        const deleteCardPopup = new Popup("#delete-card_popup");
        deleteCardPopup.setEventListeners();
        deleteCardPopup.open();
        const confirmButton = document.querySelector("#delete-card");
        confirmButton.addEventListener("click", () => {
          api.deleteCard(cardElement.querySelector(".card__id").textContent);
          confirmButton.replaceWith(confirmButton.cloneNode(true));
          card.removeCard();
          deleteCardPopup.close();
        });
      },
      myId: document.querySelector(".header__id").textContent,
    },
    api
  );
  const cardElement = card.generateCard();
  return cardElement;
}
