const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const openModalBtn = document.getElementById('open-modal-btn'); // Кнопка для відкриття меню
const closeMenuBtn = document.getElementById('close-menu-btn'); // Кнопка для закриття меню

// Відкриття меню при натисканні на кнопку
openModalBtn.addEventListener('click', function () {
  overlay.classList.add('is-open');
  mobileMenu.classList.add('is-open');
});

// Закриття меню при натисканні на кнопку закриття всередині мобільного меню
closeMenuBtn.addEventListener('click', function () {
  overlay.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
});

// Закриття меню при натисканні на оверлей
overlay.addEventListener('click', function () {
  overlay.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
});

// Додаємо обробник для кліку на мобільне меню, щоб запобігти закриттю при кліку всередині меню
mobileMenu.addEventListener('click', function (event) {
  event.stopPropagation(); // Запобігає поширенню події на оверлей
});

// Додаємо обробник для кліку на мобільне меню, щоб запобігти закриттю при кліку всередині меню
mobileMenu.addEventListener('click', function (event) {
  event.stopPropagation(); // Запобігає поширенню події на оверлей
});

// Закриття меню через існуючу кнопку закриття
closeMenuBtn.addEventListener('click', function () {
  overlay.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
});
