const clockElements = {
  hoursEl: document.querySelector('#hours'),
  minutesEl: document.querySelector('#minutes'),
  secondsEl: document.querySelector('#seconds'),

  ampm: document.querySelector('#ampm'),

  slideHourEl: document.querySelector('#slide-hour'),
  slideMinEl: document.querySelector('#slide-min'),
  slideSecEl: document.querySelector('#slide-sec'),
};

// виклик функції кожні 1000мс
setInterval(getTime, 1000);

function getTime() {
  // деструктуризація
  const { hoursEl, minutesEl, secondsEl, ampm, slideHourEl, slideMinEl, slideSecEl } =
    clockElements;
  // отримуємо значення годинника
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  // задаємо АМ/РМ
  ampm.textContent = hours > 12 ? 'PM' : 'AM';
  // переводимо години в 12 годинний режим
  let hoursAMPM = hours > 12 ? hours - 12 : hours;

  // додаємо нулі якщо значення <10
  hoursEl.textContent = hoursAMPM < 10 ? '0' + hoursAMPM : (hoursEl.textContent = hoursAMPM);

  minutesEl.textContent = minutes < 10 ? '0' + minutes : (minutesEl.textContent = minutes);

  secondsEl.textContent = seconds < 10 ? '0' + seconds : (secondsEl.textContent = seconds);

  // додаємо трансформацію для зміщення кульки по шкалі
  slideHourEl.style.transform = `translateX(${hoursAMPM * (300 / 12)}px)`;

  slideMinEl.style.transform = `translateX(${minutes * (300 / 60)}px)`;

  slideSecEl.style.transform = `translateX(${seconds * (300 / 60)}px)`;
}
