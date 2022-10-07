const clockSpan = document.querySelector('#clock-span');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  clockSpan.innerText = `${hours} : ${min} : ${second}`;
}

getClock();
setInterval(getClock, 1000);
