// Trivia questions and answers: 

var questions = ["Who is the lead singer for the American rock band Pearl Jam?", "What was the title of Kayne West's debut album release in 2004?", "'Hallelujah' is a song written by which Canadian recording artist?"]; 

var answers = [["Eddie Vedder", "Mike McCready", "Stone Gossard", "Jeff Ament"], ["Late Registration", "College Dropout", "Graduation", "Late Orchestration"], ["Neil Young", "Justin Beiber", "Joni Mitchell", "Leonard Cohen"]]; 

var correctAnswers = ["Eddie Vedder", "College Dropout", "Leonard Cohen"]; 

// Display question and corresponding answers. 

var showQuestion;

var count = 0; 




// Click on "Start" to begin trivia questions. 
$ ("#start").click(displayTrivia); 

// Function to display various questions and answers. 
function displayTrivia () {

	$("#question").html("<p>" + questions[count] + "</p>");

	for (var i=0; i< answers[count].length; i++) {
		$("#answer1").append("<p class='answerChoices'>"+ answers[count][i] + "</p>"); 
	}; 

	run();


} 

$(".answerChoices").on("click", function(){

	


}); 




// Increment to next questions and answers. 

// function next () {

// 	count++;

// 	setTimeout (displayTrivia, 1000); 

// }

// function startTrivia () {

// 	showQuestion = setInterval (next, 16000); 

// }

// Timers and intervals

var number = 16; 

var intervalId;

function run () {
	intervalId = setInterval(decrement, 1000); 
}

// Function to track how much time user has left to respond. 

function decrement () {
	number--; 
	$("#timer").html("<h2>" + number + "</h2>"); 
}



