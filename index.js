// render quiz main screen (html)
let questionNumber = 0;
let userScore = 0;

function generateQuestionHtml() {
	// starts on display: none
	// generate html based on question objects
	console.log(`generateQuestionHtml ran`);
}

function incrementQuestionNumber() {
	// increment question number
	// take question number and add 1 to index (question 1 is 1, not 0)
	console.log(`incrementQuestionNumber ran`);
}

function incrementUserScore() {
	// increment userScore
	console.log(`incrementUserScore ran`);
}

function startQuiz() {
	// user starts quiz on button click
	// on main screen button click =>
		// remove main screen html
		// show question form html
		// render question number(1)
	console.log(`startQuiz ran`);
}

function renderQuestion() {
	// render (generateQuestionHtml)
	console.log(`renderQuestion ran`);
}

function userSubmitAnswer() {
	// user submits answer
		// when user submits answer =>
			// check answer
	console.log(`userSubmitAnswer ran`);
}

function ifAnswerIsCorrect() {
	// if answer is correct =>
		// increment score by 1
		// render correct feedback html
		// render button(next)
		// render fun fact in html
	console.log(`ifAnswerIsCorrect ran`);
}

function ifAnswerIsWrong() {
	// if answer is wrong =>
		// render wrong feedback html
		// add user choice in html
		// render button(next)
		// render fun fact in html
	console.log(`ifAnswerIsWrong ran`);
}

function updateScore() {
	// increment score =>
		// change html to show current score
	console.log(`updateScore ran`);
}

function renderNextQuestion() {
	// generate next question
		// on button(next) click =>
			// render next question html
			// increment question # by 1
	console.log(`renderNextQuestion ran`);
}

// repeat until last question
	// each question =>
		// increment question #

function renderResults() {
	// check user final score
		// on final question submit =>
			// if pass
				// render pass feedback html
				// add score to feedback html
			// if fail
				// render fail feedback html
				// add score to feedback html
	console.log(`renderResults ran`);
}


function createQuiz() {
  startQuiz();
  renderQuestion();
  userSubmitAnswer();
  renderNextQuestion();
  console.log(`createQuiz ran`);
}

$(createQuiz);