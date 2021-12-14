// Jenni Visuri

let numbers1 = [4, 8, 12, 16, 20]
let numbers2 = [2, 4]

// Laskuri oikeille vastauksille
let counter = 0
// Laskuri vastattujen kysymysten määrälle
let counter2 = 0
// Muuttuja kysymysten määrälle
let taskAmount = 5


// Luodaan muuttujat tyhjälle, oikealle ja väärälle vastaukselle
let right = "Vastauksesi on oikein!";
let wrong = "Vastaus on väärin. Oikea vastaus on "
let empty = "Syötä vastaus."

// Luodaan muuttujat luokittelua varten
let fiveRight = "5/5 Sait kaikki oikein, olet nero!"
let fourRight = "4/5 Melkein kaikki oikein, loistavaa!"
let threeRight = "3/5 Yli puolet oikein, hyvä!"
let twoRight = "2/5 Tarvitset vielä vähän harjoitusta."
let oneRight = "1/5 Harjoittele ahkerammin."
let zeroRight = "0/0 Ei yhtään oikein. Kokeilepas uudelleen."

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function startData() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "none";
    document.getElementById("results").innerHTML = "";
    document.getElementById("finishTest").style.display = "none";
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("next2").style.display = "none";
    document.getElementById("next3").style.display = "none";
    document.getElementById("next4").style.display = "none";
}
function startTest() {
    document.getElementById("startTest").style.display = "none";
    document.getElementById("q1").style.display = "block";
    document.getElementById("answer1").focus();
}

// Arvotaan tehtäviin uudet numerot
document.getElementById("number1a").innerHTML = getRndInteger(1, 20);
document.getElementById("number1b").innerHTML = getRndInteger(1, 20);
document.getElementById("number2a").innerHTML = getRndInteger(1, 10);
document.getElementById("number2b").innerHTML = getRndInteger(1, 10);
document.getElementById("number3a").innerHTML = getRndInteger(5, 20);
document.getElementById("number3b").innerHTML = getRndInteger(5, 20);
document.getElementById("number3c").innerHTML = getRndInteger(1, 10);
document.getElementById("number4a").innerHTML = numbers1[getRndInteger(0, numbers1.length)];
document.getElementById("number4b").innerHTML = numbers2[getRndInteger(0, 2)];
document.getElementById("number5a").innerHTML = getRndInteger(3, 10);
document.getElementById("number5b").innerHTML = getRndInteger(3, 10);
document.getElementById("number5c").innerHTML = getRndInteger(1, 9);



function checkAnswerOne() {
    document.getElementById("answer1").disabled = true;

    //Luodaan muuttuja oikeaa vastausta varten
    let result1 = 0
    result1 = Number(document.getElementById("number1a").innerHTML) + Number(document.getElementById("number1b").innerHTML);
    let answer1 = document.getElementById("answer1").value;

    // Tarkistetaan, onko vastaus syötetty
    if (answer1 == "") {
        document.getElementById("results").innerHTML = empty;
        document.getElementById("answer1").disabled = false;
        document.getElementById("answer1").focus();
        document.getElementById("results").style.background = "#F8DBB7"
        return
    }

    if (answer1 == result1) {
        counter++;
        counter2++;
        document.getElementById("results").innerHTML = right;
        document.getElementById("next").style.display = "block";
        document.getElementById("checkOne").disabled = true;
        document.getElementById("results").style.background = "#D5EEDA"

    } else {
        document.getElementById("results").innerHTML = wrong + result1 + ".";
        document.getElementById("next").style.display = "block";
        document.getElementById("checkOne").disabled = true;
        document.getElementById("results").style.background = "#F6BBBC"
    }

}

function nextQuestion1() {
    document.getElementById("results").style.background = "transparent";
    document.getElementById("results").innerHTML = "";
    document.getElementById("next").style.display = "none";
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
    document.getElementById("answer2").focus();
}

function checkAnswerTwo() {
    document.getElementById("answer2").disabled = true;

    //Luodaan muuttuja oikeaa vastausta varten
    let result2 = 0
    result2 = Number(document.getElementById("number2a").innerHTML) * Number(document.getElementById("number2b").innerHTML);
    let answer2 = document.getElementById("answer2").value;

    // Tarkistetaan, onko vastaus syötetty
    if (answer2 == "") {
        document.getElementById("results").innerHTML = empty;
        document.getElementById("answer2").disabled = false;
        document.getElementById("answer2").focus();
        document.getElementById("results").style.background = "#F8DBB7"
        return
    }

    if (answer2 == result2) {
        counter++;
        counter2++;
        document.getElementById("results").innerHTML = right;
        document.getElementById("next2").style.display = "block";
        document.getElementById("checkTwo").disabled = true;
        document.getElementById("results").style.background = "#D5EEDA"

    } else {
        document.getElementById("results").innerHTML = wrong + result2 + ".";
        document.getElementById("next2").style.display = "block";
        document.getElementById("checkTwo").disabled = true;
        document.getElementById("results").style.background = "#F6BBBC"
    }
}

