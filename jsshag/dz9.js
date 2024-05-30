let correctAnswers = 0;
const answers = {};

function showNextQuestion(questionNumber, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            correctAnswers++;
        }

        document.getElementById(`question${questionNumber}`).style.display = 'none';
        if (questionNumber < 5) {
            document.getElementById(`question${questionNumber + 1}`).style.display = 'block';
        } else {
            document.getElementById('result').style.display = 'block';
            document.getElementById('correctAnswers').textContent = correctAnswers;
        }
    }
}