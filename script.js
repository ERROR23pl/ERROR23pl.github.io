const COLLECTION_LINK = "https://archiveofourown.org/collections/holofics_shiptober_2025/profile";

function generate_start(data) {
  return `<center>
  <a href="https://archiveofourown.org/collections/holofics_shiptober_2025/profile" rel="nofollow">Holofics Shiptober 2025</a>
  
  <h4>Day ${data.dayNumber}: ${data.characters}</h4>
</center>
${data.startNotes}` + generate_ui(data);
}

function generate_end(data) {
  return data.startNotes + generate_ui(data);
}

function generate_ui(data) {
  return `<table>
  <tbody>
    <tr>
      <td align="left"><a href="${data.prevLink}">⏮️ Day ${data.dayNumber - 1}: ${data.prevCharacters}</a></td>
      
      <td align="right">
        <a href="${(data.nextLink === "") ? COLLECTION_LINK : data.nextLink}">
          Day ${parseInt(data.dayNumber, 10) + 1}: ${(data.nextLink === "") ? "find out tomorrow! ⏭️" : data.nextCharacters}
      </a></td>
    </tr>
  </tbody>
</table>`;
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const data = {
    dayNumber: document.getElementById("dayNumber").value,
    characters: document.getElementById("characters").value,
    prevCharacters: document.getElementById("prevCharacters").value,
    prevLink: document.getElementById("prevLink").value,
    nextCharacters: document.getElementById("nextCharacters").value,
    nextLink: document.getElementById("nextLink").value,
    startNotes: document.getElementById("startNotes").value,
    endNotes: document.getElementById("endNotes").value
  };

  const result = generate_ui(data);
  document.getElementById("outputStart").value = generate_start(data);
  document.getElementById("outputEnd").value = generate_end(data);
});
