const STORAGE_KEY = 'pomodoro-duration';
const DEFAULT_MINUTES = 25;

function getSavedMinutes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? parseInt(saved, 10) : DEFAULT_MINUTES;
}

let remainingSeconds = getSavedMinutes() * 60;
let intervalId = null;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  document.getElementById('timer').textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = getSavedMinutes() * 60;
  updateDisplay();
}

updateDisplay();
