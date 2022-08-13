export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
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
  }
}
