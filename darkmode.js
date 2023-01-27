const dark = document.querySelector('[data-js="darkmode"]');
const bodyElement = document.querySelector('[data-js="body"]');
const quizElement = document.querySelector('[data-js="quiz]');
const footerElement = document.querySelector('[data-js="pages"]');
const cardElement = document.querySelector('[data-js="cards"]');
const tagElement = document.querySelector('[data-js="tag"]');
const bookmarkElement = document.querySelector('[data-js="bookmarkjs"]');
const buttonElement = document.querySelector('[data-js="buttonanswer]');

dark.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  quizElement.classList.toggle("dark");
  footerElement.classList.toggle("dark");
  cardElement.classList.toggle("dark");
});
