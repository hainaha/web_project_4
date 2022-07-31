import "./index.css";
import {
  initialCards,
  containerSelector,
  configurationObject,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { EditProfilePopup, AddCardPopup } from "../components/utils.js";
import Section from "../components/Section";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm";

//const editProfilePopup = new EditProfilePopup();
//editProfilePopup.generatePopup();

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

const popupWithForm = new PopupWithForm({
  popupSelector: "#add-card_popup",
  handleFormSubmit: (cardItem) => {
    const cardElement = createCard(cardItem);
    document.querySelector(".content").prepend(cardElement);
  },
});

popupWithForm.setEventListeners();
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
  popupWithForm.open();
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
