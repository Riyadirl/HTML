//function
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById("time").innerHTML = timeString;
  document.getElementById("date").innerHTML = dateString;
}
//call the function
setInterval(updateTime, 1000);
