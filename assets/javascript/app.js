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

$(document).on("click", ".answerChoices", function(){

	var clickChoice = $(this).text(); 

	console.log(clickChoice); 

	if (clickChoice === correctAnswers[count]) {

		reset(); 

		count++; 

		displayTrivia();


	} else { 

		$("#answer1").empty();

		$("#correctAnswer").append("<h3>Incorrect!</h3>");

		$("#correctAnswer").append("The correct answer is "+correctAnswers[count]+"!"); 

		setTimeout (function(){$("#correctAnswer").empty()}, 3000); 

		reset (); 

		count ++;

		setTimeout (displayTrivia, 3000);

		

	}


}); 


// Timer


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

	function stop () {

		clearInterval(intervalId); 
	}


	// Reset Function 

	function reset () {

		stop (); 
	 
		 number = 16;

		 $("#answer1").empty(); 


	}




