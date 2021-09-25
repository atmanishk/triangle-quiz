const inputs = document.querySelectorAll('.angle-input')
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputE1 = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function calculateHandler() {
    var angle1 = Number(inputs[0].value);
    var angle2 = Number(inputs[1].value);
    var angle3 = Number(inputs[2].value);

    isTriangle(angle1, angle2, angle3);
}

function isTriangle(angle1, angle2, angle3) {
    if (angle1 && angle2 && angle3) {
        if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
            if (angle1 < 179 && angle2 < 179 && angle3 < 179) {
                const sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);
                if (sumOfAngles === 180) {
                    outputE1.innerText = "Yay, The angles form a triangle";
                } else {
                    outputE1.innerText = "Noooo! These angles don't form a triangle";
                }
            } else {
                outputE1.innerText = "Angle must be less than 179 degrees";
            }
        } else {
            outputE1.innerText = "Angle of a triangle must be greater than zero degrees";
        }
    } else {
        outputE1.innerText = "Please enter all the values";
    }
}

isTriangleBtn.addEventListener("click", calculateHandler)