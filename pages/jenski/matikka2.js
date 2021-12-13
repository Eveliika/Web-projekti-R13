function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let minutes = getRndInteger(1, 5);
document.getElementById("minutes").innerHTML = minutes;




let rightAnswerTxt = "oikea vastaus!"
let wrongAnswerTxt = "väärä vastaus!"


// Ensimmäinen lasku
function first() {
    let rightAnswer = minutes * 60;
    if (document.getElementById("minuteAnswer").value == rightAnswer) {
        document.getElementById("answer1").innerHTML = "Vastasit " + rightAnswer + ". Se on " + rightAnswerTxt; 
        document.getElementById("minuteAnswer").disabled = true;
    return;
    } else {
        document.getElementById("answer1").innerHTML = "Vastasit " + document.getElementById("minuteAnswer").value + ". Se on " + wrongAnswerTxt + " Oikea vastaus on " + rightAnswer + ".";
        document.getElementById("minuteAnswer").disabled = true;
    }
}


let candies = getRndInteger(4, 10) * 4;
document.getElementById("candyAmount").innerHTML = candies;

function second() {
    if (document.getElementById("candyAnswer").value == candies / 4) {
        document.getElementById("answer2").innerHTML = "Oikein!"
    } else {
        document.getElementById("answer2").innerHTML = "Väärin."
    }
}

// if candies % 4  else 
