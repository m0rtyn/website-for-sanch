const trigger = document.querySelector('.trigger');
const russian = document.querySelector('.russian');
const english = document.querySelector('.english');

trigger.addEventListener('click', () => {
  russian.classList.toggle('hidden');
  english.classList.toggle('hidden');
});