//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

const myName = "Ryan Wells"
// console.log(myName)  "this checks the const myName"

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

const faveNum = 7
// console.log(faveNum) "this checks the const faveNum"

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

const lovesCode = true
// console.log(lovesCode) "this checks the const lovesCode"

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

if(faveNum === 13){
  console.log("lucky 13!") // Should expect to see this if the number is equal to 13
}
  else{
    console.log("not lucky 13") // Should expect to see this if the number is any thing other than 13
  }

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

for (i = 0; i < 5; i++){
  console.log(faveNum)
  console.log("--------------") // this is to seperate the faveNum console log so it is easier to read.
}

