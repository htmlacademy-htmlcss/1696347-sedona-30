const searchForm = document.querySelector(".search-form-section")
const searchFormButton = document.querySelector(".form-activate")
const searchFormButtonSubmit = searchForm.querySelector(".search-form-submit")

searchFormButton.addEventListener("click",()=>{
  searchForm.classList.remove("hidden")
  searchForm.classList.add("search-form-animation")
})

searchFormButtonSubmit.addEventListener("click",()=>{
  searchForm.classList.add("hidden")
  searchForm.classList.remove("search-form-animation")
})

window.addEventListener("keydown",(evt)=>{
  if(evt.keyCode === 27) {
    evt.preventDefault()
    searchForm.classList.add("hidden")
    searchForm.classList.remove("search-form-animation")
  }

})

