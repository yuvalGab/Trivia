
var rightAnswers = JSON.parse(trasportData.getItem('rightAnswers'));
var life = JSON.parse(trasportData.getItem('life'));

var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function() {
    window.location.href = "trivia-game.html"; 
});


document.getElementById('correct-answers').textContent = rightAnswers;

document.getElementById('worng-answers').textContent = 3 - life;

document.getElementById('total-rank').textContent = rightAnswers * 10; 