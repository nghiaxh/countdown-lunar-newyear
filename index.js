let endCountDownDay = new Date("Febuary 10, 2024 00:00:00").getTime();

function countDown() {
  let currentDate = new Date().getTime();
  let timeDifference = endCountDownDay - currentDate;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, 0);
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, 0);
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, 0);

  document.getElementById("display-countdown").innerHTML = `${days} ${hours} ${minutes} ${seconds}`;

  if (timeDifference < 0) {
    clearInterval(countDown);
    document.getElementById("title").innerHTML = `Chúc mừng năm mới!`;
  }
}

setInterval(countDown, 1000);
