import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carega a data atual
selectedDate.value = inputToday;

// Defini a data mínima como sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //Previne o comportamento padrão de carregar a página
  event.preventDefault();

  console.log("ENVIADO!");
};
