//Eveliina Kaarivaara

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let feedback = document.getElementById("feedback");

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

//Lukitaan "Seuraava kysymys"-painikkeet
document.getElementById("next1").disabled = true;
document.getElementById("next2").disabled = true;
document.getElementById("next3").disabled = true;
document.getElementById("next4").disabled = true;
document.getElementById("results").disabled = true;

//NÄILLE FUNKTIO??
//Piilotetaan edellinen kysymys ja näytetään seuraava kysymys
document.getElementById("next1").onclick = function showQuestion2() {
  document.getElementById("Q1").style = "display: none";
  document.getElementById("Q2").style = "display: inline";
  feedback.innerHTML = "";
}

document.getElementById("next2").onclick = function showQuestion3() {
  document.getElementById("Q2").style = "display: none";
  document.getElementById("Q3").style = "display: inline";
  feedback.innerHTML = "";
}

document.getElementById("next3").onclick = function showQuestion4() {
  document.getElementById("Q3").style = "display: none";
  document.getElementById("Q4").style = "display: inline";
  feedback.innerHTML = "";
}

document.getElementById("next4").onclick = function showQuestion5() {
  document.getElementById("Q4").style = "display: none";
  document.getElementById("Q5").style = "display: inline";
  feedback.innerHTML = "";
}

document.getElementById("results").onclick = function showResults() {
  document.getElementById("Q5").style = "display: none";
  feedback.innerHTML = "";
  //Näytetään yhteenveto tehtävistä

}

/**
 * EI TOIMI OIKEIN KUTSUTTAESSA??
 * @param {*} previousQuestion 
 * @param {*} nextQuestion 
 */
/*function showNextQuestion(previousQuestion, nextQuestion) {
  document.getElementById(previousQuestion).style = "display: none";
  document.getElementById(nextQuestion).style = "display: inline";
  feedback.innerHTML = "";
}*/

//Tarkistetaan vastaus
//Lasku 1
document.getElementById("check1").onclick = function checkAnswer1() {
  let rightAnswer1 = Number(document.getElementById("euros").innerHTML) - Number(document.getElementById("price").innerHTML);
  //Lukitaan input-kenttä
  document.getElementById("answer1").disabled = true;
  getFeedBack("answer1", "next1", rightAnswer1);
}

//Lasku 2
document.getElementById("check2").onclick = function checkAnswer2() {
  let rightAnswer2 = Number(document.getElementById("pears").innerHTML) * Number(document.getElementById("baskets").innerHTML);
  //Lukitaan input-kenttä
  document.getElementById("answer2").disabled = true;
  getFeedBack("answer2", "next2", rightAnswer2);
}

//Lasku3
document.getElementById("check3").onclick = function checkAnswer3() {
  let rightAnswer3 = Number(document.getElementById("candy").innerHTML) / 2;
  //Lukitaan input-kenttä
  document.getElementById("answer3").disabled = true;
  getFeedBack("answer3", "next3", rightAnswer3);
}

//Lasku 4
document.getElementById("check4").onclick = function checkAnswer4() {
  let rightAnswer4 = 20 - (Number(document.getElementById("euro1").innerHTML) + Number(document.getElementById("euro2").innerHTML));
  //Lukitaan input-kenttä
  document.getElementById("answer4").disabled = true;
  getFeedBack("answer4", "next4", rightAnswer4);
}

//Lasku 5
document.getElementById("check5").onclick = function checkAnswer5() {
  let rightAnswer5 = Number(document.getElementById("students1").innerHTML) + Number(document.getElementById("students2").innerHTML) + Number(document.getElementById("students3").innerHTML);
  //Lukitaan input-kenttä
  document.getElementById("answer5").disabled = true;
  getFeedBack("answer5", "results", rightAnswer5);
}

/**
 * Tarkistetaan onko käyttäjän syöttämä vastaus oikein ja annetaan palaute
 * @param {string} answer Vastauskentän id, heittomerkeissä
 * @param {string} next "Seuraava kysymys"-painikkeen id/"Näytä tulokset"-painikkeen id, heittomerkeissä
 * @param {*} rightAnswer Muuttuja, johon laskettu oikea vastaus
 */
function getFeedBack(answer, next, rightAnswer) {

  if (document.getElementById(answer).value == rightAnswer) {
    feedback.innerHTML = "Oikein!";
    //Avataan "Seuraava kysymys"-painikkeen lukitus
    document.getElementById(next).disabled = false;
  } else if (document.getElementById(answer).value == "") {
    feedback.innerHTML = "Et antanut vastausta, yritä uudelleen!";
    //Avataan vastauskentän lukitus
    document.getElementById(answer).disabled = false;
    //Lukitaan "Seuraava kysymys"-painike
    document.getElementById(next).disabled = true;
    //Viedään kursori takaisin vastauskenttään
    document.getElementById(answer).focus();
  } else {
    feedback.innerHTML = "Väärin! Oikea vastaus on " + rightAnswer + ".";
    //Avataan "Seuraava kysymys"-painikkeen lukitus
    document.getElementById(next).disabled = false;
  }
}



/*MUISTA!
-tarkista kommentit
-vastatut/kysymysten määrä
-tulokset
-funktioiden kommentit ja paikka
-muuttujat alkuun
-virheviesti, jos vastaus muu ku numeroita?
-tiedostojen nimet
-seuraava kysymys lukitus vai pois näkyvistä?
-muotoile palauteviestit
*/