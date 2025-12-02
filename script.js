const COLLECTION_LINK = "https://archiveofourown.org/collections/HoloficsOmegacember2025";
const COLLECTION_NAME = "Holofics Omegacember 2025";

function ship(charA, charB, charC) {
  return `${charA} x ${charB}` + ((charC == "") ? "" : ` x ${charC}`)
}

function generate_start(data) {
  return `<center>
  <h3><a href="${COLLECTION_LINK}" rel="nofollow">${COLLECTION_NAME}</a></h3>
  
  <h4>Day ${data.dayNumber}: ${data.prompt}</h4>
  <h5>${ship(data.charactersA, data.charactersB, data.charactersC)}</h5>
</center>
${data.startNotes}` + generate_ui(data);
}

function generate_end(data) {
  return data.endNotes + generate_ui(data);
}

function prevDay(data) {
  if (data.dayNumber == 1) {
    return ""
  }

  return `<td align="left">
    <a href="${data.prevLink}">⏮️ <strong>Day ${data.dayNumber - 1}: ${data.previousPrompt}</strong><br>(${ship(data.prevCharactersA, data.prevCharactersB, data.prevCharactersC)})</a></td>`
}

function nextDay(data) {
  let nextDayNotOut = (data.nextLink === "");
  
  let nextLink = nextDayNotOut ? COLLECTION_LINK : data.nextLink;
  let nextDayNumber = parseInt(data.dayNumber, 10) + 1;
  let nextDayShip = nextDayNotOut ? "find out tomorrow!" : ship(data.nextCharactersA, data.nextCharactersB, data.nextCharactersC);
  
  if (data.dayNumber == 31) {
    return ""
  }
  
  return `<td align="right">
  <a href="${nextLink}">
    <strong>Day ${nextDayNumber}: ${data.nextPrompt}</strong> ⏭️<br>(${nextDayShip}) 
  </a></td>`
}

function generate_ui(data) {
  return `<table>
  <tbody>
    <tr>
      ${prevDay(data)}
      ${nextDay(data)}
    </tr>
  </tbody>
</table>`;
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const data = {
    dayNumber: document.getElementById("dayNumber").value,
    
    charactersA: document.getElementById("charactersA").value,
    charactersB: document.getElementById("charactersB").value,
    charactersC: document.getElementById("charactersC").value,
    prompt: document.getElementById("prompt").value,
    
    prevCharactersA: document.getElementById("prevCharactersA").value,
    prevCharactersB: document.getElementById("prevCharactersB").value,
    prevCharactersC: document.getElementById("prevCharactersC").value,
    prevLink: document.getElementById("prevLink").value,
    previousPrompt: document.getElementById("previousPrompt").value,
    
    nextCharactersA: document.getElementById("nextCharactersA").value,
    nextCharactersB: document.getElementById("nextCharactersB").value,
    nextCharactersC: document.getElementById("nextCharactersC").value,
    nextLink: document.getElementById("nextLink").value,
    nextPrompt: document.getElementById("nextPrompt").value,
    
    startNotes: document.getElementById("startNotes").value,
    endNotes: document.getElementById("endNotes").value
  };

  document.getElementById("outputStart").value = generate_start(data);
  document.getElementById("outputEnd").value = generate_end(data);

  document.getElementById("startNotesPreview").innerHTML = document.getElementById("outputStart").value;
  document.getElementById("endNotesPreview").innerHTML = document.getElementById("outputEnd").value;
});

document.getElementById("copyStart").addEventListener("click", () => {
  const output = document.getElementById("outputStart");
  navigator.clipboard.writeText(output.value)
    .then(() => {
      copyStart.textContent = "copied! ✅";
      setTimeout(() => copyStart.textContent = "copy", 1000);
    })
    .catch(err => console.error("Copy failed:", err));
});

document.getElementById("copyEnd").addEventListener("click", () => {
  const output = document.getElementById("outputEnd");
  navigator.clipboard.writeText(output.value)
    .then(() => {
      copyEnd.textContent = "copied! ✅";
      setTimeout(() => copyEnd.textContent = "copy", 1000);
    })
    .catch(err => console.error("Copy failed:", err));
});

