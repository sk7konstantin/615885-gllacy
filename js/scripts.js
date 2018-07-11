var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var comments = popup.querySelector("[name=comments]")
var form = popup.querySelector("form");
var overlay = document.querySelector(".modal-overlay");

var isStorageSupport = true;
var storage = "";
  
try {
	storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener ("click", function (evt) {
	evt.preventDefault ();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-overlay-show")

	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
});

close.addEventListener ("click", function(evt) {
	evt.preventDefault ();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-overlay-show")
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error")
			overlay.classList.remove("modal-overlay-show");
		}
	}
});


form.addEventListener ("submit", function (evt) {
	if (!login.value || !email.value) {
	evt.preventDefault ();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
	// console.log("Нужно ввести логин и пароль");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("login", login.value);
		}
	}
});
