
const buttonToggleMode = document.getElementById('toggle-mode')
const htmlElement = document.documentElement

buttonToggleMode.addEventListener("click", function(event){
    console.log(event)
    htmlElement.classList.toggle('light')
})
