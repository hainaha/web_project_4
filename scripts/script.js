const openEditProfileButton = document.querySelector(".edit-button");
const editProfilePopup = document.querySelector("#edit-profile_popup");
const saveEditProfileButton = document.querySelector("#edit-profile_save");
const closeEditProfileButton = document.querySelector("#edit-profile_close");
const addCardButton = document.querySelector(".add-button");
const addCardPopup = document.querySelector("#add-card_popup");
const closeAddCardButton = document.querySelector("#add-card_close");
const createCardButton = document.querySelector("#create-card");
const cardTemplate = document.querySelector("#cards__template").content;
const cardsContainer = document.querySelector(".content");
const initialCards = [
  {
    src: "./images/yosemite.png",
    title: "Yosemite Valley",
  },
  {
    src: "./images/lake_louise.png",
    title: "Lake Louise",
  },
  {
    src: "./images/bald_mountains.png",
    title: "Bald Mountains",
  },
  {
    src: "./images/latemar.png",
    title: "Latemar",
  },
  {
    src: "./images/vanoise_national_park.png",
    title: "Vanoise National Park",
  },
  {
    src: "./images/lago_di_braies.png",
    title: "Lago di Braies",
  },
];

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

function addCard(card__image, card__title) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const closeImageButton = cardElement.querySelector(".popup__close_image");
  const likeButton = cardElement.querySelector(".like-button");
  const deleteButton = cardElement.querySelector(".card__delete-icon");

  cardImage.src = card__image;
  cardImage.alt = card__title;
  cardElement.querySelector(".card__title").textContent = card__title;
  cardElement.querySelector(".popup__expanded-image").src = card__image;
  cardElement.querySelector(".popup__place-name").textContent = card__title;

  likeButton.addEventListener("click", likeCard);
  cardImage.addEventListener("click", handleExpandImagePopup);
  closeImageButton.addEventListener("click", handleExpandImagePopup);
  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

initialCards.forEach((item) => {
  cardsContainer.append(addCard(item.src, item.title));
});

function handleAddCardPopup() {
  addCardPopup.classList.toggle("popup_opened");
}

addCardButton.addEventListener("click", handleAddCardPopup);
closeAddCardButton.addEventListener("click", handleAddCardPopup);
createCardButton.addEventListener("click", createNewCard);

function createNewCard() {
  const card__image = document.querySelector("#card-image").value;
  const card__title = document.querySelector("#card-title").value;
  cardsContainer.prepend(addCard(card__image, card__title));
  document.querySelector("#card-image").value = "";
  document.querySelector("#card-title").value = "";
  handleAddCardPopup();
}

function likeCard(evt) {
  evt.target.classList.toggle("like-button_active");
}

function handleExpandImagePopup(evt) {
  const cardElement = evt.target.closest(".card");
  const imagePopup = cardElement.querySelector(".popup_image");
  imagePopup.classList.toggle("popup_opened");
}

function deleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}
