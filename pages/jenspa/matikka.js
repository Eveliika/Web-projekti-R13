// Jenni Visuri

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let numbers1 = [4, 8, 12, 16, 20]
let numbers2 = [2, 4]

// Laskuri oikeille vastauksille
let counter = 0
// Laskuri vastattujen kysymysten määrälle
let counter2 = 0
// Muuttuja kysymysten määrälle
let taskAmount = 5

// Luodaan muuttujat luokittelua varten
let fiveRight = "5/5 Sait kaikki oikein, olet nero!"
let fourRight = "4/5 Melkein kaikki oikein, loistavaa!"
let threeRight = "3/5 Yli puolet oikein, hyvä!"
let twoRight = "2/5 Tarvitset vielä vähän harjoitusta."
let oneRight = "1/5 Harjoittele ahkerammin."
let zeroRight = "0/0 Ei yhtään oikein. Kokeilepas uudelleen."

function startData() {

    // Poistetaan vastauskentistä lukitus
    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false;
    document.getElementById("answer5").disabled = false;

    // Tyhjennetään kentät
    document.getElementById("answer1").innerHTML = "";
    document.getElementById("answer2").innerHTML = "";
    document.getElementById("answer3").innerHTML = "";
    document.getElementById("answer4").innerHTML = "";
    document.getElementById("answer5").innerHTML = "";
    document.getElementById("classification").innerHTML = "";

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
}

function checkAnswerOne() {
    document.getElementById("answer1").disabled = true;

    // Luodaan muuttuja oikeaa vastausta varten
    let result1 = document.getElementById("number1a") && document.getElementById("number1b")

    if(answer1 = result1) {
        counter++;
        counter2++;
    } else {
        
    }
}

function checkAnswerTwo() {
    document.getElementById("answer2").disabled = true;
}

function checkAnswerThree() {
    document.getElementById("answer3").disabled = true;
}

function checkAnswerFour() {
    document.getElementById("answer4").disabled = true;
}

function checkAnswerFive() {
    document.getElementById("answer5").disabled = true;
}

function finishTest() {

    if(counter == 5) {
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