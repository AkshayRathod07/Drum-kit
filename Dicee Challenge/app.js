// console.log("hii");
// 1 dice code
let noGenerator1 = Math.floor(Math.random() * 6) + 1;

console.log(noGenerator1);

let randomImg1 = "images/dice" + noGenerator1 + ".png";
// console.log(randomImg);

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg1);

// 2 dice code

let noGenerator2 = Math.floor(Math.random() * 6) + 1;

console.log(noGenerator2);

let randomImg2 = "images/dice" + noGenerator2 + ".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2);

// let player1Won = document.querySelector("h1").innerHTML = "player 1 won!"
// let player2Won = document.querySelector("h1").innerHTML = "player 2 won!"
// let player2Won = document.querySelector("h1").innerHTML = "tied!"

if(noGenerator1 < noGenerator2){
    // console.log(" 2 no won");
     document.querySelector("h1").innerHTML = "player 2 won 👇"
    
}else if(noGenerator1 === noGenerator2){
    // console.log("tied");
     document.querySelector("h1").innerHTML = "tied!";
}
else{
    // console.log("1 won");
     document.querySelector("h1").innerHTML = "👇 player 1 won ";
}


// let leftDice = document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
// let rightDice = document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

// left




