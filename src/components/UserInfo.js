export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector, idSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._id = document.querySelector(idSelector);
  }

  getUserInfo() {
    this._formValues = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return this._formValues;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id.textContent = data._id;
  }

  updateUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }
}
