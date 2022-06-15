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

function createNewCard() {
  const card__image = document.querySelector("#card-image").value;
  const card__title = document.querySelector("#card-title").value;
  addCard(card__image, card__title);
}

function addCard(card__image, card__title) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const imagePopup = cardElement.querySelector(".popup_image");
  const closeImageButton = cardElement.querySelector(".popup__close_image");
  cardImage.src = card__image;
  cardImage.alt = card__title;
  cardElement.querySelector(".card__title").textContent = card__title;
  cardElement.querySelector(".popup__expanded-image").src = card__image;
  cardElement.querySelector(".popup__place-name").textContent = card__title;
  cardElement
    .querySelector(".like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("like-button_active");
    });
  cardImage.addEventListener("click", function () {
    imagePopup.classList.add("popup_opened");
  });
  closeImageButton.addEventListener("click", function () {
    imagePopup.classList.remove("popup_opened");
  });
  cardsContainer.prepend(cardElement);

  handleAddCardPopup();
  deleteCard();

  document.querySelector("#card-image").value = "";
  document.querySelector("#card-title").value = "";
}

addCardButton.addEventListener("click", handleAddCardPopup);
closeAddCardButton.addEventListener("click", handleAddCardPopup);
createCardButton.addEventListener("click", createNewCard);

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

const cardTemplate = document.querySelector("#cards__template").content;
const cardsContainer = document.querySelector(".content");
initialCards.forEach((item) => {
  addCard(item.src, item.title);
});

function deleteCard() {
  const deleteButton = document.querySelectorAll(".card__delete-icon");
  deleteButton.forEach((item) => {
    item.addEventListener("click", function () {
      const cardElement = item.closest(".card");
      cardElement.remove();
    });
  });
}
