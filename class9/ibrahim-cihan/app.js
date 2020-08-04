// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
const libButton = document.getElementById("lib-button");
libButton.addEventListener("click", makeMadLib);

function makeMadLib() {
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const story = document.getElementById("story");
  story.innerHTML += `${person} really likes ${adjective} ${noun}.`;
}