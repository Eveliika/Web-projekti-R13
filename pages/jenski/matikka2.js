function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let minutes = document.getElementById("minutes").innerHTML = getRndInteger(1, 5);
document.getElementById("minutes").innerHTML = minutes;



let rightAnswer = "Oikea vastaus!"
let wrongAnswer = "Väärin meni!"


// Ensimmäinen lasku
function f1() {

    if (document.getElementById("answer").value == minutes * 60) {
    document.getElementById("answer1").innerHTML = document.getElementById("answer").value + " " + rightAnswer; 
    return;
    } else {
        document.getElementById("answer1").innerHTML = wrongAnswer;

    }
}

