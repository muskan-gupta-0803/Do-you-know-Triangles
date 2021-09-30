const quizForm=document.querySelector('.quiz-form')
const submitAnswerButton=document.querySelector('#submit-answer-btn')
const outputEl=document.querySelector('#output')

const correctAnswers=["45 degree","right angle"]

function calcScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;

    }

    outputEl.innerText="your score is " + score;
}

submitAnswerButton.addEventListener('click',calcScore)