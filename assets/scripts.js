function timeUpdater() {
  const formattedTime = moment().format("hh:mm:ss");
  const clock = document.querySelector(".clock");
  clock.textContent = formattedTime;
}

setInterval(timeUpdater, 1000);
