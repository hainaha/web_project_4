const openEditProfileButton = document.querySelector(".edit-button");
const editProfilePopup = document.querySelector("#edit-profile_popup");
const saveEditProfileButton = document.querySelector("#edit-profile_save");
const closeEditProfileButton = document.querySelector("#edit-profile_close");
const addCardButton = document.querySelector(".add-button");
const addCardPopup = document.querySelector("#add-card_popup");
const closeAddCardButton = document.querySelector("#add-card_close");
const createCardButton = document.querySelector("#create-card");

function handleEditProfilePopup() {
  editProfilePopup.classList.toggle("popup_opened");
}

function saveEditProfile() {
  const inputName = document.querySelector("#input-name");
  const inputAboutMe = document.querySelector("#input-aboutme");
  let profileName = document.querySelector(".header__title");
  let aboutMe = document.querySelector(".header__subtitle");
  profileName.textContent = inputName.value;
  aboutMe.textContent = inputAboutMe.value;
  handleEditProfilePopup();
}

openEditProfileButton.addEventListener("click", handleEditProfilePopup);
closeEditProfileButton.addEventListener("click", handleEditProfilePopup);
saveEditProfileButton.addEventListener("click", saveEditProfile);

function handleAddCardPopup() {
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
  cardElement
    .querySelector(".like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
    });
  cardsContainer.prepend(cardElement);

  handleAddCardPopup();
  deleteCard();
  expandImagePopup();
  closeImagePopup();

  document.querySelector("#card-image").value = "";
  document.querySelector("#card-title").value = "";
}

addCardButton.addEventListener("click", handleAddCardPopup);
closeAddCardButton.addEventListener("click", handleAddCardPopup);
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

function likeCard() {
  const likeButton = document.querySelectorAll(".like-button");
  likeButton.forEach((item) => {
    item.addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
    });
  });
}

likeCard();

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
      imagePopup.classList.add("popup_opened");
    });
  });
}

function closeImagePopup() {
  const closeImageButton = document.querySelectorAll(".popup__close_image");
  closeImageButton.forEach((item) => {
    item.addEventListener("click", function () {
      const cardElement = item.closest(".card");
      const imagePopup = cardElement.querySelector(".popup_image");
      imagePopup.classList.remove("popup_opened");
    });
  });
}

expandImagePopup();
closeImagePopup();
