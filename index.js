let indexOfDrum = document.querySelectorAll(".drum").length;

for (let i = 0; i < indexOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      animationButton(buttonInnerHTML)
    
  });
}
// detecting keyboard button
document.addEventListener('keypress',function(e){
  makeSound(e.key);
  // console.log(e);
  animationButton(e.key)
})

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio( "./sounds/snare.mp3");
      tom2.play();
      break;
    case "s":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "d":
      var crash = new Audio("./sounds/tom-2.mp3");
      crash.play();
      break;
    case "j":
      var kickBass = new Audio( "./sounds/tom-3.mp3");
      kickBass.play();
      break;
    case "k":
      var snare = new Audio("./sounds/tom-1.mp3" );
      snare.play();
      break;
    case "l":
      var tom2 = new Audio("./sounds/crash.mp3");
      tom2.play();
      break;
    default:
      console.log(key);
  }
}

function animationButton(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');


  setTimeout(function(){
  activeButton.classList.remove('pressed');

  },100)

}




// var audio = new Audio('./sounds/tom-1.mp3')
// audio.play();

// console.log(this.style.color= 'white');


