// Gestion du menu burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
}
