const input= document.querySelectorAll('.input-angle')
const isTriangleBtn=document.querySelector('#is-tri-btn')
const outputEl= document.querySelector('#output')

function sum(angle1,angle2,angle3){
    const sumOfAngles= angle1+angle2+angle3;
    return sumOfAngles;
}
function isTriangle(){
    const sumOfAngles=sum(Number(input[0].value),Number(input[1].value),Number(input[2].value))
    
    if(sumOfAngles === 180){
        outputEl.innerText="YES, IT'S A TRIANGLE!!" 
    }
    else{
        outputEl.innerText="NO, THE ANGLES DON'T FORM A TRIANGLE :("
    }
    
}

isTriangleBtn.addEventListener("click",isTriangle)