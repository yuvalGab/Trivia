
setRandomQuestion();

var answer1 = document.getElementById('answer1');
answer1.addEventListener('click', function() {
    currentAnswer = document.getElementById('answer1-text').textContent;
    checkAnswer(currentAnswer);
});

var answer2 = document.getElementById('answer2');
answer2.addEventListener('click', function() {
    currentAnswer = document.getElementById('answer2-text').textContent;
    checkAnswer(currentAnswer);
});

var answer3 = document.getElementById('answer3');
answer3.addEventListener('click', function() {
    currentAnswer = document.getElementById('answer3-text').textContent;
    checkAnswer(currentAnswer);
});

var answer4 = document.getElementById('answer4');
answer4.addEventListener('click', function() {
    currentAnswer = document.getElementById('answer4-text').textContent;
    checkAnswer(currentAnswer);
});