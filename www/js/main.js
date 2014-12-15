var currentMode;

var a;
var b;
var answer;

var correct = 0;
var incorrect = 0;

function showMenu() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('main').style.display = 'none'; 
}

function showMain(m) {
    mode = m;
    document.getElementById('main').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    getNextQuestion();
}

function getNextQuestion(){
    if (mode == 'addition') {
        a = Math.floor((Math.random() * 100) + 1);
        b = Math.floor((Math.random() * 100) + 1);
        question =  a + ' + ' + b + ' = ' ;
    }
    if (mode == 'subtraction') {
        a = Math.floor((Math.random() * 100) + 1);
        b = Math.floor((Math.random() * 100) + 1);
        if (a < b) {
            c = a;
            a = b;
            b = c;
            }
        question =  a + ' - ' + b + ' = ' ;
    }
    if (mode == 'multiplication') {
        a = Math.floor((Math.random() * 12) + 1);
        b = Math.floor((Math.random() * 12) + 1);
        question =  a + ' X ' + b + ' = ' ;
    }
    if (mode=='division') {
        b = Math.floor((Math.random() * 100) + 1);
        a = b * Math.floor((Math.random() * 100) + 1);
        question =  a + ' &divide ' + b + ' = ' ;
    }
    document.getElementById('question').innerHTML = question;
    document.getElementById('answer').innerHTML = '';
}    
    
function updateAnswer(value) {
    document.getElementById('answer').innerHTML += value;
}    

function clearAnswer() {
    document.getElementById('answer').innerHTML = '';
}
        
function checkAnswer() {
    answer = document.getElementById('answer').innerHTML;
    if (mode == 'addition'){
        result = a + b;
    }
    if (mode == 'subtraction'){
        result = a - b;
    }
    if (mode == 'multiplication'){
        result = a * b;
    }
    if (mode == 'division'){
        result = a / b;
    }
    
    if (result == answer) {
        showCorrect('addition');
    } 
    else {
        showInCorrect('addition');
    }
 }

function showCorrect(mode){
    document.getElementById('correct').style.display = 'block';
    myVar=setTimeout(function(){hideCorrect()},2000);
    getNextQuestion(mode);
    correct = correct + 1;
    updateScore();
}
            
function hideCorrect(){
    document.getElementById('correct').style.display='none';
    document.getElementById('main').style.display='block';
}

function showInCorrect(){
    document.getElementById('incorrect').style.display = 'block';
    myVar=setTimeout(function(){hideInCorrect()},2000);
    document.getElementById('answer').innerHTML='';
    incorrect = incorrect + 1;
    updateScore();
}

function hideInCorrect(){
    document.getElementById('incorrect').style.display='none';
    document.getElementById('main').style.display='block';
}

function updateScore(){
    document.getElementById('scoreMessage').innerHTML='Score Correct: ' + correct + '  Incorrect: ' + incorrect;   
}

function resetScore(){
    correct = 0;
    incorrect = 0;
    updateScore();
}

function showSettings(){
    document.getElementById('settings').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('maxAddition').value = localStorage.maxAdditionValue;
    document.getElementById('maxSubtraction').value = localStorage.maxSubtractionValue;
    document.getElementById('maxMultiplication').value = localStorage.maxMultiplicationValue;
    document.getElementById('maxDvision').value = localStorage.maxDivisionValue;
}

function saveSettings(){
    localStorage.maxAdditionValue = document.getElementById('maxAddition').value;
    localStorage.maxSubtractionValue = document.getElementById('maxSubtraction').value; 
    localStorage.maxMultiplicationValue = document.getElementById('maxMultiplication').value; 
    localStorage.maxDivisionValue = document.getElementById('maxDivision').value; 
    document.getElementById('settings').style.display = "none";
    document.getElementById('menu').style.display = "block";
}