//Eveliina Kaarivaara

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let feedback = document.getElementById("feedback");
let points = 0;

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
document.getElementById("showResults").disabled = true;


//Tarkistetaan vastaus
//Lasku 1
document.getElementById("check1").onclick = function checkAnswer1() {
  let rightAnswer1 = Number(document.getElementById("euros").innerHTML) - Number(document.getElementById("price").innerHTML);
  //Lukitaan input-kenttä
  document.getElementById("answer1").disabled = true;
  getFeedBack("answer1", "next1", "check1", rightAnswer1);
}

//Lasku 2
document.getElementById("check2").onclick = function checkAnswer2() {
  let rightAnswer2 = Number(document.getElementById("pears").innerHTML) * Number(document.getElementById("baskets").innerHTML);
  //Lukitaan input-kenttä
  document.getElementById("answer2").disabled = true;
  getFeedBack("answer2", "next2", "check2", rightAnswer2);
}

//Lasku3
document.getElementById("check3").onclick = function checkAnswer3() {
  let rightAnswer3 = Number(document.getElementById("candy").innerHTML) / 2;
  //Lukitaan input-kenttä
  document.getElementById("answer3").disabled = true;
  getFeedBack("answer3", "next3", "check3", rightAnswer3);
}

//Lasku 4
document.getElementById("check4").onclick = function checkAnswer4() {
  let rightAnswer4 = 20 - (Number(document.getElementById("euro1").innerHTML) + Number(document.getElementById("euro2").innerHTML));
  //Lukitaan input-kenttä
  document.getElementById("answer4").disabled = true;
  getFeedBack("answer4", "next4", "check4", rightAnswer4);
}

//Lasku 5
document.getElementById("check5").onclick = function checkAnswer5() {
  let rightAnswer5 = Number(document.getElementById("students1").innerHTML) + Number(document.getElementById("students2").innerHTML) + Number(document.getElementById("students3").innerHTML);
  //Lukitaan input-kenttä
  document.getElementById("answer5").disabled = true;
  getFeedBack("answer5", "showResults", "check5", rightAnswer5);
}

/**
 * Tarkistetaan onko käyttäjän syöttämä vastaus oikein ja annetaan palaute
 * @param {string} answer Vastauskentän id, heittomerkeissä
 * @param {string} next "Seuraava kysymys"-painikkeen id/"Näytä tulokset"-painikkeen id, heittomerkeissä
 * @param {*} rightAnswer Muuttuja, johon laskettu oikea vastaus
 */
function getFeedBack(answer, next, check, rightAnswer) {

  if (document.getElementById(answer).value == rightAnswer) {
    feedback.innerHTML = "Oikein!";
    //Avataan "Seuraava kysymys"-painikkeen lukitus
    document.getElementById(next).disabled = false;
    //Lukitaan "Tarkista vastaus"-painike
    document.getElementById(check).disabled = true;
    points += 1;
  } else if (document.getElementById(answer).value == "") {
    feedback.innerHTML = "Vastaus puuttuu, yritä uudelleen!";
    //Avataan vastauskentän lukitus
    document.getElementById(answer).disabled = false;
    //Lukitaan "Seuraava kysymys"-painike
    document.getElementById(next).disabled = true;
    //Viedään kursori takaisin vastauskenttään
    document.getElementById(answer).focus();
  } else if (isNaN(document.getElementById(answer).value)) {
    feedback.innerHTML = "Vastaus täytyy antaa numerona, yritä uudelleen!";
    document.getElementById(answer).disabled = false;
    document.getElementById(next).disabled = true;
    document.getElementById(answer).focus();
    //Tyhjennetään vastauskenttä
    document.getElementById(answer).value = "";
  } else {
    feedback.innerHTML = "Väärin! Oikea vastaus on " + rightAnswer + ".";
    //Avataan "Seuraava kysymys"-painikkeen lukitus
    document.getElementById(next).disabled = false;
    //Lukitaan "Tarkista vastaus"-painike
    document.getElementById(check).disabled = true;
  }
}


//Piilotetaan edellinen kysymys ja näytetään seuraava kysymys
document.getElementById("next1").onclick = function showQuestion2() {
  document.getElementById("Q1").style = "display: none";
  document.getElementById("Q2").style = "display: inline";
  feedback.innerHTML = "";
  document.getElementById("answer2").focus();
}

document.getElementById("next2").onclick = function showQuestion3() {
  document.getElementById("Q2").style = "display: none";
  document.getElementById("Q3").style = "display: inline";
  feedback.innerHTML = "";
  document.getElementById("answer3").focus();
}

document.getElementById("next3").onclick = function showQuestion4() {
  document.getElementById("Q3").style = "display: none";
  document.getElementById("Q4").style = "display: inline";
  feedback.innerHTML = "";
  document.getElementById("answer4").focus();
}

document.getElementById("next4").onclick = function showQuestion5() {
  document.getElementById("Q4").style = "display: none";
  document.getElementById("Q5").style = "display: inline";
  feedback.innerHTML = "";
  document.getElementById("answer5").focus();
}

document.getElementById("showResults").onclick = function showResults() {
  document.getElementById("Q5").style = "display: none";
  document.getElementById("results").style = "display: inline";
  feedback.innerHTML = "";

  //Tulostetaan tulokset
  if (points == 5) {
    document.getElementById("points").innerHTML = "5/5";
  } else if (points == 4) {
    document.getElementById("points").innerHTML = "4/5";
  } else if (points == 3) {
    document.getElementById("points").innerHTML = "3/5";
  } else if (points == 2) {
    document.getElementById("points").innerHTML = "2/5";
  } else if (points == 1) {
    document.getElementById("points").innerHTML = "1/5";
  } else if (points == 0) {
    document.getElementById("points").innerHTML = "0/5";
  }
}


/*MUISTA!
-tarkista kommentit
-tulokset visualisointi
-funktioiden kommentit ja paikka
-muotoile palauteviestit
-omien sivujen footer teksti?
*/