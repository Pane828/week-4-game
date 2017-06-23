//4 random number generators, one for each crystal
//1 random number generator for the number to match
//the NumGuess field needs to display the 1 random number generated number
//3 fields that keeps track of score.
//Wins field to track wins; Losses field to track losses
//Guess accumulator field sums the crystal guesses

var crystalRandom1 = "";
var crystalRandom2 = "";
var crystalRandom3 = "";
var crystalRandom4 = "";
var answers = parseFloat(1);
var crystalSum = parseFloat(0);
var wins = parseFloat(0);
var losses = parseFloat(0);

$( document ).ready(function() {
    gameOn();
});

function gameOn(){
	clicked();
	conditions();
	answers = (Math.floor(Math.random() * 111) + 19);
	crystalRandom1 = Math.floor(Math.random() * 12) + 1;
	crystalRandom2 = Math.floor(Math.random() * 12) + 1;
	crystalRandom3 = Math.floor(Math.random() * 12) + 1;
	crystalRandom4 = Math.floor(Math.random() * 12) + 1;
	$("#numGuess").html(answers);
}

function clicked() {
$("#crystal1").on("click", function() {
	crystalSum = parseFloat(crystalSum) + parseFloat(crystalRandom1);
	$("#scorecount").html(crystalSum);
	console.log(crystalRandom1);
	console.log(crystalSum);
	conditions();
});

$("#crystal2").on("click", function(){
	crystalSum = parseFloat(crystalSum) + parseFloat(crystalRandom2);
	$("#scorecount").html(crystalSum);
	console.log(crystalRandom2);
	console.log(crystalSum);
	conditions();
});

$("#crystal3").on("click", function() {
	crystalSum = parseFloat(crystalSum) + parseFloat(crystalRandom3);
	$("#scorecount").html(crystalSum);
	console.log(crystalRandom3);
	console.log(crystalSum);
	conditions();
});

$("#crystal4").on("click", function() {
	crystalSum = parseFloat(crystalSum) + parseFloat(crystalRandom4);
	$("#scorecount").html(crystalSum);
	console.log(crystalRandom4);
	console.log(crystalSum);
	conditions();
});
	
};

function conditions(){

if (crystalSum == answers){
	wins++;
	alert("Your score is " + crystalSum + " you win");
	$("#win-count").html(wins);
	crystalSum = parseFloat(0);
};
 if (crystalSum > answers){
 	losses++;
 	alert("Your score is " + crystalSum + " you lose");
 	$("#lose-count").html(losses);
 	crystalSum = parseFloat(0);
 };

 if (crystalSum == 0){
 	$("#scorecount").html(crystalSum);
 }
};



