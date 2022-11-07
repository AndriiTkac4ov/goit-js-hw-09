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

let futureTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        futureTime = selectedDates[0].getTime();

        if (selectedDates[0] <= options.defaultDate) {
            refs.btnStart.disabled = true;
            window.alert('Please choose a date in the future');
        } else {
            refs.btnStart.disabled = false;
            return futureTime;
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
    setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;

        if (remainingTime < 0) {
            return
        } else {
            refs.day.textContent = convertMs(remainingTime).days;
            refs.hour.textContent = convertMs(remainingTime).hours;
            refs.minute.textContent = convertMs(remainingTime).minutes;
            refs.second.textContent = convertMs(remainingTime).seconds;
        }
    }, 1000)
}

// function superFunk(msss, convertMs) {
//     convertMs(msss);
//     refs.day.textContent = `${days}`;
//     refs.hour.textContent = `${hours}`;
//     refs.minute.textContent = `${minutes}`;
//     refs.second.textContent = `${seconds}`;
// }