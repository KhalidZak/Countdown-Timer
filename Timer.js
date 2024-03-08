const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minsEl = document.querySelector(".mins");
const secsEl = document.querySelector(".secs");
const dateEl = document.querySelector("#date");
const labelEl = document.querySelector(".d_label");
const submitEl = document.querySelector(".d_label");

function getLS() {
  let getDate = JSON.parse(localStorage.getItem("date"));
  countDown(getDate);
}

function countDown(dateV) {
  if (dateV) {
    dateEl.value = dateV;
  }
  const destination = new Date(dateV);
  const currentDate = new Date();
  const countDown = destination - currentDate;
  //the countdown is in milliseconds
  const totalSecs = countDown / 1000;
  // 1000 milli secs makes 1 sec
  const secs = Math.floor(totalSecs % 60);
  //the highest remainder will be 59 bcus when it becomes 60 the 60 is
  //taken to divide and then leaving 0 - the state of no remainder
  const totalMins = totalSecs / 60;
  const mins = Math.floor(totalMins % 60);
  const totalHours = totalMins / 60;
  const hours = Math.floor(totalHours % 24);
  const totalDays = Math.floor(totalHours / 24);

  daysEl.innerText = totalDays;
  hoursEl.innerText = formatTime(hours);
  minsEl.innerText = formatTime(mins);
  secsEl.innerText = formatTime(secs);

  updateLS();
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

getLS();
setInterval(getLS, 1000);

function updateLS() {
  dateEl.addEventListener("input", () => {
    let dateData = dateEl.value;
    localStorage.setItem("date", JSON.stringify(dateData));
  });
}
