import "./index.css";
import {
  initialCards,
  containerSelector,
  configurationObject,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const editProfilePopup = new PopupWithForm({
  popupSelector: "#edit-profile_popup",
  formSelector: "#editProfileForm",
  handleFormSubmit: (item) => {
    const userInfo = new UserInfo({
      nameSelector: ".header__title",
      aboutSelector: ".header__subtitle",
    });
    userInfo.setUserInfo(item);
  },
});

editProfilePopup.setEventListeners();
const editProfileButton = document.querySelector(".edit-button");
editProfileButton.addEventListener("click", () => {
  editProfilePopup.open();
  const userInfo = new UserInfo({
    nameSelector: ".header__title",
    aboutSelector: ".header__subtitle",
  });
  const userData = userInfo.getUserInfo();
  document.querySelector("#input-name").value = userData.name;
  document.querySelector("#input-about").value = userData.about;
});

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
