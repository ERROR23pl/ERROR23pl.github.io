const COLLECTION_LINK = "https://archiveofourown.org/collections/holofics_shiptober_2025/profile";

function ship(charA, charB, charC) {
  return `${charA} x ${charB}` + (charC == "") ? "" : ` x ${charC}`
}

function generate_start(data) {
  return `<center>
  <a href="https://archiveofourown.org/collections/holofics_shiptober_2025/profile" rel="nofollow">Holofics Shiptober 2025</a>
  
  <h4>Day ${data.dayNumber}: ${ship(data.charactersA, data.charactersB, data.charactersC)}</h4>
</center>
${data.startNotes}` + generate_ui(data);
}

function generate_end(data) {
  return data.startNotes + generate_ui(data);
}

function prevDay(data) {
  if data.dayNumber != 1 {
    return `<td align="left"><a href="${data.prevLink}">⏮️ Day ${data.dayNumber - 1}: ${ship(data.prevCharactersA, data.prevCharactersB, data.prevCharactersC)}</a></td>`
  } else {
    return ""
  }
}

function nextDay(data) {
  let nextDayIsOut = (data.nextLink === "");
  
  let nextLink = nextDayIsOut ? COLLECTION_LINK : data.nextLink;
  let nextDayNumber = parseInt(data.dayNumber, 10) + 1;
  let nextDayShip = nextDayIsOut ? "find out tomorrow! ⏭️" : ship(data.nextCharactersA, data.nextCharactersB, data.nextCharactersC)
  
  if data.dayNumber != 31 {
    return `<td align="right">
    <a href="${nextLink}">
      Day ${nextDayNumber}: ${nextDayShip} ⏭️
    </a></td>`
  } else {
    return ""
  }
}

function generate_ui(data) {
  return `<table>
  <tbody>
    <tr>
      ${prevDay(data)}
      ${nextDay(data}
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
    
    prevCharactersA: document.getElementById("prevCharactersA").value,
    prevCharactersB: document.getElementById("prevCharactersB").value,
    prevCharactersC: document.getElementById("prevCharactersC").value,
    prevLink: document.getElementById("prevLink").value,
    
    nextCharactersA: document.getElementById("nextCharactersA").value,
    nextCharactersB: document.getElementById("nextCharactersB").value,
    nextCharactersC: document.getElementById("nextCharactersC").value,
    nextLink: document.getElementById("nextLink").value,
    
    startNotes: document.getElementById("startNotes").value,
    endNotes: document.getElementById("endNotes").value
  };

  const result = generate_ui(data);
  document.getElementById("outputStart").value = generate_start(data);
  document.getElementById("outputEnd").value = generate_end(data);
});
