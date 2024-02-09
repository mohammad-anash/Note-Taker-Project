const container = createAndAppend("div", "class", "container", document.body);
const h1 = createAndAppend("h1", null, null, container);
const Note = createAndAppend("p", "class", "note", container);
const textArea = createAndAppend(
  "textarea",
  "id",
  "text",
  container,
  null,
  90,
  3
);
const addNote = createAndAppend("button", "class", "btn", container, "click");

Note.innerText = "Note:-";
h1.innerText = "Note Taker";
addNote.innerText = "Add Note";

function createAndAppend(ele, attType, attName, appendWith, event, col, rows) {
  const element = document.createElement(ele);

  if (attType && attName) {
    element.setAttribute(attType, attName);
  }

  if (appendWith) {
    appendWith.append(element);
  }
  if (ele === "textarea") {
    element.setAttribute("cols", col); // corrected "col" to "cols"
    element.setAttribute("rows", rows); // corrected "row" to "rows"
  }

  if (event === "click") {
    document.querySelector(".btn").addEventListener(event, createNote);
  }

  return element;
}

let counter = 1;
let storeText = "";
function makingNote() {
  const noteContainer = createAndAppend(
    "div",
    "class",
    "note-container",
    container
  );
  const notes = createAndAppend("h4", null, null, noteContainer);
  const notesValue = createAndAppend("span", "class", "notes-value", notes);
  const textValue = createAndAppend("div", "class", "textValue", noteContainer);
  const viewDetail = createAndAppend(
    "button",
    "class",
    "view-detail",
    noteContainer
  );

  notes.innerText = "Note";
  notesValue.innerText = counter++;
  textValue.innerText = textArea.value;
  viewDetail.innerText = "View Detail";

  notes.appendChild(notesValue);
}

function createNote() {
  makingNote();
  textArea.value = "";
}
