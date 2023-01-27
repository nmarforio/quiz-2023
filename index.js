const bookmark = document.querySelector('[data-js="bookmarkjs"]');
const buttonAnswer = document.querySelector('[data-js="buttonanswer"]');
const hiddenAnswer = document.querySelector('[data-js="hiddenAnser"]');
const dark = document.querySelector('[data-js="darkmode"]');
const bodyElement = document.querySelector('[data-js="body"]');
const quizElement = document.querySelector('[data-js="quiz]');
const footerElement = document.querySelector('[data-js="pages"]');
const cardElement = document.querySelector('[data-js="cards"]');
const tagElement = document.querySelector('[data-js="tag"]');

function answer() {
  hiddenAnswer.setAttribute("hidden", "");
}

answer();

bookmark.addEventListener("click", () => {
  bookmark.classList.remove("bookmark");
  bookmark.classList.add("bookmark");
  bookmark.classList.toggle("bookmarkdark");
});

buttonAnswer.addEventListener("click", () => {
  hiddenAnswer.toggleAttribute("hidden");
  buttonAnswer.classList.remove("button");
  buttonAnswer.classList.add("button");
  buttonAnswer.classList.toggle("buttonanswer");

  if (buttonAnswer.textContent === "Hide answer") {
    buttonAnswer.textContent = "Show answer";
  } else {
    buttonAnswer.textContent = "Hide answer";
  }
});

dark.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  quizElement.classList.toggle("dark");
  footerElement.classList.toggle("dark");
  cardElement.classList.toggle("dark");
});

//to hide the answer before thr eventlistener
