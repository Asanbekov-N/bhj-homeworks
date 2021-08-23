const startValue = document.getElementById("timer");

const timeDown = setInterval(function() {
  if(startValue.textContent <= 0) {
    clearInterval(timeDown);
    alert("🎊 Вы победили в конкурсе! 🎊");
  } else {
  startValue.textContent --;
  }
}, 1000)