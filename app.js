const buyBtns = document.querySelectorAll(".js-buy-btn")
const modal = document.querySelector(".modal")
const closeBtns = document.querySelectorAll(".js-close-modal")

function showBuyTickets(e){
    modal.classList.add("open")
}

function closeBuyTickets(){
    modal.classList.remove("open")
}
for (const buyBtn of buyBtns){
    buyBtn.addEventListener("click",showBuyTickets )
}

for(const closeBtn of closeBtns){
    closeBtn.addEventListener("click",closeBuyTickets)
}


