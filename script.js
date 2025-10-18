function generate_ui(data) {
  // TODO: implement your logic
  // Return a string to be shown in the output area
  return "todo: implement";
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const data = {
    characters: document.getElementById("characters").value,
    prevCharacters: document.getElementById("prevCharacters").value,
    prevLink: document.getElementById("prevLink").value,
    nextCharacters: document.getElementById("nextCharacters").value,
    nextLink: document.getElementById("nextLink").value,
    startNotes: document.getElementById("startNotes").value,
    endNotes: document.getElementById("endNotes").value
  };

  const result = generate_ui(data);
  document.getElementById("output").value = result;
});
