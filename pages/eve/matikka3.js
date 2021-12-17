//Eveliina Kaarivaara

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let feedback = document.getElementById("feedback");

//Laskuri oikein vastatuille kysymyksille
let points = 0;


//Arvojen määritteleminen laskuille
document.getElementById("euros").innerHTML = getRndInteger(5, 15);
document.getElementById("price").innerHTML = getRndInteger(2, 4);

document.getElementById("pears").innerHTML = getRndInteger(3, 10);
document.getElementById("baskets").innerHTML = getRndInteger(2, 10);

let amount;   //parillinen arvo
do {
  amount = getRndInteger(10, 30)
} while( amount % 2 == 1 );
document.getElementById("candy").innerHTML = amount;

document.getElementById("euro1").innerHTML = getRndInteger(4, 9);
document.getElementById("euro2").innerHTML = getRndInteger(4, 9);

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
  getFeedBack("answer1", "next1", "check1", rightAnswer1);
}

//Lasku 2
document.getElementById("check2").onclick = function checkAnswer2() {
  let rightAnswer2 = Number(document.getElementById("pears").innerHTML) * Number(document.getElementById("baskets").innerHTML);
  getFeedBack("answer2", "next2", "check2", rightAnswer2);
}

//Lasku3
document.getElementById("check3").onclick = function checkAnswer3() {
  let rightAnswer3 = Number(document.getElementById("candy").innerHTML) / 2;
  getFeedBack("answer3", "next3", "check3", rightAnswer3);
}

//Lasku 4
document.getElementById("check4").onclick = function checkAnswer4() {
  let rightAnswer4 = 20 - (Number(document.getElementById("euro1").innerHTML) + Number(document.getElementById("euro2").innerHTML));
  getFeedBack("answer4", "next4", "check4", rightAnswer4);
}

//Lasku 5
document.getElementById("check5").onclick = function checkAnswer5() {
  let rightAnswer5 = Number(document.getElementById("students1").innerHTML) + Number(document.getElementById("students2").innerHTML) + Number(document.getElementById("students3").innerHTML);
  getFeedBack("answer5", "showResults", "check5", rightAnswer5);
}


/**
 * Tarkistetaan onko käyttäjän syöttämä vastaus oikein ja annetaan virheviesti/palaute
 * @param {string} answer Vastauskentän id
 * @param {string} next "Seuraava kysymys"/"Näytä tulokset" -painikkeen id
 * @param {string} check "Tarkista vastaus" -painikkeen id
 * @param {*} rightAnswer Muuttuja, johon laskettu oikea vastaus
 */
function getFeedBack(answer, next, check, rightAnswer) {

  if (document.getElementById(answer).value == rightAnswer) {
    feedback.innerHTML = "Oikein!";
    document.getElementById(answer).disabled = true;
    document.getElementById(check).disabled = true;
    document.getElementById(next).disabled = false;
    points += 1;
  } else if (document.getElementById(answer).value == "") {
    feedback.innerHTML = "Vastaus puuttuu, yritä uudelleen!";
    document.getElementById(next).disabled = true;
    document.getElementById(answer).focus();
  } else if (isNaN(document.getElementById(answer).value)) {
    feedback.innerHTML = "Vastaus täytyy antaa numerona, yritä uudelleen!";
    document.getElementById(next).disabled = true;
    document.getElementById(answer).focus();
    document.getElementById(answer).value = "";
  } else {
    feedback.innerHTML = "Väärin! Oikea vastaus on " + rightAnswer + ".";
    document.getElementById(answer).disabled = true;
    document.getElementById(check).disabled = true;
    document.getElementById(next).disabled = false;
  }
}


//Piilotetaan edellinen kysymys ja näytetään seuraava kysymys
document.getElementById("startTest").onclick = function showQuestion1() {
  document.getElementById("info").style = "display: none";
  document.getElementById("Q1").style = "display: inline";
  document.getElementById("answer1").focus();
}

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

  //Tulostetaan tulokset ja progress bar
  if (points == 5) {
    document.getElementById("points").innerHTML = "Sait täydet pisteet, loistavaa!";
    document.getElementById("fivePoints").style = "display: block";
  } else if (points == 4) {
    document.getElementById("points").innerHTML = "Vastasit oikein neljään kysymykseen, hienoa!";
    document.getElementById("fourPoints").style = "display: block";
  } else if (points == 3) {
    document.getElementById("points").innerHTML = "Vastasit oikein kolmeen kysymykseen, hyvä!";
    document.getElementById("threePoints").style = "display: block";
  } else if (points == 2) {
    document.getElementById("points").innerHTML = "Kaksi kysymystä oikein, hyvä!";
    document.getElementById("twoPoints").style = "display: block";
  } else if (points == 1) {
    document.getElementById("points").innerHTML = "Sait yhden pisteen, harjoittele vielä lisää!";
    document.getElementById("onePoint").style = "display: block";
  } else if (points == 0) {
    document.getElementById("points").innerHTML = "Ei yhtään pistettä, ehkä toisella kertaa paremmin!";
    document.getElementById("zeroPoints").style = "display: block";
  }
}