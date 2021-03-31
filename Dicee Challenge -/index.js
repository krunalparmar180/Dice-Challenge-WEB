var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var diceimg = "images/dice" + randomnumber1 + ".png";

var img1 = document.querySelectorAll("img")[0]

img1.setAttribute("src", diceimg);


var randomnumber2 = Math.floor(Math.random() * 6 + 1);

var diceimg = "images/dice" + randomnumber2 + ".png";

var img2 = document.querySelectorAll("img")[1]

img2.setAttribute("src", diceimg);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins";
}

else if (randomnumber2>randomnumber1) {
  document.querySelector("h1").innerHTML="Player2 Wins"
}

else{
  document.querySelector("h1").innerHTML="Draw!!"
}
