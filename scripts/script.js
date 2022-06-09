let openButton = document.querySelector(".edit-button");
let editProfile = document.querySelector(".edit-profile");
let saveButton = document.querySelector(".edit-profile__save");
let closeButton = document.querySelector(".edit-profile__close");

function openEditProfile() {
  editProfile.classList.toggle("edit-profile_opened");
}

function saveEditProfile() {
  let inputName = document.querySelector("#input-name");
  let inputAboutMe = document.querySelector("#input-aboutme");
  let profileName = document.querySelector(".header__title");
  let aboutMe = document.querySelector(".header__subtitle");
  profileName.textContent = inputName.value;
  aboutMe.textContent = inputAboutMe.value;
  openEditProfile();
}

openButton.addEventListener("click", openEditProfile);
closeButton.addEventListener("click", openEditProfile);
saveButton.addEventListener("click", saveEditProfile);

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
