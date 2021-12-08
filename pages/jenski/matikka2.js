function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let seconds = document.getElementById("seconds").innerHTML = getRndInteger(1, 500);
document.getElementById("seconds").innerHTML = seconds;

function f1() {
    document.getElementById("p").innerHTML = getRndInteger(0,10);

    
}

function f2() {

    if (document.getElementById("answer").value == Math.round(seconds / 60)) {
    document.getElementById("answer1").innerHTML = document.getElementById("answer").value; 
    return;
    } else {
        document.getElementById("answer1").innerHTML = "Wrong answer";

    }
}

