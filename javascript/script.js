let klikk = 0;
let sold = 0;
let timerStatus = false;

let timer = 10;
const timerUI = document.getElementById("timerUI");

function lagVaffel() {
  if (!timerStatus) {
    startTimer();
    timerStatus = true;
  }
  klikk = klikk + 1;
  updateUI();
}

function updateUI() {
  document.getElementById("klikk").textContent = klikk;
  document.getElementByI("sold").textContent = sold;
}

function startTimer() {
  setInterval(() => {
    if (timer > 0) {
      timer = timer - 1;
    } else {
      alert("Du laget:" + klikk + "vafler på 10 sek");
      location.reload();
      timer = 10;
    }
    timerUI.textContent = timer;
    updateUI();
  }, 1000);
}
