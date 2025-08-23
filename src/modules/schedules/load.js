import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");
export function schedulesDay() {
  // Busca na API os agendamentos para carregar do lado direito da tela.
  const date = selectedDate.value;
  //renderiza as horas disóníveis.
  hoursLoad({ date });
  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}
