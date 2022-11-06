import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  timerInput: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  day: document.querySelector('span.value[data-days]'),
  hour: document.querySelector('span.value[data-hours]'),
  minute: document.querySelector('span.value[data-minutes]'),
  second: document.querySelector('span.value[data-seconds]'),
};

refs.btnStart.disabled = true;

let differenceOfDates = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        differenceOfDates = selectedDates[0].getTime() - options.defaultDate.getTime();

        if (selectedDates[0] <= options.defaultDate) {
            refs.btnStart.disabled = true;
            window.alert('Please choose a date in the future');
        } else {
            refs.btnStart.disabled = false;
            return differenceOfDates;
        }
    },
};

const fp = flatpickr(refs.timerInput, options)

refs.btnStart.addEventListener('click', onBtnStart)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onBtnStart() {
    convertMs(differenceOfDates);
    
    refs.day.textContent = convertMs(differenceOfDates).days;
    refs.hour.textContent = convertMs(differenceOfDates).hours;
    refs.minute.textContent = convertMs(differenceOfDates).minutes;
    refs.second.textContent = convertMs(differenceOfDates).seconds;
}