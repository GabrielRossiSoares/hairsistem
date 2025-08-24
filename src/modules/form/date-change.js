import { schedulesDay } from "../schedules/load.js";
// seleciona o input de data
const selectedDate = document.getElementById("date");

// Recarrega a lisat de horários quando o input de  data mudar.
selectedDate.onchange = () => schedulesDay();
