// Trivia questions and answers: 

var questions = ["Who is the lead singer for the American rock band Pearl Jam?", "What was the title of Kayne West's debut album release in 2004?", "'Hallelujah' is a song written by which Canadian recording artist?", "What was the highest selling album of the 1980s in the United States?", "Singer-songwriter George Michael, famous for such hits as 'Faith' and 'Father Figure', passed away in what year?"]; 

var answers = [["Eddie Vedder", "Mike McCready", "Stone Gossard", "Jeff Ament"], ["Late Registration", "College Dropout", "Graduation", "Late Orchestration"], ["Neil Young", "Justin Beiber", "Joni Mitchell", "Leonard Cohen"], ["The Joshua Tree by U2", "Thriller by Michael Jackson", "Synchronicity by The Police", "Appetite for Destruction by Guns N Roses"], ["2013", "2014", "2015", "2016"]]; 

var correctAnswers = ["Eddie Vedder", "College Dropout", "Leonard Cohen", "Thriller by Michael Jackson", "2016"]; 

// Display question and corresponding answers. 

var showQuestion;

var count = 0; 

var correct = 0;

var incorrect = 0; 

var timeUp = 0; 




// Click on "Start" to begin trivia questions. 
$ ("#start").click(displayTrivia); 

// Function to display various questions and answers. 
function displayTrivia () {

	$("#score").empty(); 

	// Hide "start" 
	$ ("#start").hide(); 

	// if the count is less than 3 then display questions and answers, if count is greater than 3 then run "end" function 
	if (count < 5) {
		$("#question").html("<p>" + questions[count] + "</p>");
		for (var i=0; i< answers[count].length; i++) {
		console.log(answers[count].length);
		$("#answer1").append("<p class='answerChoices'>"+ answers[count][i] + "</p>"); 

	}; 

	run();

	} else {
		end ();

		reload ();  
	}

} 

// Evaluate user choices. 
$(document).on("click", ".answerChoices", function(){

	var clickChoice = $(this).text(); 

	console.log(clickChoice); 

	// If choice is correct...
	if (clickChoice === correctAnswers[count]) {
		correctAns (); 
	} 


	else { 
	// If choice is incorrect. 
		incorrectAns (); 
	}


}); 




// Timer
var number = 15; 

var intervalId;

function run () {
	intervalId = setInterval(decrement, 1000); 

}

// Function to track how much time user has left to respond. 
function decrement () {
	number--; 
	$("#timer").html("<h2>" + number + "</h2>"); 
	if (number === 0 ) {
		timeOut ();
	}
}

function stop () {

	clearInterval(intervalId); 
}


// Reset Function - when next question needs to be displayed. 

function reset () {
	stop (); 
	 number = 15;
	 $("#answer1").empty(); 
}


// Correct Answer Function

function correctAns () {
	correct++;
	$("#answer1").empty();
	$("#correctAnswer").append("<h3>Great job!</h3>");
	$("#correctAnswer").append("The correct answer is "+correctAnswers[count]+"!"); 
	setTimeout (function(){$("#correctAnswer").empty()}, 3000);  
	reset(); 
	count++; 
	setTimeout (displayTrivia, 3000);
}


// Incorrect Answer Function

function incorrectAns () {
	incorrect++; 
	$("#answer1").empty();
	$("#correctAnswer").append("<h3>Incorrect!</h3>");
	$("#correctAnswer").append("The correct answer is "+correctAnswers[count]+"!"); 
	setTimeout (function(){$("#correctAnswer").empty()}, 3000); 
	reset (); 
	count ++;
	setTimeout (displayTrivia, 3000);
	
}



// Time Out Condition

function timeOut () {

	timeUp++ 
	stop (); 
	$("#answer1").empty();
	$("#correctAnswer").append("<h3>Time's Up!</h3>");			
	$("#correctAnswer").append("The correct answer is "+correctAnswers[count]+"!");
	setTimeout (function(){$("#correctAnswer").empty()}, 3000); 
	reset (); 
	count ++;
	setTimeout (displayTrivia, 3000);

}

// Show user how many questions they answered correctly, incorrectly, and timed out on. 


function end () {
	// Empty divs. 
	$("#question").empty(); 
	$("#answer1").empty();
	$("#correctAnswer").empty(); 

	// Display score. 
	$("#score").append("<p>Correct: " + correct+ "</p>"); 
	$("#score").append("<p>Incorrect: " + incorrect+ "</p>");
	$("#score").append("<p>Timed Out: " + timeUp+ "</p>");
	$("#start").html ("RESTART?")
	$("#start").show(); 

}


// Function to reload game. 
function reload () {

	count = 0; 
	correct = 0;
	incorrect = 0; 
	timeUp = 0; 


}










