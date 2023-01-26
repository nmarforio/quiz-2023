const bookmark = document.querySelector('[data-js="bookmarkjs"]');
const buttonAnswer = document.querySelector('[data-js="buttonanswer"]');
const hiddenAnswer = document.querySelector('[data-js="hiddenAnser"]');

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

//to hide the answer before thr eventlistener
