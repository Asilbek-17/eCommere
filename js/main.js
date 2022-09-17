const elOpenBtn = document.querySelector(".js-open")
const elCloseBtn = document.querySelector(".js-close")
const elModal = document.querySelector(".head-shopping")

elOpenBtn.addEventListener("click", function(){
    elModal.classList.add("head-shopping-show")
})

elCloseBtn.addEventListener("click", function(){
    elModal.classList.remove("head-shopping-show")
})