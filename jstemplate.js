// Anzahl der Fragen eintragen (min. 1, max. 4)
let questionnumber = 4;
//Fragen formulieren
let question1 = "Die Teamarbeit war erfolgreich";
let question2 = "Ich habe etwas gelernt";
let question3 = "Die Inhalte waren verständlich";
let question4 = "Ich kann das Thema in der Praxis einsetzen";

document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("question1");
  element.innerHTML = question1;
  var element = document.getElementById("question2");
  element.innerHTML = question2;
  var element = document.getElementById("question3");
  element.innerHTML = question3;
  var element = document.getElementById("question4");
  element.innerHTML = question4;
  // Elemente mit den entsprechenden Klassen finden und ausblenden
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
});
