
var trasportData = localStorage;

var rightAnswers = 0;

var life = 3;

var currentAnswer;

var randomQuestionNum;

var clock;

var setedQuestions = [];

var totalQuestions = 0;


function setRandomQuestion() {

    totalQuestions++;

    if (totalQuestions == 11 || life == 0){
	    window.location.href = "trivia-finish.html";
        trasportData.setItem('rightAnswers', JSON.stringify(rightAnswers));
        trasportData.setItem('life', JSON.stringify(life));
        return;
    }

    var passTest = -1;

    while (passTest < setedQuestions.length){

        passTest = 0;
    
        randomQuestionNum = Math.floor((Math.random() * 10));

        for (var i = 0; i < setedQuestions.length; i++){
            if (randomQuestionNum !== setedQuestions[i]){
                passTest++;
            }
        }

    }

    setedQuestions.push(randomQuestionNum);


    var setedAnswers = [0];

        var random = Math.random();

        var randomAnswer1;

        if (random <= 0.25){
            randomAnswer1 = 1;
        }
        else if (random > 0.25 && random <= 0.5){
            randomAnswer1 = 2;
        }
        else if (random > 0.5 && random <= 0.75){
            randomAnswer1 = 3;
        }
        else {
            randomAnswer1 = 4;
        }
        

    setedAnswers.push(randomAnswer1);

     passTest = 0;

    while (passTest < setedAnswers.length){

        passTest = 0;

        var random = Math.random();

        var randomAnswer2;

        if (random <= 0.25){
            randomAnswer2 = 1;
        }
        else if (random > 0.25 && random <= 0.5){
            randomAnswer2 = 2;
        }
        else if (random > 0.5 && random <= 0.75){
            randomAnswer2 = 3;
        }
        else {
            randomAnswer2 = 4;
        }
        
        for (var i = 0; i < setedAnswers.length; i++){
            if (randomAnswer2 !== setedAnswers[i]){
                passTest++;
            }
        }

    }


    setedAnswers.push(randomAnswer2);


    passTest = 0;

    while (passTest < setedAnswers.length){

         passTest = 0;

        var random = Math.random();

        var randomAnswer3;

        if (random <= 0.25){
            randomAnswer3 = 1;
        }
        else if (random > 0.25 && random <= 0.5){
            randomAnswer3 = 2;
        }
        else if (random > 0.5 && random <= 0.75){
            randomAnswer3 = 3;
        }
        else {
            randomAnswer3 = 4;
        }
        
        for (var i = 0; i < setedAnswers.length; i++){
            if (randomAnswer3 !== setedAnswers[i]){
                passTest++;
            }
        }

    }

    setedAnswers.push(randomAnswer3);


    passTest = 0;

    while (passTest < setedAnswers.length){

        passTest = 0;

        var random = Math.random();

        var randomAnswer4;

        if (random <= 0.25){
            randomAnswer4 = 1;
        }
        else if (random > 0.25 && random <= 0.5){
            randomAnswer4 = 2;
        }
        else if (random > 0.5 && random <= 0.75){
            randomAnswer4 = 3;
        }
        else {
            randomAnswer4 = 4;
        }
        
        for (var i = 0; i < setedAnswers.length; i++){
            if (randomAnswer4 !== setedAnswers[i]){
                passTest++;
            }
        }

    }

    setedAnswers.push(randomAnswer4);


    document.getElementById('question-text').textContent = questions[randomQuestionNum].question;

    var answer1 = document.getElementsByClassName('answer')[randomAnswer1-1].children[0];
    answer1.textContent = questions[randomQuestionNum].answer1;

    var answer2 = document.getElementsByClassName('answer')[randomAnswer2-1].children[0];
    answer2.textContent = questions[randomQuestionNum].answer2;

    var answer3 = document.getElementsByClassName('answer')[randomAnswer3-1].children[0];
    answer3.textContent = questions[randomQuestionNum].answer3;

    var answer4 = document.getElementsByClassName('answer')[randomAnswer4-1].children[0];
    answer4.textContent = questions[randomQuestionNum].answer4;


    var timer = 10;
    document.getElementById('timer').textContent = timer;

    clock = setInterval(function(){
        timer--;
        document.getElementById('timer').textContent = timer;

        if (timer < 0){
            clearInterval(clock);
            life--;
	        document.getElementById('life').textContent = life;
            setRandomQuestion();
        }

    },1000);


}


function checkAnswer(answer){
    if (answer == questions[randomQuestionNum].answer4){
        rightAnswer();
    }
    else{
        worngAnswer();
    }
}


function rightAnswer() {
    rightAnswers++;
    document.getElementById('rank').textContent = rightAnswers * 10;
    clearInterval(clock);
    setRandomQuestion();
}


function worngAnswer() {
    life--;
    document.getElementById('life').textContent = life;
    clearInterval(clock);
    setRandomQuestion();
}



