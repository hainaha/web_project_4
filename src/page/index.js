import "./index.css";
// import {
//   initialCards,
//   containerSelector,
//   configurationObject,
// } from "../utils/constants.js";
import { containerSelector, configurationObject } from "../utils/constants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section";
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

function newUserInfo() {
  return new UserInfo({
    nameSelector: ".header__title",
    aboutSelector: ".header__subtitle",
  });
}

api.getUserData().then((data) => {
  const userInfo = newUserInfo();
  userInfo.setUserInfo(data);
});

const editProfilePopup = new PopupWithForm({
  popupSelector: "#edit-profile_popup",
  formSelector: "#editProfileForm",
  handleFormSubmit: (item) => {
    const userInfo = newUserInfo();
    userInfo.setUserInfo(item);
    api.saveUserData(item);
  },
});

editProfilePopup.setEventListeners();
const editProfileButton = document.querySelector(".edit-button");
editProfileButton.addEventListener("click", () => {
  editProfilePopup.open();
  const userInfo = newUserInfo();
  const userData = userInfo.getUserInfo();
  document.querySelector("#input-name").value = userData.name;
  document.querySelector("#input-about").value = userData.about;
});

// const array = api.getInitialCards();
// console.log(array);

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

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card_popup",
  formSelector: "#addCardForm",
  handleFormSubmit: (cardItem) => {
    const cardElement = createCard(cardItem);
    document.querySelector(containerSelector).prepend(cardElement);
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

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

function createCard(cardItem) {
  const card = new Card({
    data: cardItem,
    cardSelector: "#cards__template",
    handleCardClick: () => {
      const imagePopup = new PopupWithImage(".popup_image");
      imagePopup.setEventListeners();
      imagePopup.open(cardElement);
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}
