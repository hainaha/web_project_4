const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add("popup__button_disabled");
//   } else {
//     buttonElement.classList.remove("popup__button_disabled");
//   }
// };

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add("popup__input_type_error");
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add("popup__error_visible");
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove("popup__input_type_error");
//   errorElement.classList.remove("popup__error_visible");
//   errorElement.textContent = "";
// };

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

const showInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass,
  errorMessage
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputErrorClass,
      errorClass,
      inputElement.validationMessage
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
//   const buttonElement = formElement.querySelector(".popup__button");
//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       isValid(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".popup__form"));
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// };

//enableValidation();

const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(
      formElement,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

//enableValidation(objeto)
//const {formSelector, inputSelector, etc} = objeto; (destructuring, nesse caso naõ precisa usar objeto.propriedade)
//Dentro da função: colocar objeto.formSelector, objeto.inputSelector...
// Habilitando a validação chamando enableValidation()
// Valide todas as configurações
//coloca os valores das propriedades só na hora de chamar a função
