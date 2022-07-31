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

//const editProfilePopup = new EditProfilePopup();
//editProfilePopup.generatePopup();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
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
      cardList.addItem(cardElement);
    },
  },
  containerSelector
);
cardList.renderItems();

// const imagePopup = new PopupWithImage({
//   formSelector: ".form-template",
//   handleFormSubmit: (item) => {
//     const card = new UserCard(item, ".card-template_type_user");

//     const cardElement = card.generateCard();

//     cardsList.setItem(cardElement);
//   }
// });

//const imagePopup = new PopupWithImage(".popup_image");
//imagePopup.setEventListeners();

// const popupSetEventListeners = (openButtonSelector) => {
//   document.querySelector(openButtonSelector).addEventListener("click", () => {
//     imagePopup.open();
//   });
// };
// popupSetEventListeners(".card__image");

// export function createNewCard() {
//   const card__image = document.querySelector("#card-image").value;
//   const card__title = document.querySelector("#card-title").value;
//   const card = new Card(
//     { title: card__title, src: card__image },
//     "#cards__template"
//   );
//   const cardElement = card.generateCard();
//   document.querySelector(".content").prepend(cardElement);
//   addCardPopup.handlePopup();
// }

//const addCardPopup = new AddCardPopup();
//addCardPopup.generatePopup();

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
