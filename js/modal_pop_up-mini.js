var writeUsLink=document.querySelector(".connection"),modalPopUp=document.querySelector(".modal-content"),closePopUp=document.querySelector(".modal-content-close"),form=modalPopUp.querySelector("form"),userName=modalPopUp.querySelector("[name='user_name']");writeUsLink.addEventListener("click",function(e){e.preventDefault(),modalPopUp.classList.add("modal-content-open")}),closePopUp.addEventListener("click",function(e){e.preventDefault(),modalPopUp.classList.remove("modal-content-open")}),window.addEventListener("keydown",function(e){27==e.keyCode&&modalPopUp.classList.contains("modal-content-open")&&modalPopUp.classList.remove("modal-content-open")});