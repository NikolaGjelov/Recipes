let addBtn = document.querySelector(".addBtn")
let ingredientsInp = document.querySelector(".inputIngredients")
let ingredientsUl = document.querySelector(".IngredientsUl")
const get = (element) => {
  return document.querySelector(element)
  }
const container = get(".container")
const update = () => {
  let html = ""
  let rec = localStorage.getItem("recipes")
  if (rec) {
  rec = JSON.parse(rec)
  rec.forEach((recipe,i) => {
    html += `  <div class="recepeContainer">
    <h2>${recipe.title}</h2>
    <p>${recipe.dsc}</p>
    <div><a href="./recipeDisplay.html" class="cookBtn" id=${i} onclick= setRecipe(event)>Try to COOK</a></div>
  </div>`
  })}
  container.innerHTML=html
}
update()

addBtn.addEventListener("click", () => {
  const ing = ingredientsInp.value
  if(!ing)return
  const li = document.createElement("li")
  li.classList.add(ing.addSpaces)
  li.innerHTML=ing
  ingredientsUl.appendChild(li)
  ingredientsInp.value=""
})

document.querySelector(".createBtn").addEventListener("click", () => {
  document.querySelector("main").style.display= "none"
  document.querySelector(".modal").style.display= "block"
})

document.querySelector(".submitBtn").addEventListener("click", () => {
  let title = get(".inputName").value
  let dsc = get (".inputDescription").value
  const ing = []
  for (const child of get (".IngredientsUl").children) {
    ing.push(child.innerHTML)
  }
  let recipe = get (".recipe").value
  let obj = {
    title,
    dsc,
    ingredients:ing,
    recipe
  }
  let rec = localStorage.getItem("recipes")
  if (rec) 
    localStorage.setItem("recipes", JSON.stringify([...JSON.parse(rec),obj])) 
  else 
  localStorage.setItem("recipes", JSON.stringify ([obj]))

  document.querySelector("main").style.display= "grid"
  document.querySelector(".modal").style.display= "none"
  update()
})

const setRecipe = (event) => {
const id = event.target
localStorage.setItem("selectedItem", id.id)
}
update()



