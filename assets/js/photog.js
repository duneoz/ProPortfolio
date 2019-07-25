
//declare a variable that holds the current opacity level, declare variable for up or down
var variable1 = "up";
var variable2 = 0;

window.addEventListener('wheel', function () {

    // var x = document.getElementById("pic-plain");
    // var z = document.getElementById("pic-special");
    // if (x.style.display === "none" && z.style.display === "block") {
    //     x.style.display = "block";
    //     z.style.display = "none";
    //     console.log("condition is true");
    // } else {
    //     x.style.display = "none";
    //     z.style.display = "block";
    //     console.log("condition is false");
    // }

    //if variable1 is up and variable 2 is less than 1, add .1, else change variable1 to down
    if (variable1 === "up" && variable2 < 100) {
        variable2 = variable2 + 2;
        console.log(variable2/100);
        document.getElementById("pic-special").style.opacity = variable2/100;
    } else {
        variable1 = "down";
    }

    //if variable1 is down and variable 2 is greater than 0, subtract .1, else change variable to up
    if (variable1 === "down" && variable2 > 0) {
        variable2 = variable2 - 2;
        console.log(variable2/100)
        document.getElementById("pic-special").style.opacity = variable2/100;
    } else {
        variable1 = "up"
    }
});

