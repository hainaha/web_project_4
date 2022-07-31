export default class UserInfo {
  constructor({ nameSelector, aboutmeSelector }) {
    this._name = document.querySelector(nameSelector);
    this._aboutme = document.querySelector(aboutmeSelector);
  }

  getUserInfo() {
    this._formValues = {
      name: this._name.textContent,
      aboutme: this._aboutme.textContent,
    };
    return this._formValues;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._aboutme.textContent = data.aboutme;
  }
}
