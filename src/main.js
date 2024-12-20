const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const openModalBtn = document.getElementById('open-modal-btn'); // Кнопка для відкриття меню
const closeMenuBtn = document.getElementById('close-menu-btn'); // Кнопка для закриття меню
const menuItems = document.querySelectorAll('.menu-item a'); // Всі посилання в меню
const shopNowBtn = document.querySelector('.shop-now-btn'); // Кнопка SHOP NOW

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

// Закриття меню при кліку на будь-яке посилання в меню
menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    overlay.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
  });
});

// Закриття меню при кліку на кнопку SHOP NOW і перехід на іншу сторінку
shopNowBtn.addEventListener('click', function () {
  // Закриваємо меню
  overlay.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');

  // Перехід на потрібну сторінку
  window.location.href = '#you-order'; // Замініть на фактичну URL
});
