'use strict';

///////////////////////////////////////

console.log(document.documentElement);

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// // Creating Element
// const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and analytics <button class = "btn btn--close-cookie"> Got it! </button>`;

// header.append(message);

// // Deleting Element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styling Elements

// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// Implementing Smooth Scrolling

const btnScrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollto.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Implementing Smooth Scrolling for nav links using event delegation

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    // Only trigger action when nav links are clicked and not the container
    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
