
let localCount = parseInt(localStorage.getItem('localCount')) || 0;
let sessionCount = parseInt(sessionStorage.getItem('sessionCount')) || 0;

document.getElementById("localCount").textContent = localCount;
document.getElementById("sessionCount").textContent = sessionCount;

// Function to increment the local count and update the page and local storage
function incrementLocal() {
  localCount++;
  localStorage.setItem('localCount', localCount);
  document.getElementById("localCount").textContent = localCount;
}

// Function to increment the session count and update the page and session storage
function incrementSession() {
  sessionCount++;
  sessionStorage.setItem('sessionCount', sessionCount);
  document.getElementById("sessionCount").textContent = sessionCount;
}