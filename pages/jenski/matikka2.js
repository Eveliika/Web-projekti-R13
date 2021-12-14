// Jenni Lohi

// Lisää nappeja, lisää feedbacktekstiä, ehkä kuvia riippuen mikä tulos?

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

// Tallennetaan elementtejä muuttujiin
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let answer5 = document.getElementById("answer5");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result5 = document.getElementById("result5");
let progress1 = document.getElementById("progress1");
let progress2 = document.getElementById("progress2");
let progress3 = document.getElementById("progress3");
let progress4 = document.getElementById("progress4");
let progress5 = document.getElementById("progress5");
let progressFinal = document.getElementById("progressFinal");
let feedback = document.getElementById("feedback");

let right = "Hienoa, vastasit oikein!"
let wrong = "Harmi, vastasit väärin. Oikea vastaus on "
let empty = "Syötä vastaus."
let notANumber = "Syötä vastaus numeroina."

let zeroRight = "0 oikein";
let oneRight = "1 oikein";
let twoRight = "2 oikein";
let threeRight = "3 oikein";
let fourRight = "4 oikein";
let fiveRight = "5 oikein";

// Laskuri oikeille vastauksille
let rightAnswerCounter = 0;
// Laskuri vastatuille kysymyksille
let answeredCounter = 0;
// Lisätään muuttuja progressbarille
let progressBar = "";

// asetetaan ensiksi sininen palkki
progress1.innerHTML = '<div class="progress-bar bg-info" id="progressbar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">1/5</div>'

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
function toggleAnswer(number, boolean) {
    document.getElementById("answer" + (number)).disabled = boolean;
    document.getElementById("submitAnswer" + (number)).disabled = boolean;
}

// Luodaan funktio jolla voidaan vaihtaa divien näkymistä
function toggleVisibility(id, toggle) {
    document.getElementById(id).style.display = toggle;
}

// next-napeille funktiot että laittaa nykysen divin pois ja seuraavan näkyviin
function next1() {
    toggleVisibility("ex1", "none");
    toggleVisibility("ex2", "block");
}
function next2() {
    toggleVisibility("ex2", "none");
    toggleVisibility("ex3", "block");
}
function next3() {
    toggleVisibility("ex3", "none");
    toggleVisibility("ex4", "block");
}
function next4() {
    toggleVisibility("ex4", "none");
    toggleVisibility("ex5", "block");
}
function next5() {
    toggleVisibility("ex5", "none");
    toggleVisibility("finish", "block");
}

// Asetetaan aluksi vain aloitusdivi näkyviin ja muut pois
toggleVisibility("startPage", "block");
toggleVisibility("ex1", "none");
toggleVisibility("ex2", "none");
toggleVisibility("ex3", "none");
toggleVisibility("ex4", "none");
toggleVisibility("ex5", "none");
toggleVisibility("finish", "none");
toggleVisibility("next1", "none");
toggleVisibility("next2", "none");
toggleVisibility("next3", "none");
toggleVisibility("next4", "none");
toggleVisibility("next5", "none");

// Aloitusnappia painaessa laitetaan aloitusdivi pois ja ensimmäinen tehtävädivi näkyviin
function startExcercise() {
    toggleVisibility("ex1", "block");
    toggleVisibility("startPage", "none");
}

