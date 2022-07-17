import Card from "./Card.js";
import { Popup, EditProfilePopup, AddCardPopup, ImagePopup } from "./utils.js";

const initialCards = [
  {
    title: "Vale de Yosemite",
    src: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    src: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Montanhas Carecas",
    src: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    src: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Parque Nacional da Vanoise ",
    src: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    src: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const editProfilePopup = new EditProfilePopup();
editProfilePopup.generatePopup();

const imagePopup = new ImagePopup();

initialCards.forEach((item) => {
  const card = new Card(item, "#cards__template");
  const cardElement = card.generateCard();
  document.querySelector(".content").append(cardElement);
});

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
  imagePopup.generatePopup();
}

const addCardPopup = new AddCardPopup();
addCardPopup.generatePopup();

// const imagePopup = new ImagePopup();
// imagePopup.generatePopup();

// function handleExpandImagePopup(evt) {
//   const cardElement = evt.target.closest(".card");
//   const imagePopup = cardElement.querySelector(".popup_image");
//   imagePopup.classList.toggle("popup_opened");
//   handleCloseEscapeListener(imagePopup);
//   closePopupOutsideClick(imagePopup);
// }
