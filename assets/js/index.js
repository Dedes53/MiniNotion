const text = document.getElementById("noteTitle");
const createBTN = document.getElementById("create");
const noteList = document.getElementById("noteList");

createBTN.addEventListener("click", (e) => {
  e.preventDefault(); //evita che il form si ricarici e si perda il value del di text

  let newNote = text.value;
  if (newNote === "") {
    return;
  }
  console.log(newNote);
  let newLI = document.createElement("li");
  newLI.innerText = newNote;
  noteList.appendChild(newLI);
  text.value = "";
});
