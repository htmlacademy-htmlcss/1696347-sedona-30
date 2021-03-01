const searchFormSection = document.querySelector(".search-form-section")
const searchForm = document.querySelector(".search-form")
const searchFormButton = document.querySelector(".form-activate")
const searchFormButtonSubmit = searchFormSection.querySelector(".search-form-submit")

let inputArray = searchFormSection.querySelectorAll("input[type=text]");
let amountOfFilledInputs = 0;

//Скрываем секцию с формой
searchFormSection.classList.add("hidden");

//Нажатие на кнопку показа секции с формой
searchFormButton.addEventListener("click", () => {

  if (searchFormSection.classList.contains("hidden")) {

    //Показываем секцию с формой и добавляем ей анимацию выезда
    searchFormSection.classList.remove("hidden");
    searchFormSection.classList.add("search-form-animation");
  }

});

//Нажатие на кнопку отправки формы
searchFormButtonSubmit.addEventListener("click", (evt) => {

  //Удаляем анимацию выезда формы
  searchFormSection.classList.remove("search-form-animation");
  evt.preventDefault();

  let arrayForIndexOf = [];

  //Добавляем значения каждого поля в отдельный массив, чтобы потом с помощью Array.indexOf() проверить, есть ли пустые поля в форме
  inputArray.forEach((element) => {
    arrayForIndexOf.push(element.value)
  });

  const noEmptyValues = arrayForIndexOf.indexOf("");
  //Проверяем заполненность полей в форме
  for (const key in inputArray) {

    if (Object.hasOwnProperty.call(inputArray, key)) {

      const element = inputArray[key];

      //Если какое-то поле не заполнено вызываем анимацию ошибки и фокусируемся на незаполненном поле
      if ((!element.value) && (noEmptyValues !== -1)) {

        searchFormSection.classList.add("error");

        //Устанавливаем задержку чтобы анимация ошибки успела проиграться
        setTimeout(() => {
          searchFormSection.classList.remove("error");
        }, 240);

        inputArray[key].focus();
        break;
      }

      //Если все поля заполнены, отправляем форму
      if (noEmptyValues == -1) {
        searchForm.submit();
      }

    }
  }
});

//Скрытие формы по нажатию ESC
window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    //Скрываем форму и удаляем класс с анимацией
    searchFormSection.classList.add("hidden");
    searchFormSection.classList.remove("search-form-animation");
  }

});

