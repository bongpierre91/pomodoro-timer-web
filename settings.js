const STORAGE_KEY = 'pomodoro-duration';
const DEFAULT_MINUTES = 25;

const input = document.getElementById('timer-duration');
const saveBtn = document.querySelector('.btn-save');

input.value = localStorage.getItem(STORAGE_KEY) ?? DEFAULT_MINUTES;

function validate() {
  const val = input.value;
  const num = parseInt(val, 10);
  const isValid = val !== '' && num >= 1 && num <= 60;
  saveBtn.disabled = !isValid;
}

input.addEventListener('input', validate);

saveBtn.addEventListener('click', () => {
  localStorage.setItem(STORAGE_KEY, parseInt(input.value, 10));
  location.href = 'index.html';
});

validate();
