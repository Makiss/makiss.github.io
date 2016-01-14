var writeUsLink = document.querySelector(".connection");
var modalPopUp	= document.querySelector(".modal-content");
var closePopUp = document.querySelector(".modal-content-close");
var form = modalPopUp.querySelector("form");
var userName = modalPopUp.querySelector("[name='user_name']");

writeUsLink.addEventListener("click", function(event) {
	event.preventDefault();
	modalPopUp.classList.add("modal-content-open");
      });

closePopUp.addEventListener("click", function(event) {
	event.preventDefault();
	modalPopUp.classList.remove("modal-content-open");
});

window.addEventListener("keydown", function (event) {
	if(event.keyCode == 27) {
		if(modalPopUp.classList.contains("modal-content-open")) {
			modalPopUp.classList.remove("modal-content-open");
		}
	}
});