const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#hypotenuse-btn')
const outputEl=document.querySelector('#output')

function calcSquareSum(a,b){
    const sumOfSquares= a*a +b*b;
    return sumOfSquares;
}
function calcHyp(){
    const sumOfSquares= calcSquareSum(Number(sides[0].value),Number(sides[1].value));

    const lengthOfHypotenuse=Math.sqrt(sumOfSquares);

    outputEl.innerText="The length of hypotenuse is = " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calcHyp)