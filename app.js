//Chapter No: 9-11

//Q1
// var cityName = prompt("Enter Your City Name:");
// if (cityName == "Karachi" || cityName == "karachi") {
//     alert("“Welcome to city of lights”");
// };

//Q2
// var gender = prompt("Enter Your Gender:");
// if (gender == "Male" || gender == "male") {
//     alert("Good Morning Sir.");
// } else if (gender == "Female" || gender == "female") {
//     alert("Good Morning Ma’am.");
// };

//Q3
// var signalColor = prompt("Enter Color of Road Traffic Signal");
// if (signalColor == "Red" || signalColor == "red") {
//     alert("Must Stop");
// } else if (signalColor == "Yellow" || signalColor == "yellow") {
//     alert("Ready to move");
// } else if (signalColor == "Green" || signalColor == "green") {
//     alert("Move now");
// };

//Q4
// var fuelInCar = +prompt("Enter Your Car Fuel In Litres:");
// if (fuelInCar >= 0.25) {
//     alert("No Need To Refill Right Now");
// } else if (fuelInCar <= 0.25) {
//     alert("“Please refill the fuel in your car”");
// };

//Q5
//a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// };

//b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// };

//c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } else if (c === 13){
//     alert("condition 2 is true");
// } else if (++c < 14){
//     alert("condition 3 is true");
// } else if(c === 14){
//     alert("condition 4 is true");
// };

//d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert(totalCost );
// }if (totalCost === laborCost + materialCost){
//     alert(true);
// } else {
//     alert(false);
// };

//f)
// var car = "car < cat";
// if("car" < "cat"){
// alert("car is smaller than cat");
// };

//Q6
// var Eng = +prompt("Enter Your English Marks:");
// var Maths = +prompt("Enter Your Maths Marks:");
// var Urdu = +prompt("Enter Your Urdu Marks:");
// var totalObtainedMarks = Eng + Maths + Urdu;
// var totalMarks = 300;
// var perc = (totalObtainedMarks / totalMarks) * 100;
// if (perc >= 80 && perc <= 100) {
//     alert("A-one");
//     console.log("Excellent");
//     document.write("<h1>Marks Sheet</h1>","</br>","</br>","Total marks : ",totalMarks,"</br>","Marks obtained : ",totalObtainedMarks,"</br>","Percentage : ",perc,"%","</br>","Grade : A-one","</br>","Remarks : Excellent");
// } else if (perc >= 70 && perc <= 80) {
//     alert("A");
//     console.log("Good");
//     document.write("<h1>Marks Sheet</h1>","</br>","</br>","Total marks : ",totalMarks,"</br>","Marks obtained : ",totalObtainedMarks,"</br>","Percentage : ",perc,"%","</br>","Grade : A","</br>","Remarks : Good");
// } else if (perc >= 60 && perc <= 70) {
//     alert("B");
//     console.log("You need to improve");
//     document.write("<h1>Marks Sheet</h1>","</br>","</br>","Total marks : ",totalMarks,"</br>","Marks obtained : ",totalObtainedMarks,"</br>","Percentage : ",perc,"%","</br>","Grade : B","</br>","Remarks : You need to improve");
// } else if (perc <= 60) {
//     alert("Fail");
//     console.log("Sorry");
//     document.write("<h1>Marks Sheet</h1>","</br>","</br>","Total marks : ",totalMarks,"</br>","Marks obtained : ",totalObtainedMarks,"</br>","Percentage : ",perc,"%","</br>","Grade : Fail","</br>","Remarks : Sorry");
// };

//Q7
// var secretNumber = 7;
// var userGuess = +prompt("Guess the secret number (between 1 and 10):");
// if (userGuess == secretNumber) {
//     alert("“Bingo! Correct Answer”");
// } else if (userGuess == secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
// };

//Q8
// var userNumber = parseInt(prompt("Enter a number:"));
// if (userNumber % 3 === 0) {
//     alert(userNumber + " is divisible by 3.");
// } else {
//     alert(userNumber + " is not divisible by 3.");
// };

//Q9
// var userNumber = parseInt(prompt("Enter a number:"));
// if (userNumber % 2 === 0) {
//     alert(userNumber + " is Even");
// } else {
//     alert(userNumber + " is Odd");
// };

//Q10
// var temperature = +prompt("Enter Temperature:");
// if (temperature > 40) {
//     alert("“It is too hot outside.”");
// } else if (temperature > 30) {
//     alert("“The Weather today is Normal.”");
// } else if (temperature > 20) {
//     alert("“Today’s Weather is cool.”");
// } else if (temperature > 10) {
//     alert("“OMG! Today’s weather is so Cool.”");
// };

//Q11
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var operation = prompt("Enter Operation Sign");
// if (operation == "+") {
//     alert(firstNumber + secondNumber);
// } else if (operation == "-") {
//     alert(firstNumber - secondNumber);
// } else if (operation == "*") {
//     alert(firstNumber * secondNumber);
// } else if (operation == "/") {
//     alert(firstNumber / secondNumber);
// } else if (operation == "%") {
//     alert(firstNumber % secondNumber);
// } else {
//     alert("Wrong Value");
// };


//Chapter No: 12-13

//Q1
// Prompt user to enter a character
const userInput = prompt("Enter a character (number or string):");

// Check if the input is a number
if (!isNaN(userInput)) {
    console.log(userInput + " is a number.");
} else if (userInput === userInput.toUpperCase()) {
    console.log(userInput + " is an uppercase letter.");
} else if (userInput === userInput.toLowerCase()) {
    console.log(userInput + " is a lowercase letter.");
} else {
    console.log(userInput + " is not a number, uppercase letter, or lowercase letter.");
}
