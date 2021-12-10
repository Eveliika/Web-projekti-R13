function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let minutes = getRndInteger(1, 5);
document.getElementById("minutes").innerHTML = minutes;

let candies = document.getElementById("candyAmount").innerHTML


let rightAnswerTxt = "oikea vastaus!"
let wrongAnswerTxt = "väärä vastaus!"


// Ensimmäinen lasku
function first() {
    
    let rightAnswer = minutes * 60;
    if (document.getElementById("answerInput1").value == rightAnswer) {
        document.getElementById("answer1").innerHTML = "Vastasit " + rightAnswer + ". Se on " + rightAnswerTxt; 
    return;
    } else {
        document.getElementById("answer1").innerHTML = "Vastasit " + document.getElementById("answerInput1").value + ". Se on " + wrongAnswerTxt + " Oikea vastaus on " + rightAnswer + ".";
    }
}

