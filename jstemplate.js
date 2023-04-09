// Anzahl der Fragen eintragen (min. 1, max. 4)
let questionnumber = 4;
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

  // Animation
  if (punkteanimation != "yes") {
  } else {
    var punktegreen = document.querySelectorAll(".punkt.green");
    for (var i = 0; i < punktegreen.length; i++) {
      punktegreen[i].style.animationDelay = Math.random() * 2 + "s";
    }
    var punkteyellow = document.querySelectorAll(".punkt.yellow");
    for (var i = 0; i < punkteyellow.length; i++) {
      punkteyellow[i].style.animationDelay = 2 + Math.random() * 2 + "s";
    }

    var punktered = document.querySelectorAll(".punkt.red");
    for (var i = 0; i < punktered.length; i++) {
      punktered[i].style.animationDelay = 4 + Math.random() * 2 + "s";
    }

    var punkteblue = document.querySelectorAll(".punkt.blue");
    for (var i = 0; i < punkteblue.length; i++) {
      punkteblue[i].style.animationDelay = 6 + Math.random() * 2 + "s";
    }
  }
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
