const mainContainer = makeAndFixElement(
  "div",
  "class",
  "main-container",
  document.body
);

const h1 = makeAndFixElement("h1", "class", "h1", mainContainer);
const textarea = makeAndFixElement(
  "textarea",
  "class",
  "textarea",
  mainContainer,
  80,
  5
);
const button = makeAndFixElement("button", "class", "btn", mainContainer);
button.innerText = "Add Note";
button.addEventListener("click", getData);

h1.innerText = "Note Taker";

function makeAndFixElement(ele, attType, attName, appendWith, cols, rows) {
  const element = document.createElement(ele);

  if (!!attType && !!attName) {
    element.setAttribute(attType, attName);
  }

  if (!!appendWith) {
    appendWith.append(element);
  }

  if (ele === "textarea") {
    element.setAttribute("cols", cols);
    element.setAttribute("rows", rows);
  }

  return element;
}

function getData() {
  const text = textarea.value;
  const noteContainer = makeAndFixElement(
    "div",
    "class",
    "note-container",
    mainContainer
  );
  const note = makeAndFixElement("div", "class", "note", noteContainer);
  const viewButton = makeAndFixElement(
    "button",
    "class",
    "view-btn",
    noteContainer
  );

  note.innerText = text;
  viewButton.innerText = "View Detail";
  viewButton.addEventListener("click", function () {
    showDetails(text);
  });
}

function showDetails(details) {
  const detailContainer = makeAndFixElement(
    "div",
    "class",
    "detail-container",
    document.body
  );
  detailContainer.innerHTML = details + '<i class="icon bx bx-x"></i>';
  mainContainer.style.display = "none";
  document.body.classList.add("overlay");

  const icon = detailContainer.querySelector(".icon");
  icon.addEventListener("click", function () {
    mainContainer.style.display = "block";
    detailContainer.style.display = "none";
    document.body.classList.remove("overlay");
  });
}
