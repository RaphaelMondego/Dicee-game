//DECLARANDO AS VARIÁVEIS
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;  
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;  
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);


//MUDANÇA DOS DADOS
if(randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
}

if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
}

if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
}

if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
}

if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
}

if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
}

if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
}

if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
}

if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
}

if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
}

if(randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
}


if(randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
}



//MUDANÇA DO TÍTULO PARA SABER QUEM GANHOU OU DEU EMPATE

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
} 

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
} 

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
} 

