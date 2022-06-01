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
