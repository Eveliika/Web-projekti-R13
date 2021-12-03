//Eveliina Kaarivaara

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//1. laskun arvojen määritteleminen
document.getElementById("euros").innerHTML = getRndInteger(5, 15);
document.getElementById("price").innerHTML = getRndInteger(2, 4);
//2. laskun arvojen määritteleminen
document.getElementById("pears").innerHTML = getRndInteger(3, 10);
document.getElementById("baskets").innerHTML = getRndInteger(2, 10);
//3. laskun parillisen arvon määritteleminen
let amount;
do {
  amount = getRndInteger(10, 30)
} while( amount % 2 == 1 );
document.getElementById("candy").innerHTML = amount;
//4. laskun arvojen määritteleminen
document.getElementById("euro1").innerHTML = getRndInteger(4, 9);
document.getElementById("euro2").innerHTML = getRndInteger(4, 9);
//5.laskun arvojen määritteleminen
document.getElementById("students1").innerHTML = getRndInteger(10, 20);
document.getElementById("students2").innerHTML = getRndInteger(10, 20);
document.getElementById("students3").innerHTML = getRndInteger(10, 20);


//NÄILLE FUNKTIO??
//Piilotetaan edellinen kysymys ja näytetään seuraava kysymys
document.getElementById("next1").onclick = function showQuestion2() {
  document.getElementById("Q1").style = "display: none";
  document.getElementById("Q2").style = "display: inline";
}

document.getElementById("next2").onclick = function showQuestion3() {
  document.getElementById("Q2").style = "display: none";
  document.getElementById("Q3").style = "display: inline";
}

document.getElementById("next3").onclick = function showQuestion4() {
  document.getElementById("Q3").style = "display: none";
  document.getElementById("Q4").style = "display: inline";
}

document.getElementById("next4").onclick = function showQuestion5() {
  document.getElementById("Q4").style = "display: none";
  document.getElementById("Q5").style = "display: inline";
}

document.getElementById("results").onclick = function showResults() {
  document.getElementById("Q5").style = "display: none";
  //Näytetään yhteenveto tehtävistä

}


//Tarkistetaan vastaus
//Lasku 1
document.getElementById("check1").onclick = function checkAnswer1() {
  let rightAnswer1 = Number(document.getElementById("euros").innerHTML) - Number(document.getElementById("price").innerHTML);
  getFeedBack("answer1", rightAnswer1);
}

//Lasku 2
document.getElementById("check2").onclick = function checkAnswer2() {
  let rightAnswer2 = Number(document.getElementById("pears").innerHTML) * Number(document.getElementById("baskets").innerHTML);
  getFeedBack("answer2", rightAnswer2);
}

//Lasku3
document.getElementById("check3").onclick = function checkAnswer3() {
  let rightAnswer3 = Number(document.getElementById("candy").innerHTML) / 2;
  getFeedBack("answer3", rightAnswer3);
}

//Lasku 4
document.getElementById("check4").onclick = function checkAnswer4() {
  let rightAnswer4 = 20 - (Number(document.getElementById("euro1").innerHTML) + Number(document.getElementById("euro2").innerHTML));
  getFeedBack("answer4", rightAnswer4);
}

//Lasku 5
document.getElementById("check5").onclick = function checkAnswer5() {
  let rightAnswer5 = Number(document.getElementById("students1").innerHTML) + Number(document.getElementById("students2").innerHTML) + Number(document.getElementById("students3").innerHTML);
  console.log(rightAnswer5);
  getFeedBack("answer5", rightAnswer5);
}

let feedback = document.getElementById("feedback");

/**
 * Tarkistetaan onko käyttäjän syöttämä vastaus oikein ja annetaan palaute
 * @param {string} answer Vastauskentän id, heittomerkeissä
 * @param {*} rightAnswer Muuttuja, johon laskettu oikea vastaus
 */
function getFeedBack(answer, rightAnswer) {
  if (document.getElementById(answer).value == rightAnswer) {
    feedback.innerHTML = "Oikein!";
  } else if (document.getElementById(answer).value == "") {
    feedback.innerHTML = "Et antanut vastausta, yritä uudelleen!";
    document.getElementById(answer).disabled = false;
  } else {
    feedback.innerHTML = "Väärin! Oikea vastaus on " + rightAnswer + ".";
  }
}

/*MUISTA!
-tyhjennä kentät
-tarkista kommentit
-lukitse kentät
-vastatut/kysymysten määrä
-tulokset
-funktioiden kommentit ja paikka
-muuttujat alkuun
-virheviesti, jos vastaus muu ku numeroita?
-tiedostojen nimet
*/