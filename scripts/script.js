let openButton = document.querySelector(".edit-button");
let editProfilePopup = document.querySelector("#edit-profile_popup");
let saveButton = document.querySelector("#edit-profile_save");
let closeEditProfileButton = document.querySelector("#edit-profile_close");
let addButton = document.querySelector(".add-button");
let addCardPopup = document.querySelector("#add-card_popup");
let closeAddCardButton = document.querySelector("#add-card_close");
let createCardButton = document.querySelector("#create-card");

function openEditProfilePopup() {
  editProfilePopup.classList.toggle("popup_opened");
}

function saveEditProfile() {
  let inputName = document.querySelector("#input-name");
  let inputAboutMe = document.querySelector("#input-aboutme");
  let profileName = document.querySelector(".header__title");
  let aboutMe = document.querySelector(".header__subtitle");
  profileName.textContent = inputName.value;
  aboutMe.textContent = inputAboutMe.value;
  openPopup();
}

openButton.addEventListener("click", openEditProfilePopup);
closeEditProfileButton.addEventListener("click", openEditProfilePopup);
saveButton.addEventListener("click", saveEditProfile);

function openAddCardPopup() {
  addCardPopup.classList.toggle("popup_opened");
}

function addCard() {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const card__image = document.querySelector("#card-image").value;
  const card__title = document.querySelector("#card-title").value;
  cardElement.querySelector(".card__image").src = card__image;
  cardElement.querySelector(".card__image").alt = card__title;
  cardElement.querySelector(".card__title").textContent = card__title;
  cardElement.querySelector(".popup__expanded-image").src = card__image;
  cardElement.querySelector(".popup__place-name").textContent = card__title;
  cardsContainer.prepend(cardElement);

  openAddCardPopup();
  like();
  deleteCard();
  expandImagePopup();
  closeImagePopup();

  document.querySelector("#card-image").value = "";
  document.querySelector("#card-title").value = "";
}

addButton.addEventListener("click", openAddCardPopup);
closeAddCardButton.addEventListener("click", openAddCardPopup);
createCardButton.addEventListener("click", addCard);

const initialCards = [
  {
    src: "./images/yosemite.png",
    alt: "Foto de Yosemite",
    title: "Yosemite Valley",
  },
  {
    src: "./images/lake_louise.png",
    alt: "Foto de Lake Louise",
    title: "Lake Louise",
  },
  {
    src: "./images/bald_mountains.png",
    alt: "Foto de Bald Mountains",
    title: "Bald Mountains",
  },
  {
    src: "./images/latemar.png",
    alt: "Foto de Latemar",
    title: "Latemar",
  },
  {
    src: "./images/vanoise_national_park.png",
    alt: "Foto de Vanoise National Park",
    title: "Vanoise National Park",
  },
  {
    src: "./images/lago_di_braies.png",
    alt: "Foto do Lago di Braies",
    title: "Lago di Braies",
  },
];

const cardTemplate = document.querySelector("#cards__template").content;
const cardsContainer = document.querySelector(".content");
initialCards.forEach((item) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = item.src;
  cardElement.querySelector(".card__image").alt = item.alt;
  cardElement.querySelector(".card__title").textContent = item.title;
  cardElement.querySelector(".popup__expanded-image").src = item.src;
  cardElement.querySelector(".popup__place-name").textContent = item.title;
  cardsContainer.append(cardElement);
});

function like() {
  const likeButton = document.querySelectorAll(".like-button");
  likeButton.forEach((item) => {
    item.addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
    });
  });
}

like();

function deleteCard() {
  const deleteButton = document.querySelectorAll(".card__delete-icon");
  deleteButton.forEach((item) => {
    item.addEventListener("click", function () {
      const cardElement = item.closest(".card");
      cardElement.remove();
    });
  });
}

deleteCard();

function expandImagePopup() {
  const cardImage = document.querySelectorAll(".card__image");
  cardImage.forEach((item) => {
    item.addEventListener("click", function () {
      const cardElement = item.closest(".card");
      const imagePopup = cardElement.querySelector(".popup_image");
      imagePopup.classList.toggle("popup_opened");
    });
  });
}

function closeImagePopup() {
  const closeImageButton = document.querySelectorAll(".popup__close_image");
  closeImageButton.forEach((item) => {
    item.addEventListener("click", function () {
      const cardElement = item.closest(".card");
      const imagePopup = cardElement.querySelector(".popup_image");
      imagePopup.classList.toggle("popup_opened");
    });
  });
}

expandImagePopup();
closeImagePopup();
