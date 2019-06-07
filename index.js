// render quiz main screen (html)
let questionNumber = 0;
let userScore = 0;

function generateQuestionHtml() {
	// starts on display: none
	// generate html based on question objects
}

function startQuiz() {
	// user starts quiz on button click
	// on main screen button click =>
		// remove main screen html
		// show question form html
		// render question number(1)
}

function renderQuestion() {
	// render (generateQuestionHtml)
}

function userSubmitAnswer() {
	// user submits answer
		// when user submits answer =>
			// check answer
}

function ifAnswerIsCorrect() {
	// if correct =>
		// increment score by 1
		// render correct feedback html
		// render button(next)
		// render fun fact in html
}

function ifAnswerIsWrong() {
	// if wrong =>
		// render wrong feedback html
		// add user choice in html
		// render button(next)
		// render fun fact in html
}

function renderNextQuestion() {
	// generate next question
		// on button(next) click =>
			// render next question html
			// increment question # by 1
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
}


function createQuiz() {
  startQuiz();
  renderQuestion();
  userSubmitAnswer();
  renderNextQuestion();
}

$(createQuiz);