let startTime, updatedTime, difference, timerInterval;
let running = false;

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 100);
    running = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  running = false;
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  difference = 0;
  running = false;
}

function lap() {
  if (running) {
    const lapTime = document.getElementById("display").innerText;
    const li = document.createElement("li");
    li.innerText = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
  }
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  document.getElementById("display").innerText = `${hours}:${minutes}:${seconds}`;
}
