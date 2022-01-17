const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickSpeed = document.getElementById("click__speed");
let date = new Date ()

cookie.onclick = function() {
  clickerCounter.textContent ++;
    cookie.width === 200
  ? (cookie.width = 180)
  : (cookie.width = 200);

  let newDate = new Date();
  let speed = (1 / ((newDate - date) / 1000)).toFixed(2);
  date = new Date ();
  clickSpeed.textContent = speed;
}

