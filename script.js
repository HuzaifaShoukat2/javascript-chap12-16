//? CHapter 12-14

// !Question no 1

// var userInput = prompt("Enter a character number or string:");

//     if (userInput) {
//       if (!isNaN(userInput)) {
//         console.log(`Input "${userInput}" is a Number`);
//       } else if (userInput === userInput.toUpperCase()) {
//         console.log(`Input "${userInput}" is an Uppercase Letter`);
//       } else if (userInput === userInput.toLowerCase()) {
        // console.log(`Input "${userInput}" is a Lowercase Letter`);
//       } else {
//         console.log(`Input "${userInput}" is an Other Character`);
//       }
//     } else {
//       console.log("No input provided.");
//     }

    // !Question no 2
// var firstInteger = parseInt(prompt("Enter the first integer:"));
//  var secondInteger = parseInt(prompt("Enter the second integer:"));

//     if (!isNaN(firstInteger) && !isNaN(secondInteger)) {
//       if (firstInteger > secondInteger) {
//         console.log(`The larger integer is: ${firstInteger}<br>`);
//       } else if (secondInteger > firstInteger) {
        // console.log(`The larger integer is: ${secondInteger}<br>`);
//       } else if(firstInteger === secondInteger) {
//         console.log(`Both integers are equal: ${firstInteger}<br>`);
//       }
//     } else {
//       console.log("Invalid input. Please enter valid integers.");
//     }
      // !Question no 3
    
// var number = prompt("input a number");

// if (number){
// if (number > 1){
//     console.log(`the number: ${number} is postive <br>`);
// }
// else if(number == 0)
// {
//     console.log('the number is zero');
// }
// else if (number < 0){
//     console.log(`the number: ${number} is negative <br>`);
// }
// }
// else {
//    console.log('Invalid number');
// }

  // !Question no 4

//   const input = prompt("Enter a character (string of length 1):");

// if (input && input.length === 1) {
//   const char = input.toLowerCase();
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// } else {
//   console.log("Invalid input. Please enter a single character.");
// }



//  !Question no 5

//  var correctPassword ="Pakistan123";
//  var userPassword = prompt("Enter your password");

//  if (!userPassword) {
//   alert("please enter your password.");
//  }
//  else if(userPassword === correctPassword){
//   alert("Correct!");
//  }
//  else{
//   alert("Incorrect Password.");
//  }


//  !Question no 6

// var greeting;
// var hour = 19;
// if(hour < 18){
//   greeting =" Good Day";
//   console.log(greeting);
// }
// else {
//   greeting ="Good Evening"
//   console.log(greeting);
// }

//  !Question no 7


// var time =parseInt( prompt("input time"));





//? CHapter 13-16



// !  Question 1-7
// var studentName =[];
// var studentName = new Array();
// var stringArray =["apple","mango","strawberry"];
// var numberArray =[1,2,3,4,5];
// var booleanArray =[true,false];
// var mixxedArray = ["mango",1,false,"apple",true,4,];
// var qualification =["SSC" ,"HSC","BSCS","BSSE","MASTERS","PHD"];

// document.write("<h1>QUALIFICATIONS</h1>");
// document.write("<ul>");
// for(var i = 0 ; i < qualification.length; i++){
// document.write("<li>" + qualification[i] + "</li>");}
// document.write("</ul>");

// !  Question 8

// var studentName =["michael","john","tony"];
// var studentMarks =[320,230,480];
// totalMarks = 500;

// for (var i = 0; i < studentName.length ;i++){
//   var percentage = (studentMarks[i] / totalMarks)*100;
//   console.log("score of " + studentName[i] +" is " + studentMarks[i] + ".percentage:" + percentage +"%" );
// }


// !  Question 9

// var colorNames =["blue","green","orange","red"];
// console.log(colorNames);
// firstColor = prompt("Add first color");
// colorNames.unshift(firstColor);
// console.log(colorNames);

// lastColor = prompt("Add last color");
// colorNames.push(lastColor);
// console.log(colorNames);

// colorNames .unshift("purple","maroon");
// console.log(colorNames);

// colorNames.shift();
// console.log(colorNames);

// colorNames.pop();
// console.log(colorNames);

// var addIndex= parseInt(prompt("Enter the index to add color"));
// colorIndex = prompt("add color");
// colorNames.splice(addIndex, 0, colorIndex);
// console.log(addIndex ,colorNames);

// var remIndex = parseInt(prompt("Enter index to Remove color"));
// remIndexQuantity = parseInt(prompt("How many colors you wants to delete"));
// colorNames.splice(remIndex,remIndexQuantity);
// console.log(remIndex , colorNames);


// !  Question  10

// var studentMarks
// studentMarks.sort();
// console.log(studentMarks);

// !  Question  11
// var cityNames = ["quetta","karachi" ,"lahore", "islamabad","multan"];
// selectedCities = [];
// selectedCities= cityNames.slice(2,4);
// console.log(selectedCities);

// !  Question  12

// var arr =["this","is","my","cat"];

// console.log(arr.join());
// console.log(arr.join(' '));


// !  Question  13

// var accesories =[];
// accesories.push("keyboard");
// accesories.push("mouse");
// accesories.push("printer");
// accesories.push("moniter");
// while(accesories.length > 0){
//         console.log("out:", accesories.shift());
// }



// !  Question  14

// var accesories =[];
// accesories.push("keyboard");
// accesories.push("mouse");
// accesories.push("printer");
// accesories.push("moniter");
// while(accesories.length > 0){
//         console.log("out:",accesories.pop());
// }


// !  Question  15
// var devices = ["Apple","Samsung","Motrola","Infinix","Sony","Nokia"];

// document.write("<select>");
// for (var i = 0 ; i < devices.length ; i++ ){
//         document.write("<option>" + devices[i] + "</option>");
// }
// document.write("</select>");

