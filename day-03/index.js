//! Program to know about scripts of positive negetive and zero
function integer(a) {
  if (a == 0) {
    return "The integer you have entered is zero";
  } else if (a > 0) {
    return " it's a positive number";
  } else {
    return "It's a negative number you have entered";
  }
}

function eligible(a) {
  if (a > 18) {
    return " you are eligible to vote please your near voting booth if not voted yet!";
  } else {
    requiredYears = 18 - a;
    return (
      " you are not age yet please wait till you become age and that is " +
      requiredYears +
      " more years"
    );
  }
}

console.log(eligible(12));

function leapYearOrNot(a) {
  if (a % 100 == 0) {
    if (a % 400) {
      return " the year you provided is leap year";
    } else {
      return " it's not a leap year";
    }
  } else if (a % 4 == 0) {
    return " it's a leap year";
  } else {
    return " it's not a leap year";
  }
}

console.log(leapYearOrNot(57));
