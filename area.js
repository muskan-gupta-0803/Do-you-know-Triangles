const height=document.querySelector("#height");
const base=document.querySelector("#base");
const calcButton=document.querySelector("#calculate");
const outputA=document.querySelector("#output");

function calcArea(){
    h=height.value;
    b=base.value;
    area=(h*b)/2;
    outputA.innerText="AREA OF TRIANGLE IS = " + area.toFixed(2);
}


calcButton.addEventListener("click", calcArea);