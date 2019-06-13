
let questionNumber = 0;
let userScore = 0;


function generateQuestionHtml() {

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
							<button type="submit" class="button submit-button js-submit-button">Submit</button> 
						</fieldset>
					</form>
				</div>`
	} else {
		$('.quiz-head').css('display', 'none');
		renderResults();
		restartQuiz();
	}

	console.log(`generateQuestionHtml ran`);
}

function addClassToSelected() {

	$('.js-question-form').on('click', 'input[type="radio"]', function () {
	    $('input[type="radio"]:not(:checked)').parent().removeClass("selected");
	    $('input[type="radio"]:checked').parent().addClass("selected");
	});

}

function incrementQuestionNumber() {

	questionNumber++;
	$('.js-question-number').text(questionNumber + 1);

}

function incrementUserScore() {

	userScore++;

}

function startQuiz() {

	$('.js-quiz-start').on('click', '.js-start-button', function(event) {
		$('.js-quiz-start').remove();
		$('.question-container').css('display', 'flex');
		$('.js-question-number').text(1);
	});

}

function renderQuestion() {

	$('.js-question-form').html(generateQuestionHtml());

}

function userSubmitAnswer() {

	$('form').on('submit', function(event) {

		event.preventDefault();

		let selectedAnswer = $('input:checked').val();
		let correctAnswer = STORE[questionNumber].correctAnswer;


		if (selectedAnswer === correctAnswer) {
			ifAnswerIsCorrect();
		} else {
			ifAnswerIsWrong();
		}

	});

}

function ifAnswerIsCorrect() {

	renderCorrectAnswerHtml();
	updateScore();

}

function ifAnswerIsWrong() {

	renderWrongAnswerHtml();

}

function renderCorrectAnswerHtml() {

	$('.question-form').html(`<div class="feedback feedback-correct">
									<h1>Correct!</h1>
									<h2>${STORE[questionNumber].answerStatement}</h2>
									<button type="button" class="button next-button js-next-button">Next</button>
									<p class="feedback-fact">${STORE[questionNumber].funFact}</p>
								</div>
								`);

}

function renderWrongAnswerHtml() {

	let selectedAnswer = $('input:checked').val();

	$('.question-form').html(`<div class="feedback feedback-wrong">
									<h1>Incorrect!</h1>
									<h2>${STORE[questionNumber].answerStatement}</h2>
									<p class="user-answer">You answered: ${selectedAnswer}</p>
									<button type="button" class="button next-button js-next-button">Next</button>
									<p class="feedback-fact">${STORE[questionNumber].funFact}</p>
								</div>
								`);

}

function updateScore() {

	incrementUserScore();
	$('.js-current-score').text(userScore);

}

function renderNextQuestion() {

	$('.js-question-form').on('click', '.js-next-button', function(event) {
		incrementQuestionNumber();
		renderQuestion();
		userSubmitAnswer();
	});

}

function renderResults() {

	if (userScore > 6) {
		$('.js-question-form').html(`<div class="results">
										<figure>
											<img src="assets/new-jersey-devils-logo.svg" alt="New Jersey Devils Logo" class="logo-lg">
										</figure>
										<h1>Great Job!</h1>
										<h2>You answered ${userScore} out of the ${STORE.length} questions correctly.</h2>
										<p>You're a true New Jersey Devils fan!</p>
										<button type="button" class="button restart-button js-restart-button">Restart Quiz</button>
									</div>`);
	} else {
		$('.js-question-form').html(`<div class="results">
										<figure>
											<img src="assets/new-jersey-devils-logo.svg" alt="New Jersey Devils Logo" class="logo-lg">
										</figure>
										<h1>Try Again!</h1>
										<h2>You answered ${userScore} out of the ${STORE.length} questions correctly.</h2>
										<p>Better luck next time.</p>
										<button type="button" class="button restart-button js-restart-button">Restart Quiz</button>
									</div>`);
	}

}

function restartQuiz() {

	$('.js-question-form').on('click', '.js-restart-button', function(event) {
		location.reload();
	});

}

function createQuiz() {
  startQuiz();
  renderQuestion();
  addClassToSelected();
  userSubmitAnswer();
  renderNextQuestion();
}

$(createQuiz);