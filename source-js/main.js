let numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operation'),
  decimalBtn = document.querySelectorAll('.decimal'),
  resultBtn = document.querySelectorAll('.result'),
  display = document.querySelectorAll('.display'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPendingOperation = '';

for (let i=0; i<numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i=0; i<operations.length; i++) {
  let operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
  });
}

resultBtn.addEventListener('click', result);

decimalBtn.addEventListener('click', decimal);

function numberPress(number){
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operation(oper) {
  let localOperationMemory = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryCurrentNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }

    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = oper;
  }
}

function decimal(){
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
    }
  }

  display.value = localDecimalMemory;
}

//I could not consider the cosinus/sinus/squareroot/factorial/pow, so I made it in a simple manner below)

function cosinus (x) {
  return Math.cos(x)
}
console.log(cosinus(1));

function sinus (y) {
  return Math.sin(y)
}
console.log(sinus(2));

function exponent (numberOne, numberTwo) {
  return Math.pow(numberOne, numberTwo);
}
console.log(exponent(7,3));

function factorial (n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(10);

function squareRoot (x) {
  return Math.sqrt(x);
}
console.log(squareRoot(25));

function add (numberOne, numberTwo) {
  return numberOne + numberTwo;
}
console.log(add(8,2));

function subtract (numberOne, numberTwo) {
  return numberOne - numberTwo;
}
console.log(subtract(5,3));

function multiply (numberOne, numberTwo) {
  return numberOne * numberTwo;
}
console.log(multiply(6,3));

function divide (numberOne, numberTwo) {
  return numberOne / numberTwo;
}
console.log(divide(45,15));

