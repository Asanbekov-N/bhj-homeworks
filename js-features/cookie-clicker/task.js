const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function() {
  clickerCounter.textContent ++;
  cookie.width === 200
  ? (cookie.width = 180)
  : (cookie.width = 200);
}