const sides = document.querySelectorAll('.side-input')
const areaBtn = document.querySelector('#area-btn');
const outputE1 = document.querySelector('#output')

function calculateProductOfSides(a, b){
    const productofSides = a*b;
    return productofSides;
}

function calculateArea(){
    const productofSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value));
    const area = parseFloat(productofSides/2);
    outputE1.innerText = "Area of circle is : " + area;
}

areaBtn.addEventListener("click", calculateArea);