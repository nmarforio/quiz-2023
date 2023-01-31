const form = document.querySelector('[data-js="form"]');
const inputQuestion = document.querySelector('[data-js="inputquestion"]');
const inputAnswer = document.querySelector('[data-js="inputanswer"]');
const characters1 = document.querySelector('[data-js="charactersquestion"]');
const characters2 = document.querySelector('[data-js="charactersanswer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  newCard(data);
});

inputQuestion.addEventListener("input", (event) => {
  const length = inputQuestion.value.length;
  console.log(length);

  const result = 150 - length;
  console.log(result);

  characters1.textContent = `${result} Characters left`;
});

inputAnswer.addEventListener("input", (event) => {
  const length = inputAnswer.value.length;
  console.log(length);

  const result = 150 - length;
  console.log(result);

  characters2.textContent = `${result} Characters left`;
});

function newCard(newdata) {
  //Create the new Card
  const newDiv = document.createElement("div");
  newDiv.classList.add("cards");
  document.body.append(newDiv);

  //Create the Question
  const newInputQuestion = document.createElement("h2");
  newDiv.append(newInputQuestion);
  newInputQuestion.textContent = newdata.newquestion;

  //Create the Answer
  const newDivAnswer = document.createElement("div");
  newDivAnswer.classList.add("answer");
  newDiv.append(newDivAnswer);

  const newButtonAnswer = document.createElement("button");
  newDivAnswer.append(newButtonAnswer);
  newButtonAnswer.classList.add("button");
  newButtonAnswer.textContent = "Show Answer";

  const newAnswerP = document.createElement("p");
  newDivAnswer.append(newAnswerP);
  newAnswerP.classList.add("hiddenAnswer");
  newAnswerP.textContent = newdata.youranswer;

  //create new tag
  const newTag = document.createElement("button");
  newDiv.append(newTag);
  newTag.classList.add("tags");
  newTag.textContent = `#${newdata.tags}`;

  // create new Bookmark
  const bookmark = document.createElement("button");
  newDiv.append(bookmark);
  bookmark.classList.add("bookmark");
  bookmark.textContent = "👍";

  // function and eventlistener
  function answer() {
    newAnswerP.setAttribute("hidden", "");
  }

  answer();
  bookmark.addEventListener("click", () => {
    bookmark.classList.remove("bookmark");
    bookmark.classList.add("bookmark");
    bookmark.classList.toggle("bookmarkdark");
  });

  newButtonAnswer.addEventListener("click", () => {
    newAnswerP.toggleAttribute("hidden");
    newButtonAnswer.classList.remove("button");
    newButtonAnswer.classList.add("button");
    newButtonAnswer.classList.toggle("buttonanswer");

    if (newButtonAnswer.textContent === "Hide answer") {
      newButtonAnswer.textContent = "Show answer";
    } else {
      newButtonAnswer.textContent = "Hide answer";
    }
  });
}

// {/* <button aria-label="bookmark" class="bookmark">👍</button> */}

// {/* <button class="tags">#git</button>
//       <button class="tags">#terminal</button>
//       <button class="tags">#commit</button> */}

/* <div class="answer">
        <button class="button" data-js="buttonanswer">Show Answer</button>
        <p class="hiddenAnswer" data-js="hiddenAnser">Potatoes</p>
      </div> */
