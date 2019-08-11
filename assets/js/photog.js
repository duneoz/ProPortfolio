
//declare a variable that holds the current opacity level, declare variable for up or down
var variable1 = "up";
var variable2 = 0;

// window.addEventListener('wheel', function () {

//     //if variable1 is up and variable 2 is less than 1, add .1, else change variable1 to down
//     if (variable1 === "up" && variable2 < 100) {
//         variable2 = variable2 + 5;
//         console.log(variable2 / 100);
//         document.getElementById("pic-special").style.opacity = variable2 / 100;
//     } else {
//         variable1 = "down";
//     }

//     //if variable1 is down and variable 2 is greater than 0, subtract .1, else change variable to up
//     if (variable1 === "down" && variable2 > 0) {
//         variable2 = variable2 - 5;
//         console.log(variable2 / 100)
//         document.getElementById("pic-special").style.opacity = variable2 / 100;
//     } else {
//         variable1 = "up"
//     }
// });

// var divArray = ['right-top', 'right-middle', 'right-bottom']

var elementID = "";
var fadeThis1 = "";
var fadeThis2 = "";
var allowFade = true;

document.getElementById('right-top').onmouseover = function () { elementID = 'img-rt'; fadeThis1 = 'img-rm'; fadeThis2 = 'img-rb'; emphasizeImg(); };
document.getElementById('right-top').onmouseout = function () { deemphasizeImg() };

document.getElementById('right-middle').onmouseover = function () { elementID = 'img-rm'; fadeThis1 = 'img-rt'; fadeThis2 = 'img-rb'; emphasizeImg(); };
document.getElementById('right-middle').onmouseout = function () { deemphasizeImg() };

document.getElementById('right-bottom').onmouseover = function () { elementID = 'img-rb'; fadeThis1 = 'img-rt'; fadeThis2 = 'img-rm'; emphasizeImg(); };
document.getElementById('right-bottom').onmouseout = function () { deemphasizeImg() };

function emphasizeImg() {

    if (elementID = 'img-rt') {
        console.log("Element ID: ", elementID);
        console.log("fadeThis1: ", fadeThis1);
        console.log("fadeThis2: ", fadeThis2);
        document.getElementById(elementID).style.paddingBottom = "50%";
    }
}

function deemphasizeImg() {
    if (elementID = 'img-rt') {
        document.getElementById(elementID).style.padding = "0%";
    }
}
// function emphasizeImg() {

//     if (allowFade == true) {

//         allowFade = false;

//         console.log("recognized hover");
//         //find the img height
//         // var h = 0;

//         // h = document.getElementsByTagName('img').height;
//         // console.log(h);
//         console.log("Element ID: ", elementID);

//         if (elementID === 'img-rt') {
//             //change the div height
//             document.getElementById(elementID).style.paddingBottom = "50%";
//         } else if (elementID === 'img-rm') {
//             document.getElementById(elementID).style.paddingTop = "25%";
//             document.getElementById(elementID).style.paddingBottom = "25%";
//         } else if (elementID === 'img-rb') {
//             document.getElementById(elementID).style.paddingTop = "50%";
//             // document.getElementById('right-bottom').style.position = "relative";
            
//         }

//         //hide the other divs

//         // document.getElementById(fadeThis1).style.opacity = "0";
//         // document.getElementById(fadeThis1).style.height = "0px";
//         // document.getElementById(fadeThis2).style.opacity = "0";
//         // document.getElementById(fadeThis2).style.height = "0px";

//     }

// };

// function deemphasizeImg() {
//     document.getElementById(elementID).style.paddingBottom = "0%";
//     document.getElementById(elementID).style.paddingTop = "0%";
//     document.getElementById(fadeThis2).style.height = "100%";
//     document.getElementById(fadeThis1).style.height = "100%";
//     // document.getElementById(fadeThis1).style.opacity = "1";
//     // document.getElementById(fadeThis2).style.opacity = "1";
//     setTimeout(function () { document.getElementById(fadeThis1).style.opacity = "1"; }, 600);
//     setTimeout(function () { document.getElementById(fadeThis2).style.opacity = "1"; }, 600);
//     setTimeout(function () { document.getElementById(elementID).style.opacity = "1"; }, 600);
//     setTimeout(function () { allowFade = true; }, 600);
// };

// create a wrap right div

// manipulate DOM to 