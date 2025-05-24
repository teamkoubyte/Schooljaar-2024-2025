let lijst = [];

function toonLijst() {
  let lijstHTML = "";
  
  for (let i = 0; i < lijst.length; i++) {
    lijstHTML += "<li>" + lijst[i] + "</li>";
  }
  
  document.getElementById("lijstID").innerHTML = lijstHTML;
}


function voegToeOnderaan() {
  let inputWaarde = document.getElementById("textID").value;
  
  if (inputWaarde != "") {
    lijst.push(inputWaarde); 
    document.getElementById("textID").value = "";
    toonLijst();
  }
}

function voegToeBovenaan() {
  let inputWaarde = document.getElementById("textID").value;
  
  if (inputWaarde != "") {
    lijst.unshift(inputWaarde);
    document.getElementById("textID").value = "";
    toonLijst();
  }
}

function verwijderOnderste() {
  if (lijst.length > 0) {
    lijst.pop(); 
    toonLijst();
  }
}


function verwijderBovenste() {
  if (lijst.length > 0) {
    lijst.shift(); 
    toonLijst();
  }
}