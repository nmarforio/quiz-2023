const dark = document.querySelector('[data-js="darkmode"]');
const bodyElement = document.querySelector('[data-js="body"]');
const quizElement = document.querySelector('[data-js="quiz"]');
const settingButton = document.querySelector('[data-js="setting"]');
const darkImagine = document.querySelector('[data-js="imagine"]');

dark.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  dark.classList.toggle("dark");
  settingButton.classList.toggle("dark");
  quizElement.classList.toggle("dark");
  darkImagine.classList.toggle("dark");

  if (darkImagine.src === "https://pic.onlinewebfonts.com/svg/img_87237.png") {
    darkImagine.src =
      "https://clipground.com/images/white-profile-icon-clipart-3.jpg";
  } else {
    darkImagine.src = "https://pic.onlinewebfonts.com/svg/img_87237.png";
  }

  if (dark.textContent === "🌚") {
    dark.textContent = "🌝";
  } else {
    dark.textContent = "🌚";
  }
});
