var player1= Math.floor((Math.random()*6)+1)
var player2= Math.floor((Math.random()*6)+1)

// Image Change

var player1img= ("images/dice" + player1+ ".png")
var player2img= ("images/dice" + player2+ ".png")
document.querySelector(".img1").setAttribute("src", player1img);
document.querySelector(".img2").setAttribute("src", player2img);

// Word change
 
if (player1>player2){
  document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!";
}
else if (player2>player1){
  document.querySelector("h1").innerHTML= " Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML= "🚩 DRAW🚩";
}


