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
let hennaCoins = getRndInteger(3, 15);
let teemuCoins = getRndInteger(20, 35);
let snailMinutes = getRndInteger(5, 13);


// lisätään arvotut numerot spaneihin
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("candyAmount").innerHTML = candies;
document.getElementById("walkingMinutes").innerHTML = walkingMinutes;
document.getElementById("busMinutes").innerHTML = busMinutes;
document.getElementById("hennaCoins").innerHTML = hennaCoins;
document.getElementById("teemuCoins").innerHTML = teemuCoins;
document.getElementById("snailMinutes").innerHTML = snailMinutes;



/*document.getElementById("ex1").style.display = "none";
document.getElementById("ex2").style.display = "none";
document.getElementById("ex3").style.display = "none";
document.getElementById("ex4").style.display = "none";
document.getElementById("ex5").style.display = "none";*/


//
let right = "Hienoa, vastasit oikein!"
let wrong = "Harmi, vastasit väärin. Oikea vastaus on "
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

let number = 0;

// Lisätään muuttuja progressbarille
let progressBar = "";

// Tehdään funktio, joka palauttaa koodin joka lisää progressbariin vihreän palkin ja lisää siihen parametrina annetun numeron joka kertoo, montako tehtävää tehty
function progressRight(n) {
    return '<div class="progress-bar bg-success" name="progressbar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">' + n + '/5</div>'
}

// Tallennetaan uuteen muuttujaan koodi joka lisää progressbariin punaisen palkin ja lisää siihen parametrina annetun numeron joka kertoo, montako tehtävää tehty
function progressWrong(n) {
    return '<div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">'+ n + '/5</div>';
}

// Tallennetaan muuttujaan koodi jolla lisätään seuraavaan tehtävään sininen progressbarin lohko ja lisää siihen parametrina annetun numeron joka kertoo, monesko tehtävä menossa
function nextBar(n) {
    return '<div class="progress-bar bg-info" id="progressbar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">' + n + '/5</div>'
}



// Funktio vastausinputin ja -napin sulkemiselle
function disableAnswer(number) {
    document.getElementById("answer" + (number)).disabled = true;
    document.getElementById("submitAnswer" + (number)).disabled = true;
}

let answer1 = document.getElementById("answer1");
let result1 = document.getElementById("result1");
let progress1 = document.getElementById("progress1");
let answer2 = document.getElementById("answer2");
let result2 = document.getElementById("result2");
let progress2 = document.getElementById("progress2");
let answer3 = document.getElementById("answer3");
let result3 = document.getElementById("result3");
let progress3 = document.getElementById("progress3");
let answer4 = document.getElementById("answer4");
let result4 = document.getElementById("result4");
let progress4 = document.getElementById("progress4");
let answer5 = document.getElementById("answer5");
let result5 = document.getElementById("result5");
let progress5 = document.getElementById("progress5");



// Ensimmäinen lasku
function checkFirst() {
    let rightAnswer = (minutes * 60) + seconds;
    
    if (answer1.value == rightAnswer) {
        result1.innerHTML = right; 
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(1);
        progress1.innerHTML = progressBar;
    } else {
        if (isNaN(answer1.value)) {
            result1.innerHTML = notANumber; 
            return result1;
        } else if (answer1.value == "" || answer1.value == " ") {
            result1.innerHTML = empty
            return result1; 
        } else {
            result1.innerHTML = wrong + rightAnswer + ".";
            // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
            progressBar += progressWrong(1)
            progress1.innerHTML = progressBar; 
        }
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(1);
    // Lisätään progressbarin tilanne tehtävä 2:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress2.innerHTML = progressBar + nextBar(2);
    // Palautetaan progressbar
    return progressBar;
} 


// Toinen lasku
function checkSecond() {
    let rightAnswer = candies / 4

    if (answer2.value == rightAnswer) {
        result2.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(2);
        progress2.innerHTML = progressBar;
    } else {
        if (isNaN(answer2.value)) {
            result2.innerHTML = notANumber; 
            return result2;
        } else if (answer2.value == "" || answer2.value == " ") {
            result2.innerHTML = empty
            return result2; 
        } else {
            result2.innerHTML = wrong + rightAnswer + ".";
            // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
            progressBar += progressWrong(2);
            progress2.innerHTML = progressBar;
        }
    }

    // Suljetaan vastausinput ja -nappi
    disableAnswer(2);

    // Lisätään progressbarin tilanne tehtävä 3:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress3.innerHTML = progressBar + nextBar(3);
    // Palautetaan progressbar
    return progressBar;
}

// Kolmas lasku
function checkThird() {
    
    let rightAnswer = (busMinutes * 2) + (walkingMinutes * 2);
    if (answer3.value == rightAnswer) {
        result3.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(3);
        progress3.innerHTML = progressBar;
    } else {
        if (isNaN(answer3.value)) {
            result3.innerHTML = notANumber; 
            return result3;
        } else if (answer3.value == "" || answer3.value == " ") {
            result3.innerHTML = empty
            return result3; 
        } else {
            result3.innerHTML = wrong + rightAnswer + ".";
            // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
            progressBar += progressWrong(3);
            progress3.innerHTML = progressBar;
        }
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(3);

    // Lisätään progressbarin tilanne tehtävä 4:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress4.innerHTML = progressBar + nextBar(4);
    // Palautetaan progressbar
    return progressBar;
}

// Neljäs lasku
function checkFourth() {
    
    let rightAnswer = teemuCoins - hennaCoins;
    if (answer4.value == rightAnswer) {
        result4.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(4);
        progress4.innerHTML = progressBar;
    } else {
        if (isNaN(answer4.value)) {
            result4.innerHTML = notANumber; 
            return result4;
        } else if (answer4.value == "" || answer4.value == " ") {
            result4.innerHTML = empty
            return result4; 
        } else {
            result4.innerHTML = wrong + rightAnswer + ".";
            // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
            progressBar += progressWrong(4);
            progress4.innerHTML = progressBar;
        }
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(4);

    // Lisätään progressbarin tilanne tehtävä 5:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress5.innerHTML = progressBar + nextBar(5);
    // Palautetaan progressbar
    return progressBar;
}

// Viides lasku
function checkFifth() {

    let rightAnswer = snailMinutes * 3;
    if (answer5.value == rightAnswer) {
        result5.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(5);
        progress5.innerHTML = progressBar;
    } else {
        if (isNaN(answer5.value)) {
            result5.innerHTML = notANumber; 
            return result5;
        } else if (answer5.value == "" || answer5.value == " ") {
            result5.innerHTML = empty
            return result5; 
        } else {
            result5.innerHTML = wrong + rightAnswer + ".";
            // Tallennetaan ja lisätään progressbariin punainen palkki väärästä vastauksesta
            progressBar += progressWrong(5);
            progress5.innerHTML = progressBar;
        }
    }
    // Suljetaan vastausinput ja -nappi
    disableAnswer(5);

    // Lisätään progressbarin tilanne lopulliseen progressbariin
    document.getElementById("progressFinal").innerHTML = progressBar;
    // Palautetaan progressbar
    return progressBar;
}


