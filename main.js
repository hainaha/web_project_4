!function(){"use strict";var e=".content",t={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.data,r=t.cardSelector,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=n.title,this._image=n.src,this._cardSelector=r,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".card__image").src=this._image,this._element.querySelector(".card__image").alt=this._text,this._element.querySelector(".card__title").textContent=this._text,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".like-button").addEventListener("click",(function(){e._likeCard()})),this._element.querySelector(".card__delete-icon").addEventListener("click",(function(){e._deleteCard()})),this._element.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_likeCard",value:function(){this._element.querySelector(".like-button").classList.toggle("like-button_active")}},{key:"_deleteCard",value:function(){this._element.remove()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),i(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?t.classList.add(this._inactiveButtonClass):t.classList.remove(this._inactiveButtonClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);this._toggleButtonState(t,n),t.forEach((function(r){r.addEventListener("input",(function(){e._isValid(r),e._toggleButtonState(t,n)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened")}},{key:"close",value:function(){this._element.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._element.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._element.addEventListener("click",(function(t){t.target.closest(".popup__container")||e.close()})),this._handleEscClose()}},{key:"_handleEscClose",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){d(h(a.prototype),"open",this).call(this),this._card=e,this._element.querySelector(".popup__expanded-image").src=this._card.querySelector(".card__image").src,this._element.querySelector(".popup__place-name").textContent=this._card.querySelector(".card__title").textContent}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t,n=e.popupSelector,r=e.formSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._formElement=document.querySelector(r),t._handleFormSubmit=o,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._formElement.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;g(O(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){var e;g(O(a.prototype),"close",this).call(this),this._formElement.reset(),e=this._formElement,Array.from(e.querySelectorAll(".popup__input")).forEach((function(t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__error_visible"),n.textContent=""}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.nameSelector,r=t.aboutmeSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._aboutme=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._formValues={name:this._name.textContent,aboutme:this._aboutme.textContent},this._formValues}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._aboutme.textContent=e.aboutme}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=new k({popupSelector:"#edit-profile_popup",formSelector:"#editProfileForm",handleFormSubmit:function(e){new L({nameSelector:".header__title",aboutmeSelector:".header__subtitle"}).setUserInfo(e)}});P.setEventListeners(),document.querySelector(".edit-button").addEventListener("click",(function(){P.open();var e=new L({nameSelector:".header__title",aboutmeSelector:".header__subtitle"}).getUserInfo();document.querySelector("#input-name").value=e.name,document.querySelector("#input-aboutme").value=e.aboutme}));var q=new u({items:[{title:"Vale de Yosemite",src:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{title:"Lago Louise",src:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{title:"Montanhas Carecas",src:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{title:"Latemar",src:"https://code.s3.yandex.net/web-code/latemar.jpg"},{title:"Parque Nacional da Vanoise ",src:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{title:"Lago di Braies",src:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:function(e){var t=B(e);q.addItem(t)}},e);q.renderItems();var x=new k({popupSelector:"#add-card_popup",formSelector:"#addCardForm",handleFormSubmit:function(t){var n=B(t);document.querySelector(e).prepend(n)}});x.setEventListeners(),document.querySelector(".add-button").addEventListener("click",(function(){x.open()}));var I=new a(t,document.forms.addCardForm),R=new a(t,document.forms.editProfileForm);function B(e){var t=new r({data:e,cardSelector:"#cards__template",handleCardClick:function(){var e=new v(".popup_image");e.setEventListeners(),e.open(t)}}).generateCard();return t}I.enableValidation(),R.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQU8sSUEyQk1BLEVBQW9CLFdBRXBCQyxFQUFzQixDQUNqQ0MsY0FBZSxnQkFDZkMscUJBQXNCLGlCQUN0QkMsb0JBQXFCLHlCQUNyQkMsZ0JBQWlCLDBCQUNqQkMsV0FBWSx3QiwwS0NsQ09DLEVBQUFBLFdBQ25CLGNBQXFELElBQXZDQyxFQUF1QyxFQUF2Q0EsS0FBTUMsRUFBaUMsRUFBakNBLGFBQWNDLEVBQW1CLEVBQW5CQSxpQiw0RkFBbUIsU0FDbkRDLEtBQUtDLE1BQVFKLEVBQUtLLE1BQ2xCRixLQUFLRyxPQUFTTixFQUFLTyxJQUNuQkosS0FBS0ssY0FBZ0JQLEVBQ3JCRSxLQUFLTSxpQkFBbUJQLENBQ3pCLEMsaURBRUQsV0FNRSxPQUxvQlEsU0FDakJDLGNBQWNSLEtBQUtLLGVBQ25CSSxRQUFRRCxjQUFjLFNBQ3RCRSxXQUFVLEVBR2QsRywwQkFFRCxXQVFFLE9BUEFWLEtBQUtXLFNBQVdYLEtBQUtZLGVBQ3JCWixLQUFLYSxxQkFFTGIsS0FBS1csU0FBU0gsY0FBYyxnQkFBZ0JKLElBQU1KLEtBQUtHLE9BQ3ZESCxLQUFLVyxTQUFTSCxjQUFjLGdCQUFnQk0sSUFBTWQsS0FBS0MsTUFDdkRELEtBQUtXLFNBQVNILGNBQWMsZ0JBQWdCTyxZQUFjZixLQUFLQyxNQUV4REQsS0FBS1csUUFDYixHLGdDQUVELFdBQXFCLFdBQ25CWCxLQUFLVyxTQUNGSCxjQUFjLGdCQUNkUSxpQkFBaUIsU0FBUyxXQUN6QixFQUFLQyxXQUNOLElBRUhqQixLQUFLVyxTQUNGSCxjQUFjLHNCQUNkUSxpQkFBaUIsU0FBUyxXQUN6QixFQUFLRSxhQUNOLElBRUhsQixLQUFLVyxTQUNGSCxjQUFjLGdCQUNkUSxpQkFBaUIsU0FBUyxXQUN6QixFQUFLVixrQkFDTixHQUNKLEcsdUJBRUQsV0FDRU4sS0FBS1csU0FDRkgsY0FBYyxnQkFDZFcsVUFBVUMsT0FBTyxxQkFDckIsRyx5QkFFRCxXQUNFcEIsS0FBS1csU0FBU1UsUUFDZixNLHNFQXhEa0J6QixHLDhSQ0FkLElBQU0wQixFQUFiLFdBQ0UsV0FBWXpCLEVBQU0wQixHQUFhLFksNEZBQUEsbUNBdUJiLFNBQUNDLEVBQWNDLEdBQy9CLElBQU1DLEVBQWUsRUFBS0MsYUFBYW5CLGNBQWxCLFdBQ2ZnQixFQUFhSSxHQURFLFdBR3JCSixFQUFhTCxVQUFVVSxJQUFJLEVBQUtDLGtCQUNoQ0osRUFBYVgsWUFBY1UsRUFDM0JDLEVBQWFQLFVBQVVVLElBQUksRUFBS0UsWUFDakMsSUE5QjhCLDBCQWdDYixTQUFDUCxHQUNqQixJQUFNRSxFQUFlLEVBQUtDLGFBQWFuQixjQUFsQixXQUNmZ0IsRUFBYUksR0FERSxXQUdyQkosRUFBYUwsVUFBVUUsT0FBTyxFQUFLUyxrQkFDbkNKLEVBQWFQLFVBQVVFLE9BQU8sRUFBS1UsYUFDbkNMLEVBQWFYLFlBQWMsRUFDNUIsSUF0Q0NmLEtBQUtnQyxlQUFpQm5DLEVBQUtOLGNBQzNCUyxLQUFLaUMsc0JBQXdCcEMsRUFBS0wscUJBQ2xDUSxLQUFLa0MscUJBQXVCckMsRUFBS0osb0JBQ2pDTyxLQUFLOEIsaUJBQW1CakMsRUFBS0gsZ0JBQzdCTSxLQUFLK0IsWUFBY2xDLEVBQUtGLFdBQ3hCSyxLQUFLMkIsYUFBZUosQ0FDckIsQyxRQVJILE8sRUFBQSxHLEVBQUEsK0JBVUUsU0FBaUJZLEdBQ2YsT0FBT0EsRUFBVUMsTUFBSyxTQUFDWixHQUNyQixPQUFRQSxFQUFhYSxTQUFTQyxLQUMvQixHQUNGLEdBZEgsZ0NBZ0JFLFNBQW1CSCxFQUFXSSxHQUN4QnZDLEtBQUt3QyxpQkFBaUJMLEdBQ3hCSSxFQUFjcEIsVUFBVVUsSUFBSTdCLEtBQUtrQyxzQkFFakNLLEVBQWNwQixVQUFVRSxPQUFPckIsS0FBS2tDLHFCQUV2QyxHQXRCSCxzQkEwQ0UsU0FBU1YsR0FDRkEsRUFBYWEsU0FBU0MsTUFHekJ0QyxLQUFLeUMsZ0JBQWdCakIsR0FGckJ4QixLQUFLMEMsZ0JBQWdCbEIsRUFBY0EsRUFBYW1CLGtCQUluRCxHQWhESCxnQ0FrREUsV0FBcUIsV0FDYlIsRUFBWVMsTUFBTUMsS0FDdEI3QyxLQUFLMkIsYUFBYW1CLGlCQUFpQjlDLEtBQUtnQyxpQkFFcENPLEVBQWdCdkMsS0FBSzJCLGFBQWFuQixjQUN0Q1IsS0FBS2lDLHVCQUVQakMsS0FBSytDLG1CQUFtQlosRUFBV0ksR0FDbkNKLEVBQVVhLFNBQVEsU0FBQ3hCLEdBQ2pCQSxFQUFhUixpQkFBaUIsU0FBUyxXQUNyQyxFQUFLaUMsU0FBU3pCLEdBQ2QsRUFBS3VCLG1CQUFtQlosRUFBV0ksRUFDcEMsR0FDRixHQUNGLEdBaEVILDhCQWtFRSxXQUNFdkMsS0FBSzJCLGFBQWFYLGlCQUFpQixVQUFVLFNBQVVrQyxHQUNyREEsRUFBSUMsZ0JBQ0wsSUFDRG5ELEtBQUthLG9CQUNOLE0sb0VBdkVILEssMEtDQXFCdUMsRUFBQUEsV0FDbkIsYUFBaUMvRCxHQUFtQixJQUF0Q2dFLEVBQXNDLEVBQXRDQSxNQUFPQyxFQUErQixFQUEvQkEsVSw0RkFBK0IsU0FDbER0RCxLQUFLdUQsY0FBZ0JGLEVBQ3JCckQsS0FBS3dELFVBQVlGLEVBQ2pCdEQsS0FBS3lELFdBQWFsRCxTQUFTQyxjQUFjbkIsRUFDMUMsQyw0Q0FFRCxTQUFRcUUsR0FDTjFELEtBQUt5RCxXQUFXRSxPQUFPRCxFQUN4QixHLHlCQUVELFdBQWMsV0FDWjFELEtBQUt1RCxjQUFjUCxTQUFRLFNBQUNZLEdBQzFCLEVBQUtKLFVBQVVJLEVBQ2hCLEdBQ0YsTSxzRUFma0JSLEcsMEtDQUFTLEVBQUFBLFdBQ25CLFdBQVlDLEksNEZBQWUsU0FDekI5RCxLQUFLVyxTQUFXSixTQUFTQyxjQUFjc0QsRUFDeEMsQyx5Q0FFRCxXQUNFOUQsS0FBS1csU0FBU1EsVUFBVVUsSUFBSSxlQUM3QixHLG1CQUVELFdBQ0U3QixLQUFLVyxTQUFTUSxVQUFVRSxPQUFPLGVBQ2hDLEcsK0JBRUQsV0FBb0IsV0FDbEJyQixLQUFLVyxTQUNGSCxjQUFjLGlCQUNkUSxpQkFBaUIsU0FBUyxXQUN6QixFQUFLK0MsT0FDTixJQUVIL0QsS0FBS1csU0FBU0ssaUJBQWlCLFNBQVMsU0FBQ2tDLEdBQ2xDQSxFQUFJYyxPQUFPQyxRQUFRLHNCQUN0QixFQUFLRixPQUVSLElBQ0QvRCxLQUFLa0UsaUJBQ04sRyw2QkFFRCxXQUFrQixXQUNoQjNELFNBQVNTLGlCQUFpQixXQUFXLFNBQUNrQyxHQUNwQixXQUFaQSxFQUFJaUIsS0FDTixFQUFLSixPQUVSLEdBQ0YsTSxzRUFsQ2tCRixHLHl3Q0NFQU8sRUFBQUEsU0FBQUEsSSw2ckJBQ25CLFdBQVlOLEdBQWUsTyw0RkFBQSxxQkFDbkJBLEVBQ1AsQyxpQ0FFRCxTQUFLTyxHQUNILHlDQUNBckUsS0FBS3NFLE1BQVFELEVBQ2JyRSxLQUFLVyxTQUFTSCxjQUFjLDBCQUEwQkosSUFDcERKLEtBQUtzRSxNQUFNOUQsY0FBYyxnQkFBZ0JKLElBQzNDSixLQUFLVyxTQUFTSCxjQUFjLHNCQUFzQk8sWUFDaERmLEtBQUtzRSxNQUFNOUQsY0FBYyxnQkFBZ0JPLFdBQzVDLE0sc0VBWmtCcUQsQ0FBdUJQLEcseXdDQ0N2QlUsRUFBQUEsU0FBQUEsSSw2ckJBQ25CLGNBQStELE1BQWpEVCxFQUFpRCxFQUFqREEsY0FBZVUsRUFBa0MsRUFBbENBLGFBQWNDLEVBQW9CLEVBQXBCQSxpQkFBb0IsTyw0RkFBQSxVQUM3RCxjQUFNWCxJQUNEbkMsYUFBZXBCLFNBQVNDLGNBQWNnRSxHQUMzQyxFQUFLRSxrQkFBb0JELEVBSG9DLENBSTlELEMsNENBRUQsV0FBa0IsV0FNaEIsT0FMQXpFLEtBQUsyRSxXQUFhM0UsS0FBSzJCLGFBQWFtQixpQkFBaUIsaUJBQ3JEOUMsS0FBSzRFLFlBQWMsQ0FBQyxFQUNwQjVFLEtBQUsyRSxXQUFXM0IsU0FBUSxTQUFDNkIsR0FDdkIsRUFBS0QsWUFBWUMsRUFBTUMsTUFBUUQsRUFBTUUsS0FDdEMsSUFDTS9FLEtBQUs0RSxXQUNiLEcsK0JBRUQsV0FBb0IsV0FDbEIsc0RBQ0E1RSxLQUFLMkIsYUFBYVgsaUJBQWlCLFVBQVUsU0FBQ2tDLEdBQzVDQSxFQUFJQyxpQkFDSixFQUFLdUIsa0JBQWtCLEVBQUtNLG1CQUM1QixFQUFLakIsT0FDTixHQUNGLEcsbUJBRUQsV0o4QzZCLElBQUN4QyxFSTdDNUIsMENBQ0F2QixLQUFLMkIsYUFBYXNELFFKNENVMUQsRUkzQ1p2QixLQUFLMkIsYUo0Q0xpQixNQUFNQyxLQUFLdEIsRUFBWXVCLGlCQUFpQixrQkFDaERFLFNBQVEsU0FBQ3hCLEdBQ2pCLElBQU1FLEVBQWVILEVBQVlmLGNBQVosV0FBOEJnQixFQUFhSSxHQUEzQyxXQUNyQkosRUFBYUwsVUFBVUUsT0FBTywyQkFDOUJLLEVBQWFQLFVBQVVFLE9BQU8sd0JBQzlCSyxFQUFhWCxZQUFjLEVBQzVCLEdJakRBLE0sc0VBN0JrQndELENBQXNCVixHLDBLQ0h0QnFCLEVBQUFBLFdBQ25CLGNBQStDLElBQWpDQyxFQUFpQyxFQUFqQ0EsYUFBY0MsRUFBbUIsRUFBbkJBLGlCLDRGQUFtQixTQUM3Q3BGLEtBQUtxRixNQUFROUUsU0FBU0MsY0FBYzJFLEdBQ3BDbkYsS0FBS3NGLFNBQVcvRSxTQUFTQyxjQUFjNEUsRUFDeEMsQyxnREFFRCxXQUtFLE9BSkFwRixLQUFLNEUsWUFBYyxDQUNqQkUsS0FBTTlFLEtBQUtxRixNQUFNdEUsWUFDakJ3RSxRQUFTdkYsS0FBS3NGLFNBQVN2RSxhQUVsQmYsS0FBSzRFLFdBQ2IsRyx5QkFFRCxTQUFZL0UsR0FDVkcsS0FBS3FGLE1BQU10RSxZQUFjbEIsRUFBS2lGLEtBQzlCOUUsS0FBS3NGLFNBQVN2RSxZQUFjbEIsRUFBSzBGLE9BQ2xDLE0sc0VBakJrQkwsR0NhZk0sRUFBbUIsSUFBSWpCLEVBQWMsQ0FDekNULGNBQWUsc0JBQ2ZVLGFBQWMsbUJBQ2RDLGlCQUFrQixTQUFDYixHQUNBLElBQUlzQixFQUFTLENBQzVCQyxhQUFjLGlCQUNkQyxnQkFBaUIsc0JBRVZLLFlBQVk3QixFQUN0QixJQUdINEIsRUFBaUJFLG9CQUNTbkYsU0FBU0MsY0FBYyxnQkFDL0JRLGlCQUFpQixTQUFTLFdBQzFDd0UsRUFBaUJHLE9BQ2pCLElBSU1DLEVBSlcsSUFBSVYsRUFBUyxDQUM1QkMsYUFBYyxpQkFDZEMsZ0JBQWlCLHNCQUVPUyxjQUMxQnRGLFNBQVNDLGNBQWMsZUFBZXVFLE1BQVFhLEVBQVNkLEtBQ3ZEdkUsU0FBU0MsY0FBYyxrQkFBa0J1RSxNQUFRYSxFQUFTTCxPQUMzRCxJQUVELElBQU1PLEVBQVcsSUFBSTFDLEVBQ25CLENBQ0VDLE1SeEN3QixDQUMxQixDQUNFbkQsTUFBTyxtQkFDUEUsSUFBSyxvREFFUCxDQUNFRixNQUFPLGNBQ1BFLElBQUssdURBRVAsQ0FDRUYsTUFBTyxvQkFDUEUsSUFBSywwREFFUCxDQUNFRixNQUFPLFVBQ1BFLElBQUssbURBRVAsQ0FDRUYsTUFBTyw4QkFDUEUsSUFBSyxtREFFUCxDQUNFRixNQUFPLGlCQUNQRSxJQUFLLGlEUWtCTGtELFNBQVUsU0FBQ3lDLEdBQ1QsSUFBTTFCLEVBQWMyQixFQUFXRCxHQUMvQkQsRUFBU0csUUFBUTVCLEVBQ2xCLEdBRUhoRixHQUVGeUcsRUFBU0ksY0FFVCxJQUFNQyxFQUFlLElBQUk1QixFQUFjLENBQ3JDVCxjQUFlLGtCQUNmVSxhQUFjLGVBQ2RDLGlCQUFrQixTQUFDc0IsR0FDakIsSUFBTTFCLEVBQWMyQixFQUFXRCxHQUMvQnhGLFNBQVNDLGNBQWNuQixHQUFtQitHLFFBQVEvQixFQUNuRCxJQUdIOEIsRUFBYVQsb0JBQ0tuRixTQUFTQyxjQUFjLGVBQy9CUSxpQkFBaUIsU0FBUyxXQUNsQ21GLEVBQWFSLE1BQ2QsSUFFRCxJQUFNVSxFQUF1QixJQUFJL0UsRUFDL0JoQyxFQUNBaUIsU0FBUytGLE1BQU1DLGFBR1hDLEVBQTJCLElBQUlsRixFQUNuQ2hDLEVBQ0FpQixTQUFTK0YsTUFBTUcsaUJBTWpCLFNBQVNULEVBQVdELEdBQ2xCLElBU00xQixFQVRPLElBQUl6RSxFQUFLLENBQ3BCQyxLQUFNa0csRUFDTmpHLGFBQWMsbUJBQ2RDLGdCQUFpQixXQUNmLElBQU0yRyxFQUFhLElBQUl0QyxFQUFlLGdCQUN0Q3NDLEVBQVdoQixvQkFDWGdCLEVBQVdmLEtBQUt0QixFQUNqQixJQUVzQnNDLGVBQ3pCLE9BQU90QyxDQUNSLENBZkRnQyxFQUFxQk8sbUJBQ3JCSixFQUF5Qkksa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJWYWxlIGRlIFlvc2VtaXRlXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMYWdvIExvdWlzZVwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTW9udGFuaGFzIENhcmVjYXNcIixcclxuICAgIHNyYzogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxhdGVtYXJcIixcclxuICAgIHNyYzogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUGFycXVlIE5hY2lvbmFsIGRhIFZhbm9pc2UgXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lclNlbGVjdG9yID0gXCIuY29udGVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb25PYmplY3QgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2sgfSkge1xyXG4gICAgdGhpcy5fdGV4dCA9IGRhdGEudGl0bGU7XHJcbiAgICB0aGlzLl9pbWFnZSA9IGRhdGEuc3JjO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIikuc3JjID0gdGhpcy5faW1hZ2U7XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIikuYWx0ID0gdGhpcy5fdGV4dDtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX3RleHQ7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmxpa2UtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2xpa2VDYXJkKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWljb25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQ2FyZCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIF9saWtlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubGlrZS1idXR0b25cIilcclxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJsaWtlLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBfZGVsZXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGRhdGEuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gZGF0YS5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBkYXRhLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBkYXRhLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBkYXRhLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBfaXNWYWxpZChpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KTtcclxuICAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZChpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIikpO1xyXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIik7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX19lcnJvcl92aXNpYmxlXCIpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2luaXRpYWxBcnJheSA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoIWV2dC50YXJnZXQuY2xvc2VzdChcIi5wb3B1cF9fY29udGFpbmVyXCIpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG9wZW4oY2FyZEVsZW1lbnQpIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuX2NhcmQgPSBjYXJkRWxlbWVudDtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZXhwYW5kZWQtaW1hZ2VcIikuc3JjID1cclxuICAgICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLnNyYztcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fcGxhY2UtbmFtZVwiKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcbmltcG9ydCB7IHJlc2V0VmFsaWRhdGlvbiB9IGZyb20gXCIuL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBmb3JtU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XHJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5yZXNldCgpO1xyXG4gICAgcmVzZXRWYWxpZGF0aW9uKHRoaXMuX2Zvcm1FbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBhYm91dG1lU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2Fib3V0bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFib3V0bWVTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGFib3V0bWU6IHRoaXMuX2Fib3V0bWUudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fYWJvdXRtZS50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXRtZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgY29udGFpbmVyU2VsZWN0b3IsXHJcbiAgY29uZmlndXJhdGlvbk9iamVjdCxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCIjZWRpdC1wcm9maWxlX3BvcHVwXCIsXHJcbiAgZm9ybVNlbGVjdG9yOiBcIiNlZGl0UHJvZmlsZUZvcm1cIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gICAgICBuYW1lU2VsZWN0b3I6IFwiLmhlYWRlcl9fdGl0bGVcIixcclxuICAgICAgYWJvdXRtZVNlbGVjdG9yOiBcIi5oZWFkZXJfX3N1YnRpdGxlXCIsXHJcbiAgICB9KTtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGl0ZW0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZWRpdFByb2ZpbGVQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5jb25zdCBlZGl0UHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1idXR0b25cIik7XHJcbmVkaXRQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZWRpdFByb2ZpbGVQb3B1cC5vcGVuKCk7XHJcbiAgY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gICAgbmFtZVNlbGVjdG9yOiBcIi5oZWFkZXJfX3RpdGxlXCIsXHJcbiAgICBhYm91dG1lU2VsZWN0b3I6IFwiLmhlYWRlcl9fc3VidGl0bGVcIixcclxuICB9KTtcclxuICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC1uYW1lXCIpLnZhbHVlID0gdXNlckRhdGEubmFtZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LWFib3V0bWVcIikudmFsdWUgPSB1c2VyRGF0YS5hYm91dG1lO1xyXG59KTtcclxuXHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiAoY2FyZEl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmRJdGVtKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyU2VsZWN0b3JcclxuKTtcclxuY2FyZExpc3QucmVuZGVySXRlbXMoKTtcclxuXHJcbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBcIiNhZGQtY2FyZF9wb3B1cFwiLFxyXG4gIGZvcm1TZWxlY3RvcjogXCIjYWRkQ2FyZEZvcm1cIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChjYXJkSXRlbSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKS5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmFkZENhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idXR0b25cIik7XHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZENhcmRQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWRkQ2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICBjb25maWd1cmF0aW9uT2JqZWN0LFxyXG4gIGRvY3VtZW50LmZvcm1zLmFkZENhcmRGb3JtXHJcbik7XHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICBjb25maWd1cmF0aW9uT2JqZWN0LFxyXG4gIGRvY3VtZW50LmZvcm1zLmVkaXRQcm9maWxlRm9ybVxyXG4pO1xyXG5cclxuYWRkQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5lZGl0UHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChjYXJkSXRlbSkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7XHJcbiAgICBkYXRhOiBjYXJkSXRlbSxcclxuICAgIGNhcmRTZWxlY3RvcjogXCIjY2FyZHNfX3RlbXBsYXRlXCIsXHJcbiAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5wb3B1cF9pbWFnZVwiKTtcclxuICAgICAgaW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICBpbWFnZVBvcHVwLm9wZW4oY2FyZEVsZW1lbnQpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb250YWluZXJTZWxlY3RvciIsImNvbmZpZ3VyYXRpb25PYmplY3QiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIkNhcmQiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwidGhpcyIsIl90ZXh0IiwidGl0bGUiLCJfaW1hZ2UiLCJzcmMiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImFsdCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saWtlQ2FyZCIsIl9kZWxldGVDYXJkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiRm9ybVZhbGlkYXRvciIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiaWQiLCJhZGQiLCJfaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJfaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRMaXN0Iiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJidXR0b25FbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfaXNWYWxpZCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiU2VjdGlvbiIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaW5pdGlhbEFycmF5IiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJhcHBlbmQiLCJpdGVtIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiY2xvc2UiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiX2hhbmRsZUVzY0Nsb3NlIiwia2V5IiwiUG9wdXBXaXRoSW1hZ2UiLCJjYXJkRWxlbWVudCIsIl9jYXJkIiwiUG9wdXBXaXRoRm9ybSIsImZvcm1TZWxlY3RvciIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9pbnB1dExpc3QiLCJfZm9ybVZhbHVlcyIsImlucHV0IiwibmFtZSIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0bWVTZWxlY3RvciIsIl9uYW1lIiwiX2Fib3V0bWUiLCJhYm91dG1lIiwiZWRpdFByb2ZpbGVQb3B1cCIsInNldFVzZXJJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJvcGVuIiwidXNlckRhdGEiLCJnZXRVc2VySW5mbyIsImNhcmRMaXN0IiwiY2FyZEl0ZW0iLCJjcmVhdGVDYXJkIiwiYWRkSXRlbSIsInJlbmRlckl0ZW1zIiwiYWRkQ2FyZFBvcHVwIiwicHJlcGVuZCIsImFkZENhcmRGb3JtVmFsaWRhdG9yIiwiZm9ybXMiLCJhZGRDYXJkRm9ybSIsImVkaXRQcm9maWxlRm9ybVZhbGlkYXRvciIsImVkaXRQcm9maWxlRm9ybSIsImltYWdlUG9wdXAiLCJnZW5lcmF0ZUNhcmQiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==