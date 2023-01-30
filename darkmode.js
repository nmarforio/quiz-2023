const dark = document.querySelector('[data-js="darkmode"]');
const bodyElement = document.querySelector('[data-js="body"]');
const quizElement = document.querySelector('[data-js="quiz]');
const footerElement = document.querySelector('[data-js="pages"]');
const cardElement = document.querySelector('[data-js="cards"]');
const settingButton = document.querySelector('[data-js="setting"]');

dark.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  quizElement.classList.toggle("dark");
  footerElement.classList.toggle("dark");
  cardElement.classList.toggle("dark");
  settingButton.classList.toggle("dark");
  dark.classList.toggle("dark");

  if (dark.textContent === "🌚") {
    dark.textContent = "🌝";
  } else {
    dark.textContent = "🌚";
  }
});
