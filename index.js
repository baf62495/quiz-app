// render quiz main screen (html)
let questionNumber = 0;
let userScore = 0;


function generateQuestionHtml() {
	// starts on display: none
	// generate html based on question objects

	if (questionNumber < STORE.length) {
		return `<div class="question">
					<h2>${STORE[questionNumber].question}</h2>
					<form>
						<fieldset>
							<label class="answer-option js-answer-option">
								<input type="radio" name="answer" value="${STORE[questionNumber].answerChoices[0]}" required>
								<span>${STORE[questionNumber].answerChoices[0]}</span>
							</label>
							<label class="answer-option js-answer-option">
								<input type="radio" name="answer" value="${STORE[questionNumber].answerChoices[1]}" required>
								<span>${STORE[questionNumber].answerChoices[1]}</span>
							</label>
							<label class="answer-option js-answer-option">
								<input type="radio" name="answer" value="${STORE[questionNumber].answerChoices[2]}" required>
								<span>${STORE[questionNumber].answerChoices[2]}</span>
							</label>
							<label class="answer-option js-answer-option">
								<input type="radio" name="answer" value="${STORE[questionNumber].answerChoices[3]}" required>
								<span>${STORE[questionNumber].answerChoices[3]}</span>
							</label>
							<button type="submit" class="submit-button js-submit-button">Submit</button> 
						</fieldset>
					</form>
				</div>`
	} else {
		renderResults();
		restartQuiz();
	}

	console.log(`generateQuestionHtml ran`);
}

function generateQuizInfoHtml() {
	
}

function incrementQuestionNumber() {
	// increment question number
	// take question number and add 1 to index (question 1 is 1, not 0)
	console.log(`incrementQuestionNumber ran`);
}

function incrementUserScore() {
	// increment userScore
	userScore++;
	console.log(`incrementUserScore ran`);
}

function startQuiz() {
	// user starts quiz on button click
	// on main screen button click =>
		// remove main screen html
		// show question form html
		// render question number(1)

	$('.js-quiz-start').on('click', '.js-start-button', function(event) {

		$('.js-quiz-start').remove();
		$('.question-container').css('display', 'flex');
		$('.js-question-number').text(1);

	});

	console.log(`startQuiz ran`);
}

function renderQuestion() {
	// render (generateQuestionHtml)

	$('.js-question-form').html(generateQuestionHtml());

	console.log(`renderQuestion ran`);
}

function userSubmitAnswer() {
	// user submits answer
		// when user submits answer =>
			// check answer
	$('.js-question-form').on('submit', function(event) {

		let selectedAnswer = $('input:checked').val();
		let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

		event.preventDefault();

		if (selectedAnswer === correctAnswer ) {
			ifAnswerIsCorrect();
		} else {
			ifAnswerIsWrong();
		}

	});

	// event.preventDefault();

	console.log(`userSubmitAnswer ran`);
}

function ifAnswerIsCorrect() {
	// if answer is correct =>
		// increment score by 1
		// render correct feedback html

	renderCorrectAnswerHtml();

	updateScore();

	console.log(`ifAnswerIsCorrect ran`);
}

function ifAnswerIsWrong() {
	// if answer is wrong =>
		// render wrong feedback html

	renderWrongAnswerHtml();

	console.log(`ifAnswerIsWrong ran`);
}

function renderCorrectAnswerHtml() {
	// generate correct answer html

	$('.question-form').html(`<div class="feedback feedback-correct">
										<h1>Correct!</h1>
										<h2>${STORE[questionNumber].answerStatement}</h2>
										<button type="submit" class="button js-next-question">Next Question</button>
									</div>
									`);

	console.log(`renderCorrectAnswerHtml ran`);
}

function renderWrongAnswerHtml() {
	// generate wrong answer html

	let selectedAnswer = $('input:checked').val();

	$('.question-form').html(`<div class="feedback feedback-wrong">
										<h1>Incorrect!</h1>
										<h2>${STORE[questionNumber].answerStatement}</h2>
										<p class="user-answer">You answered: ${selectedAnswer}</p>
										<button type="submit" class="button js-next-question">Next Question</button>
									</div>
									`);

	console.log(`renderWrongAnswerHtml ran`);
}

function updateScore() {
	// increment score =>
		// change html to show current user score

	incrementUserScore();

	$('.js-current-score').text(userScore);

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

function restartQuiz() {
	// reload page on button click
}


function createQuiz() {
  startQuiz();
  renderQuestion();
  userSubmitAnswer();
  renderNextQuestion();
}

$(createQuiz);