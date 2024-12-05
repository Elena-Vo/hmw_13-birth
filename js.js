"use strict"
function DayDiffDisplay () {
  //ограничиваем выбор от текущей даты и далее, чтоб не было отрицательных значений
  let dateInput = document.querySelector(".inputBirthday");
  let today = new Date().toISOString().split("T")[0];
  document.querySelector(".inputBirthday").setAttribute("min", today);
  
  
  const btn = document.querySelector(".btnCount");
  let output = document.querySelector(".outputDays");
  //очищение сообщения вывода при клике на инпут
  dateInput.addEventListener("click", () => {
    output.textContent = "";
  })
  
  btn.addEventListener("click", () => {
    let date = dateInput.value;
    let errorMessage = document.querySelector(".errorMessage")
    if (!date) {
      errorMessage.textContent = "Введите дату!";
      return
    }
    errorMessage.textContent = "";


    let bthDay = new Date(date);
    let currentDate = new Date();
    //ставим время, чтобы считались верно дни
    bthDay.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    //вычисляем количество и переводим в дни
    let difference = bthDay - currentDate 
    let daysUntilBth = Math.round (difference / (1000 * 3600 * 24));
    //склонение слова дни исходя из последних цифр
    let lastDig = daysUntilBth % 10;
    let lastTwoDigs = daysUntilBth % 100;
    
    if (lastTwoDigs >= 11 && lastTwoDigs <= 14) {
      output.textContent = `До дня рождения: ${daysUntilBth} дней`;
    } else if ( lastDig === 1) {
      output.textContent = `До дня рождения: ${daysUntilBth} день`
    } else if (lastDig >= 2 && lastDig <= 4) {
      output.textContent =  `До дня рождения: ${daysUntilBth} дня`;
    } else if (daysUntilBth === 0) {
      output.textContent = "Поздравляем, ваш день рождения сегодня!"
    }
    else {
      output.textContent = `До дня рождения: ${daysUntilBth} дней`;
    }
    
  });
  
}


DayDiffDisplay ()