// Jenni Lohi

// Lisää notanumber
// Tee jotenki että näkyy vaa yks tehtävä kerrallaan


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// Arvotaan numerot
let minutes = getRndInteger(1, 3);
let seconds = getRndInteger(10, 30);
let candies = getRndInteger(4, 10) * 4;
let walkingMinutes = getRndInteger(2, 10);
let busMinutes = getRndInteger(10, 20);


// lisätään arvotut numerot spaneihin
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("candyAmount").innerHTML = candies;
document.getElementById("walkingMinutes").innerHTML = walkingMinutes;
document.getElementById("busMinutes").innerHTML = busMinutes;


//
let right = "Oikea vastaus!"
let wrong = "Väärä vastaus!"
let empty = "Syötä vastaus."
let notANumber = "Syötä vastaus numeroina."

let zeroRight = "ää";
let oneRight = "ää";
let twoRight = "ää";
let threeRight = "ää";
let fourRight = "ää";
let fiveRight = "ää";

// Laskuri oikeille vastauksille
let rightAnswerCounter = 0;
// Laskuri vastatuille kysymyksille
let answeredCounter = 0;

// Lisätään muuttuja progresbarille
let progressBar = "";
// Tallennetaan uuteen muuttujaan koodi joka lisää progressbariin vihreän palkin oikeasta vastauksesta
let progressRight ='<div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>'
// Tallennetaan uuteen muuttujaan koodi joka lisää progressbariin punaisen palkin väärästä vastauksesta
let progressWrong = '<div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>';

// Funktio vastausinputin ja -napin sulkemiselle
function disableAnswer(number) {
    document.getElementById("answer" + (number)).disabled = true;
    document.getElementById("submitAnswer" + (number)).disabled = true;
}



// Ensimmäinen lasku
function checkFirst() {
    let rightAnswer = (minutes * 60) + seconds;
    if (document.getElementById("answer1").value == rightAnswer) {
        document.getElementById("result1").innerHTML = right; 
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight;
        document.getElementById("progress1").innerHTML += progressBar;
    } else {
        document.getElementById("result1").innerHTML = wrong + " Oikea vastaus on " + rightAnswer + ".";
        // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
        progressBar += progressWrong
        document.getElementById("progress1").innerHTML += progressBar;
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(1);

    // Lisätään progressbarin tilanne tehtävä 2:sen progressbariin
    document.getElementById("progress2").innerHTML += progressBar;
    // Palautetaan progressbar
    return progressBar;
}


// Toinen lasku
function checkSecond() {
    document.getElementById("progress2").innerHTML = "";
    let rightAnswer = candies / 4
    if (document.getElementById("answer2").value == rightAnswer) {
        document.getElementById("result2").innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight;
        document.getElementById("progress2").innerHTML += progressBar;
    } else {
        document.getElementById("result2").innerHTML = wrong + " Oikea vastaus on " + rightAnswer + ".";
        // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
        progressBar += progressWrong
        document.getElementById("progress2").innerHTML += progressBar;
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(2);

    // Lisätään progressbarin tilanne tehtävä 3:sen progressbariin
    document.getElementById("progress3").innerHTML = progressBar;
    // Palautetaan progressbar
    return progressBar;
}

// Kolmas lasku
function checkThird() {
    
    document.getElementById("progress3").innerHTML = "";
    let rightAnswer = (busMinutes * 2) + (walkingMinutes * 2);
    if (document.getElementById("answer3").value == rightAnswer) {
        document.getElementById("result3").innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight;
        document.getElementById("progress3").innerHTML += progressBar;
    } else {
        document.getElementById("result3").innerHTML = wrong + " Oikea vastaus on " + rightAnswer + ".";
        // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
        progressBar += progressWrong
        document.getElementById("progress3").innerHTML += progressBar;
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(3);

    // Lisätään progressbarin tilanne tehtävä 4:sen progressbariin
    document.getElementById("progress4").innerHTML = progressBar;
    // Palautetaan progressbar
    return progressBar;
}

// Neljäs lasku
function checkFourth() {
    
    document.getElementById("progress4").innerHTML = "";
    let rightAnswer = "";
    if (document.getElementById("answer4").value == rightAnswer) {
        document.getElementById("result4").innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight;
        document.getElementById("progress4").innerHTML += progressBar;
    } else {
        document.getElementById("result4").innerHTML = wrong + " Oikea vastaus on " + rightAnswer + ".";
        // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
        progressBar += progressWrong
        document.getElementById("progress4").innerHTML += progressBar;
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(4);

    // Lisätään progressbarin tilanne tehtävä 5:sen progressbariin
    document.getElementById("progress5").innerHTML = progressBar;
    // Palautetaan progressbar
    return progressBar;
}

// Viides lasku
function checkFifth() {
    
    document.getElementById("progress5").innerHTML = "";
    let rightAnswer = "";
    if (document.getElementById("answer5").value == rightAnswer) {
        document.getElementById("result5").innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight;
        document.getElementById("progress5").innerHTML += progressBar;
    } else {
        document.getElementById("result5").innerHTML = wrong + " Oikea vastaus on " + rightAnswer + ".";
        // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
        progressBar += progressWrong
        document.getElementById("progress5").innerHTML += progressBar;
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(4);

    // Lisätään progressbarin tilanne lopulliseen progressbariin
    document.getElementById("progressFinal").innerHTML = progressBar;
    // Palautetaan progressbar
    return progressBar;
}







// if candies % 4  else 
