import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const date = new Date();

console.log(date)

const timerInput = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(timerInput, options)

console.log(timerInput)
console.log(btnStart)