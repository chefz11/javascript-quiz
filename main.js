
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;


	if (question1 == "init") {
		correct++;
}
	if (question2 == "commit") {
		correct++;
}
	if (question3 == "create file") {
		correct++;
	}
	if (question4 == "$") {
		correct++;
	}
	if (question5 == "Detroit") {
		correct++;
}
if (question6 == "newline") {
	correct++;
}
if (question7 == "route") {
	correct++;
}
if (question8 == "CRUD") {
	correct++;
}
if (question9 == "true") {
	correct++;
}
if (question10 == "link") {
	correct++;
}

	var pictures = ["img/perfect.jpg", "img/prettygood.gif", "img/meh.jpeg", "img/weebey.gif", "img/lose.gif"];
	var messages = ["Perfect!", "Pretty.... pretty... pretty good....", "That's just okay", "You got exactly half right!", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct > 0 && correct < 5) {
		score = 2;
	}
	if (correct == 5) {
		score = 3;
	}
	if (correct > 5 && correct < 10) {
		score = 1;
	}
	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
