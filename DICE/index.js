
var randomNumber1 = (Math.floor(Math.random()*6))+1; // adding 1 to use range 1..6

var randomNumber2 = (Math.floor(Math.random()*6))+1; // adding 1 to use range 1..6

var randomImage1 = "dice" + randomNumber1 + ".png"; //pick random image as per name

var randomImage2 = "dice" + randomNumber2 + ".png"; //pick random image as per name

var randomImageSource1="images/" + randomImage1;

var randomImageSource2="images/" + randomImage2;

// document.querySelector("img").getAttribute("src");

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


if (randomImageSource1 > randomImageSource2){
    document.querySelector("h1").innerText="Player 1 WINS";
}
else if (randomImageSource1 < randomImageSource2){
    document.querySelector("h1").innerText="Player 2 WINS";
}
else{
    document.querySelector("h1").innerText="DRAW";
}