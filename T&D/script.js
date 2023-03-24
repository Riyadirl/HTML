function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById("time").innerHTML = timeString;
  document.getElementById("date").innerHTML = dateString;
}

setInterval(updateTime, 1000);
