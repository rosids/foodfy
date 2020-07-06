const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.culinary-recipes')
const recipes = document.querySelector(".recipe-modal")


for (let card of cards) {
    card.addEventListener("click", function() {

        let imgRecipe = card.querySelector(".culinary-recipes img").src
        let title = card.querySelector(".culinary-recipes h4").textContent
        let author = card.querySelector(".culinary-recipes p").textContent
        
       
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = imgRecipe
        modalOverlay.querySelector("h4").innerHTML = title
        modalOverlay.querySelector("p").innerHTML = author
        
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
})