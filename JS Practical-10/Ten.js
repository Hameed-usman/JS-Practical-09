// console.log("SWitch StatmentS!!");

// SWITCH STATEMENT 
// ASSIGNMENT 01

function getDayOfWeek(number) {
    switch (number) {
      case 1: return "Sunday";
      case 2: return "Monday";
      case 3: return "Tuesday";
      case 4: return "Wednesday";
      case 5: return "Thursday";
      case 6: return "Friday";
      case 7: return "Saturday";
      default: return "Invalid number";
    }
  }
  console.log(getDayOfWeek(1)); 
  console.log(getDayOfWeek(5)); 

 // ASSIGNMENT 02
 
 function getMonthName(number) {
    switch (number) {
      case 1: return "January";
      case 2: return "February";
      case 3: return "March";
      case 4: return "April";
      case 5: return "May";
      case 6: return "June";
      case 7: return "July";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
      default: return "Invalid number";
    }
  }
  
  console.log(getMonthName(3)); 
  console.log(getMonthName(12)); 

//   ASSIGMENT 03

function getVehicleType(type) {
    switch (type.toLowerCase()) {
      case "car": return "Car";
      case "truck": return "Truck";
      case "motorcycle": return "Motorcycle";
      case "bicycle": return "Bicycle";
      case "bus": return "Bus";
      default: return "Unknown vehicle type";
    }
  }
  console.log(getVehicleType("car"));       
  console.log(getVehicleType("motorcycle"));

//   ASSIGNMENT 04 .

function calculateShippingCost(weight) {
    switch (true) {
      case (weight >= 0 && weight <= 10):
        return "$5";
      case (weight >= 11 && weight <= 20):
        return "$10";
      case (weight > 20):
        return "$20";
      default:
        return "Invalid weight";
    }
  }
  
  console.log(calculateShippingCost(8));  
  console.log(calculateShippingCost(15)); 

//   ASSIGNMENT 05 

function getGrade(score) {
    switch (true) {
      case (score >= 90 && score <= 100):
        return "A";
      case (score >= 80 && score < 90):
        return "B";
      case (score >= 70 && score < 80):
        return "C";
      case (score >= 60 && score < 70):
        return "D";
      case (score >= 0 && score < 60):
        return "F";
      default:
        return "Invalid score";
    }
  }
  
  console.log(getGrade(95)); 
  console.log(getGrade(75));

// WHILE LOOP 

// ASSIGNMENT 01

function printFibonacci(n) {
    let a = 0, b = 1, i = 1;
    console.log(a);
    while (i < n) {
      console.log(b);
      [a, b] = [b, a + b];
      i++;
    }
  }

printFibonacci(10);

// ASSIGNMENT 02

function guessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    while (guess !== target) {
      guess = parseInt(prompt("Guess a number between 1 and 100: "));
      if (guess > target) {
        console.log("Too high!");
      } else if (guess < target) {
        console.log("Too low!");
      } else {
        console.log("Correct! The number was " + target);
      }
    }
  }

// ASSIGNMENT 03

function reverseString(str) {
    let reversed = '';
    let i = str.length - 1;
    while (i >= 0) {
      reversed += str[i];
      i--;
    }
    return reversed;
  }
  
  console.log(reverseString("PAKISTAN")); 
  console.log(reverseString("switch"));
  
// ASSIGNMENT 04

function PrimeNum(limit) {
    let num = 2;
    while (num <= limit) {
      let isPrime = true;
      let divisor = 2;
      while (divisor < num) {
        if (num % divisor === 0) {
          isPrime = false;
          break;
        }
        divisor++;
      }
      if (isPrime) {
        console.log(num);
      }
      num++;
    }
  }
  
  PrimeNum(100);

// ASSIGMENT 05

function power(base, exponent) {
    let result = 1;
    let i = 0;
    while (i < exponent) {
      result *= base;
      i++;
    }
    return result;
  }
  
  console.log(power(2, 3)); 
  console.log(power(5, 4));

// ASSIGNMENT 06

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello"));

// DO WHILE LOOP

// ASSIGNMENT 01

function printNumbers() {
    let i = 1;
    do {
      console.log(i);
      i++;
    } while (i <= 10);
  }
  
  printNumbers(); 
  
// ASSIGNMENT 02

function sumNumbers() {
    let sum = 0;
    let i = 1;
    do {
      sum += i;
      i++;
    } while (i <= 10);
    return sum;
  }
  
console.log(sumNumbers());

// ASSIGNMENT 03

function guessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    do {
      guess = parseInt(prompt("Guess a number between 1 and 100: "));
      if (guess > target) {
        console.log("Too high!");
      } else if (guess < target) {
        console.log("Too low!");
      }
    } while (guess !== target);
    console.log("Correct! The number was " + target);
  }

//   ASSIGNMENT 04

function factorial(n) {
    let result = 1;
    let i = 1;
    do {
      result *= i;
      i++;
    } while (i <= n);
    return result;
  }
  
  console.log(factorial(5));  
  console.log(factorial(3)); 

//   ASSIGNMENT 05

function printMultiplicationTable(number) {
    let i = 1;
    do {
      console.log(`${number} x ${i} = ${number * i}`);
      i++;
    } while (i <= 10);
  }
  
  printMultiplicationTable(5);
