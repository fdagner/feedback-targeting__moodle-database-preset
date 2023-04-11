// Anzahl der Fragen eintragen (min. 1, max. 4)
let questionnumber = 4;
// Anzahl der Ringe (min. 2, max. 10)
let ringnumber = 4;
//Fragen formulieren
let question1 = "Die Teamarbeit war erfolgreich";
let question2 = "Ich habe etwas gelernt";
let question3 = "Die Inhalte waren verständlich";
let question4 = "Ich kann das Thema in der Praxis einsetzen";
//Farbpunkte animieren: "yes" oder "no"
let punkteanimation = "yes";

// do not change anything from here on
document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("question1");
  element.innerHTML = question1;
  var element = document.getElementById("question2");
  element.innerHTML = question2;
  var element = document.getElementById("question3");
  element.innerHTML = question3;
  var element = document.getElementById("question4");
  element.innerHTML = question4;

  // Find and hide elements with the corresponding classes
  switch (questionnumber) {
    case 1:
      var divlabels = document.getElementsByClassName("divlabel");
      for (var i = 0; i < divlabels.length; i++) {
        var divlabel = divlabels[i];
        if (
          divlabel.classList.contains("yellow") ||
          divlabel.classList.contains("red") ||
          divlabel.classList.contains("blue")
        ) {
          divlabel.classList.add("hidden");
        }
      }
      break;
    case 2:
      var divlabels = document.getElementsByClassName("divlabel");
      for (var i = 0; i < divlabels.length; i++) {
        var divlabel = divlabels[i];
        if (
          divlabel.classList.contains("red") ||
          divlabel.classList.contains("blue")
        ) {
          divlabel.classList.add("hidden");
        }
      }
      break;
    case 3:
      var divlabels = document.getElementsByClassName("divlabel");
      for (var i = 0; i < divlabels.length; i++) {
        var divlabel = divlabels[i];
        if (divlabel.classList.contains("blue")) {
          divlabel.classList.add("hidden");
        }
      }
      break;
  }
  hideReloadHint();
  var anker = document.querySelector("#parent");
  anker.scrollIntoView();

  //Ringe erstellen
  for (let i = 1; i <= 10; i++) {
    const ring = document.getElementById("ring" + i);
    if (i > ringnumber) {
      ring.style.display = "none";
    } else {
      ring.style.display = "block";
    }
  }

  for (let i = 1; i <= 10; i++) {
    const ring = document.getElementById("ring" + i);
    const size = (i * 100) / ringnumber;
    const position = (100 - size) / 2;

    ring.style.width = size + "%";
    ring.style.height = size + "%";
    ring.style.top = position + "%";
    ring.style.left = position + "%";
  }

  hideReloadHint();
  var anker = document.querySelector("#parent");
  anker.scrollIntoView();
});

function showReloadHint() {
  var nachladenHinweisElement = document.getElementById("nachladenHinweis");
  nachladenHinweisElement.style.display = "block";
  let zielscheibeElement = document.getElementById("zielscheibe");
  zielscheibeElement.style.visibility = "hidden";
}

function hideReloadHint() {
  var nachladenHinweisElement = document.getElementById("nachladenHinweis");
  nachladenHinweisElement.style.display = "none";
  let zielscheibeElement = document.getElementById("zielscheibe");
  zielscheibeElement.style.visibility = "visible";
}

function reloadPage() {
  showReloadHint();
  setTimeout(function () {
    location.reload();
  }, 1000);
}

window.addEventListener("resize", reloadPage);
