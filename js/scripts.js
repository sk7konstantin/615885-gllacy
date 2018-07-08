var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener ("click", function (evt) {
	evt.preventDefault ();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-overlay-show")
	login.focus ();
});

close.addEventListener ("click", function(evt) {
	evt.preventDefault ();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show")
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});


form.addEventListener ("submit", function (evt) {
	if (!login.value || !email.value) {
	evt.preventDefault ();
	console.log("Нужно ввести логин и пароль");
	} 
});
