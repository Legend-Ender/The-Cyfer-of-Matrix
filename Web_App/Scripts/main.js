'use strict';

let cloningSubject = document.createElement('button');
let cancel = document.getElementById('cancelButton');
let clear = document.getElementById('clearButton');
let ok = document.getElementById('okButton');
let start = document.getElementById('startButton');
let help = document.getElementById('helpButton');
let hide = document.getElementById('hideButton');
let name1a = document.getElementById('name');
let block = document.getElementById('block');
        block.addEventListener('click', clickedResult);
let consoleFeed = document.getElementById('halloText');
let userLog = document.getElementById('userLog');
let userOutput = 'Pressed ';
let mathSystemToDefineItsPosition = new Array(64);
let blockText = document.getElementById('blockText');
let num = -100;
let rowValue = -100;
let columnValue = -100;
let finalValue = -100;
let thePreviousActualMathPart = -100;
let thePreviousOtherMathPart = -100;
let randomNumber = -100;
let previousTargetButtonNum = -100;



ok.onclick = okFunction;
function okFunction() {

    if (name1a.value == '') {
    consoleFeed.innerText = 'Error404';
    window.close();
    window.open("https://www.youtube.com/@Technoblade");
    } else {
        consoleFeed.innerText = 'Welcome to the Cyfer of Matrix ' + name1a.value + '!';
    }
}

cancel.onclick = cancelFunction;
function cancelFunction() {
    consoleFeed.innerText = 'Hope to see you again!';
}

clear.onclick = clearFunction;
function clearFunction() {
    name1a.value = '';
    userOutput = 'Pressed ';
}

help.onclick = helpFunction;
function helpFunction() {
    consoleFeed.innerText = 'The aim is to find sequence of moves of a knight on the field such that the knight visits every square exactly once. You can only moves two squares vertically and one square horizontally, or two squares horizontally and one square vertically.';
}

hide.onclick = hideFunction;
function hideFunction() {
    consoleFeed.innerText = '';
}

start.onclick = startFunction;
window.onload = startFunction;
function startFunction() {
    clearButtons();
    generateGrid();
    randomNumber = Math.floor(64 * Math.random());
    console.log(randomNumber);
    let num = randomNumber;
    let targetButton = document.getElementById(' ' + num);
    targetButton.setAttribute('style', 'background-color: #008000;');
    mathSystemToDefineItsPosition[num] = 'filledIn';
    thePreviousActualMathPart = Math.floor(num/8);
    thePreviousOtherMathPart = num%8;
    previousTargetButtonNum = num;
}
function clearButtons() {
    for (let i = 0; i < 64; i++) {
        document.getElementById(' ' + i).remove(); 
    }  
}


function generateGrid() {
    for (let i = 0; i < 64; i++) {
        generateButtons(i);
    }
}

function generateButtons(num) {
    cloningSubject = document.createElement('button');
    cloningSubject.innerText = ' ';
    cloningSubject.setAttribute('id', ' ' + num);
    block.appendChild(cloningSubject);
    mathSystemToDefineItsPosition[num] = 'notFilledIn';
}


window.onload = generateGrid;


function clickedResult (event) {
    let targetButton = event.target;
    let num = targetButton.id.substring(1);
    let theActualMathPart = Math.floor(num/8);
    let theOtherMathPart = num%8;
    blockText.innerText = 'column ' + theOtherMathPart + ', ' + 'row ' + theActualMathPart;

    rowValue = thePreviousActualMathPart - theActualMathPart;
    columnValue = thePreviousOtherMathPart - theOtherMathPart;
    console.log('row ' + rowValue);
    console.log('column ' + columnValue);
    finalValue = rowValue * columnValue;
    console.log('final ' + finalValue);

      if ((finalValue == 2) || (finalValue == -2)) {
        if (mathSystemToDefineItsPosition[num] == 'notFilledIn') {
            targetButton.setAttribute('style', 'background-color: #0099ff');
            mathSystemToDefineItsPosition[num] = 'filledIn';
            thePreviousActualMathPart = theActualMathPart;
            thePreviousOtherMathPart = theOtherMathPart;
            let previousTargetButton = document.getElementById(' ' + previousTargetButtonNum);
            previousTargetButton.setAttribute('style', 'background-color: goldenrod');
            previousTargetButtonNum = num;
            console.log(previousTargetButton.id);
        } else {
            blockText.innerText = 'Invalid Move';
        }
    } else {
        blockText.innerText = 'Invalid Move';
    }  
}