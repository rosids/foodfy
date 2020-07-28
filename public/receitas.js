const recipes = document.querySelectorAll('.culinary-recipes')
const content = document.querySelectorAll('.recipes .content')
const buttons = document.querySelectorAll('.button')

for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/receitas/${recipeId}`
    })
}

for (let [i,button] of buttons.entries()) {
    button.addEventListener("click", () => {
        if(content[i].classList.contains("show")) {
            content[i].classList.remove("show")
            content[i].classList.add("hide")
            button.innerHTML = "Mostrar"
        } else {
            content[i].classList.add("show")
            content[i].classList.remove("hide")
            button.innerHTML = "Esconder"
        }
    })
}