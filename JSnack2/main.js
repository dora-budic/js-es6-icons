// Funzione con 3 argomenti (array e 2 numeri, a < b)
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// OPTION 1
const myFunction1 = (array,number1,number2) => {
  const newArray = [];
  array.forEach((item, i) => {
    if (i >= number1 && i <= number2) {
      newArray.push(item);
    }
  });
  return newArray;
}

// OPTION 2
const myFunction2 = (array,number1,number2) => {
  const newArray = array.filter((item, i) => i >= number1 && i <= number2);
  return newArray;
}

// OPTION 3
const myFunction3 = (array,number1,number2) => {
  const newArray = array.slice(number1, number2 + 1);
  return newArray;
}


// Nuovo array con i valori che hanno la posizione compresa tra i due numeri
let control = true;
while (control) {
  let firstNumber = parseInt(prompt(`Write one number between 0 (included) and 15`));
  let secondNumber = parseInt(prompt(`Write one number between 0 (included) and 15`));

  if (!isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber < 15 && secondNumber < 15) {
    if (firstNumber < secondNumber) {
      const result1 = myFunction1(numbers, firstNumber, secondNumber);
      const result2 = myFunction2(numbers, firstNumber, secondNumber);
      const result3 = myFunction3(numbers, firstNumber, secondNumber);
      console.log(result1, result2, result3);

      control = false;
    } else {
      let temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;

      const result1 = myFunction1(numbers, firstNumber, secondNumber);
      const result2 = myFunction2(numbers, firstNumber, secondNumber);
      const result3 = myFunction3(numbers, firstNumber, secondNumber);
      console.log(result1, result2, result3);

      control = false;
    }
  } else {
    console.log("You have to insert a number smaller than 15!!");
  }
}