function nextQuestion2() {
    document.getElementById("results").style.background = "transparent";
    document.getElementById("results").innerHTML = "";
    document.getElementById("next2").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
    document.getElementById("answer3").focus();
}

function checkAnswerThree() {
    document.getElementById("answer3").disabled = true;

    //Luodaan muuttuja oikeaa vastausta varten
    let result3 = 0
    result3 = Number(document.getElementById("number3a").innerHTML) + Number(document.getElementById("number3b").innerHTML) - Number(document.getElementById("number3c").innerHTML);
    let answer3 = document.getElementById("answer3").value;

    // Tarkistetaan, onko vastaus syötetty
    if (answer3 == "") {
        document.getElementById("results").innerHTML = empty;
        document.getElementById("answer3").disabled = false;
        document.getElementById("answer3").focus();
        document.getElementById("results").style.background = "#F8DBB7"
        return
    }

    if (answer3 == result3) {
        counter++;
        counter2++;
        document.getElementById("results").innerHTML = right;
        document.getElementById("next3").style.display = "block";
        document.getElementById("checkThree").disabled = true;
        document.getElementById("answer1").focus();
        document.getElementById("results").style.background = "#D5EEDA"

    } else {
        document.getElementById("results").innerHTML = wrong + result3 + ".";
        document.getElementById("next3").style.display = "block";
        document.getElementById("checkThree").disabled = true;
        document.getElementById("results").style.background = "#F6BBBC"
    }
}

function nextQuestion3() {
    document.getElementById("results").style.background = "transparent";
    document.getElementById("results").innerHTML = "";
    document.getElementById("next3").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "block";
    document.getElementById("answer4").focus();
}

function checkAnswerFour() {
    document.getElementById("answer4").disabled = true;

    //Luodaan muuttuja oikeaa vastausta varten
    let result4 = 0
    result4 = Number(document.getElementById("number4a").innerHTML) / Number(document.getElementById("number4b").innerHTML);
    let answer4 = document.getElementById("answer4").value;

    // Tarkistetaan, onko vastaus syötetty
    if (answer4 == "") {
        document.getElementById("results").innerHTML = empty;
        document.getElementById("answer4").disabled = false;
        document.getElementById("answer4").focus();
        document.getElementById("results").style.background = "#F8DBB7"
        return
    }

    if (answer4 == result4) {
        counter++;
        counter2++;
        document.getElementById("results").innerHTML = right;
        document.getElementById("next4").style.display = "block";
        document.getElementById("checkFour").disabled = true;
        document.getElementById("results").style.background = "#D5EEDA"

    } else {
        document.getElementById("results").innerHTML = wrong + result4 + ".";
        document.getElementById("next4").style.display = "block";
        document.getElementById("checkFour").disabled = true;
        document.getElementById("results").style.background = "#F6BBBC"
    }
}

function nextQuestion4() {
    document.getElementById("results").style.background = "transparent";
    document.getElementById("results").innerHTML = "";
    document.getElementById("next4").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "block";
    document.getElementById("answer5").focus();
}

function checkAnswerFive() {
    document.getElementById("answer5").disabled = true;

    //Luodaan muuttuja oikeaa vastausta varten
    let result5 = 0
    result5 = Number(document.getElementById("number5a").innerHTML) * Number(document.getElementById("number5b").innerHTML) - Number(document.getElementById("number5c").innerHTML);
    let answer5 = document.getElementById("answer5").value;

    // Tarkistetaan, onko vastaus syötetty
    if (answer5 == "") {
        document.getElementById("results").innerHTML = empty;
        document.getElementById("answer5").disabled = false;
        document.getElementById("answer5").focus();
        document.getElementById("results").style.background = "#F8DBB7"
        return
    }

    if (answer5 == result5) {
        counter++;
        counter2++;
        document.getElementById("results").innerHTML = right;
        document.getElementById("finishTest").style.display = "block";
        document.getElementById("checkFive").disabled = true;
        document.getElementById("results").style.background = "#D5EEDA"

    } else {
        document.getElementById("results").innerHTML = wrong + result5 + ".";
        document.getElementById("finishTest").style.display = "block";
        document.getElementById("checkFive").disabled = true;
        document.getElementById("results").style.background = "#F6BBBC"
    }
}

function finishTest() {

    document.getElementById("results").style.background = "transparent";
    document.getElementById("results").innerHTML = "";
    document.getElementById("finishTest").style.display = "none";
    document.getElementById("q5").style.display = "none";

    classification();
}

function classification() {

    document.getElementById("tryAgain").style.display = "block";

    if (counter == 5) {
        document.getElementById("classification").innerHTML = fiveRight
    } else if (counter == 4) {
        document.getElementById("classification").innerHTML = fourRight
    } else if (counter == 3) {
        document.getElementById("classification").innerHTML = threeRight
    } else if (counter == 2) {
        document.getElementById("classification").innerHTML = twoRight
    } else if (counter == 1) {
        document.getElementById("classification").innerHTML = oneRight
    } else {
        document.getElementById("classification").innerHTML = zeroRight
    }
}

function tryAgain() {
    location.reload();
}