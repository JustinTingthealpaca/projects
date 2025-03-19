//define variables
let input1 = null;
let input2 = null;
let isInput1Over = false;
let isInput2Over = false;
let mode = null;
let modeName = null;
let showAnwser = false;
let text = 0;
let total = 0;
let makeInput1Negative = false;
let makeInput2Negative = false;
let toggleMakeInput1Negative = 1;
let toggleMakeInput2Negative = 1;
let decimalNumber = 0;
display();

//define keys
function key(keyPressed) {
  if (keyPressed < 10) {
    inputNumber(keyPressed);
    console.log(keyPressed);
  } else if (keyPressed == 10) { //decimal
    decimalNumber = 1;
  } else if (keyPressed == 101) {  //plus
    inputOver(1);
    mode = 0;
    modeName = "+"                          
  } else if (keyPressed == 102) { // minus
    inputOver(1);
    isInput1Over = true;
    mode = 1;
    modeName = "-"   
  } else if (keyPressed == 103) {
    inputOver(1);
    isInput1Over = true;
    mode = 2;
    modeName = "&times;";
  } else if (keyPressed == 104) {
    inputOver(1);
    isInput1Over = true;
    mode = 3;
    modeName = "&div;";
  } else if (keyPressed == 200 ) {
    compute(input1, input2);
    showAnwser = true;
    isInput2Over = true;
    console.log("pressed");
  }
  display();
}

//calculate
function compute(number1, number2) {
  inputOver(2);
  if (mode == 0) {
     total = number1 + number2;
  } else if (mode == 1) {
     total = number1 - number2;
  } else if (mode == 2) {
      total = number1 * number2;
  } else if (mode == 3) {
    if (number1 != 0 && number2 != 0) {
      total = number1 / number2;
    }
    else total = "error"
  }
  display();
  return total;
}

//keys work and decimal
function inputNumber(number) {
    if (decimalNumber == 0) {
      if (isInput1Over == false) {
        input1 = input1 * 10;
        input1 += number;
      } else if (isInput2Over == false) {
        input2 = input2 * 10;
        input2 += number;
      }
    } else {
      let amountOfDecimalDigits = 10 ** decimalNumber;
      if (isInput1Over == false) {
        input1 = input1 * amountOfDecimalDigits;
        input1 += number;
        input1 = input1 / amountOfDecimalDigits; 
        decimalNumber ++;
        console.log(amountOfDecimalDigits);
      } else if (isInput2Over == false) {
        input2 = input2 * amountOfDecimalDigits;
        input2 += number;
        input2 = input2 / amountOfDecimalDigits; 
        decimalNumber ++;
      }
    }
    console.log(input1);
    console.log(input2);
}

//inputOver thing
function inputOver(inputNum) {
  if (inputNum == 1) {
    isInput1Over = true;
  }
  decimalNumber = 0;
}

//display
function display() {
  const display = document.getElementById("display");
  if (input1 == null) {
    text = 0;
  } else if (modeName == null) {
    text = input1;
  } else if (input2 == null) {
    text = input1 + " " + modeName;
  } else if (showAnwser == false) {
    text = input1 + " " + modeName + " " + input2;
  } else {
    text = input1 + " " + modeName + " " + input2 + " = " + total;
  }
  display.innerHTML = text;
}