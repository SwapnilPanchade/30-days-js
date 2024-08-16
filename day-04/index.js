// well in here we are going to write scripts for loops programs for various conditions
//? well the first one is easy to write a script of number printing

function numberesPrinter(a, b) {
  //! well it will print numbers from a till b
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}

numberesPrinter(2, 8);


String grade;
if(marks >= 90){
  grade = "Grade A";
}
else if (marks >= 70){
  grade = "Grade B";
}
else if (marks >= 50){
  grade = "Grade C";
}
else if(marks >= 35){
  grade = "Grade D";
}
else {
  grade = "Fail";
}