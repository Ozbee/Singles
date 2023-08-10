for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var  innerText=this.innerText;
    sound(innerText);
    btnanimation(innerText);
  } );
}


document.addEventListener("keydown",function(event){
  var key=event.key;
   sound(key);
   btnanimation(key);
});

function sound(i) {
  var audio;
  //document.getElememtByClassName;
  switch (i) {
    case "w":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "a":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "s":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "d":
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "j":
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "k":
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "l":
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    default:
      console.log(i);

  }
}
function btnanimation(i){
  var selected="."+i;
  document.querySelector(selected).classList.toggle("pressed");
  setTimeout(function(){
    document.querySelector(selected).classList.toggle("pressed");
  },150);
}
