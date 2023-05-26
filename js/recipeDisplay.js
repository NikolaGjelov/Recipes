
const display = () => {
  const index = +localStorage.getItem("selectedItem")
  const recipes = JSON.parse(localStorage.getItem("recipes"))
  const recipe = recipes[index]
  let ing = ""
  recipe.ingredients.forEach(element => {
   ing+=`<li>${element}</li>` 
  });

  let html = `
  <h1>${recipe.title}</h1>
  <p>${recipe.dsc}</p>
  <p>INGREDIENTS:</p>
  <ul>${ing}</ul>
  <p>STEPS:</p>
  <p>${recipe.recipe}</p>
  <a href="./recipeMenu.html" role="button" style="text-decoration: none;">DONE</a>
  ` 
  document.querySelector("body").innerHTML=html
}
display()

