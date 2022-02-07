var randomNumber1 = Math.floor(Math.random()*6) + 1;

var image1 = "dice"+randomNumber1+".svg";
var imageSource1 = "images/"+image1;

document.querySelector("#dice-img1").setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var image2 = "dice"+randomNumber2+".svg";
var imageSource2 = "images/"+image2;

document.querySelector("#dice-img2").setAttribute("src", imageSource2);

if(randomNumber1 == randomNumber2)
{
    document.querySelector("h1").innerHTML = "It's a Draw! ⚪";
}
else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!";
    document.querySelector("#player1").style.color = "brown";
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!🚩";
    document.querySelector("#player2").style.color = "brown";
}