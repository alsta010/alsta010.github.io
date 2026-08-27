let count = 0;
let count2 = 0;

// Number Counter (Player 1)
function updateCount() {
    document.getElementById("count").innerHTML = count;
}

function increaseCount() {
    count++;
    updateCount();
}

function decreaseCount() {
    count--;
    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

// Number Counter (Player 2)
function updateCount2() {
    document.getElementById("count2").innerHTML = count2;
}

function increaseCount2() {
    count2++;
    updateCount2();
}

function decreaseCount2() {
    count2--;
    updateCount2();
}

function resetCount2() {
    count2 = 0;
    updateCount2();
}

// Alert System
function myFunction() {
  alert("Lain Iwakura: No matter where you are... everyone is always connected.");
}

// Dark Mode
function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}