// Ensimmäinen lasku
function checkFirst() {
    let rightAnswer = (minutes * 60) + seconds;

    console.log(rightAnswer);
    
    if (answer1.value == rightAnswer) {
        result1.innerHTML = right; 
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(1);
        progress1.innerHTML = progressBar;
        rightAnswerCounter++;
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
    toggleAnswer(1, true);
    // Lisätään progressbarin tilanne tehtävä 2:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress2.innerHTML = progressBar + nextBar(2);
    // laitetaan next-nappi näkyviin 
    toggleVisibility("next1", "inline-block");
    // Palautetaan progressbar
    return progressBar;
} 

// Toinen lasku
function checkSecond() {
    let rightAnswer = candies / 4

    console.log(rightAnswer);

    if (answer2.value == rightAnswer) {
        result2.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(2);
        progress2.innerHTML = progressBar;
        rightAnswerCounter++;
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
    toggleAnswer(2, true);

    // Lisätään progressbarin tilanne tehtävä 3:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress3.innerHTML = progressBar + nextBar(3);

    // laitetaan next-nappi näkyviin 
    toggleVisibility("next2", "inline-block");
    
    // Palautetaan progressbar
    return progressBar;
}

// Kolmas lasku
function checkThird() {
    let rightAnswer = (busMinutes * 2) + (walkingMinutes * 2);

    console.log(rightAnswer);

    if (answer3.value == rightAnswer) {
        result3.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(3);
        progress3.innerHTML = progressBar;
        rightAnswerCounter++;
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
    toggleAnswer(3, true);

    // Lisätään progressbarin tilanne tehtävä 4:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress4.innerHTML = progressBar + nextBar(4);

    // laitetaan next-nappi näkyviin 
    toggleVisibility("next3", "inline-block");

    // Palautetaan progressbar
    return progressBar;
}

// Neljäs lasku
function checkFourth() {
    let rightAnswer = teemuCoins - hennaCoins;

    console.log(rightAnswer);

    if (answer4.value == rightAnswer) {
        result4.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(4);
        progress4.innerHTML = progressBar;
        rightAnswerCounter++;
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
    toggleAnswer(4, true);

    // Lisätään progressbarin tilanne tehtävä 5:sen progressbariin ja sininen palkki kertomaan monesko tehtävä on menossa
    progress5.innerHTML = progressBar + nextBar(5);

    // next-nappi näkyviin 
    toggleVisibility("next4", "inline-block");

    // Palautetaan progressbar
    return progressBar;
}

// Viides lasku
function checkFifth() {
    let rightAnswer = snailMinutes * 3;

    console.log(rightAnswer);

    if (answer5.value == rightAnswer) {
        result5.innerHTML = right
        // Tallennetaan ja lisätään progressbariin vihreä palkki oikeasta vastauksesta
        progressBar += progressRight(5);
        progress5.innerHTML = progressBar;
        rightAnswerCounter++;
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

    // next-nappi näkyviin 
    toggleVisibility("next5", "inline-block");

    // Suljetaan vastausinput ja -nappi
    toggleAnswer(5, true);

    // Lisätään progressbarin tilanne lopulliseen progressbariin
    progressFinal.innerHTML = progressBar;
 
    // näytetään kuinka monta vastausta on saatu oikein ja palaute
    if (rightAnswerCounter == 0) {
        feedback.innerHTML = zeroRight;
        return;
    } else if (rightAnswerCounter == 1) {
        feedback.innerHTML = oneRight;
        return;
    } else if (rightAnswerCounter == 2) {
        feedback.innerHTML = twoRight;
        return;
    } else if (rightAnswerCounter == 3) {
        feedback.innerHTML = threeRight;
        return;
    } else if (rightAnswerCounter == 4) {
        feedback.innerHTML = fourRight;
        return;
    } else if (rightAnswerCounter == 5) {
        feedback.innerHTML = fiveRight;
        return;
    } 

    // Palautetaan progressbar
    return progressBar;
}

function clearAll() {
    /*toggleAnswer(1, false);
    toggleAnswer(2, false);
    toggleAnswer(3, false);
    toggleAnswer(4, false);
    toggleAnswer(5, false);

    progress1.innerHTML = '<div class="progress-bar bg-info" id="progressbar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">1/5</div>';
    progress2.innerHTML = "";
    progress3.innerHTML = "";
    progress4.innerHTML = "";
    progress5.innerHTML = "";
    progressFinal.innerHTML = "";

    answer1.value = "";
    answer2.value = "";
    answer3.value = "";
    answer4.value = "";
    answer5.value = "";

    result1.innerHTML = "";
    result2.innerHTML = "";
    result3.innerHTML = "";
    result4.innerHTML = "";
    result5.innerHTML = "";

    progressBar = "";
    feedback.innerHTML = "";
    rightAnswerCounter = "";*/
    location.reload();
}



