//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

const colorCopy = faveColors.slice()
// console.log(faveColors, " this is the faveColors arr.")  
// console.log(colorCopy, " this is the colorCopy arr.")
// The two console.logs are to compare the two const and verify if they are the same.

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push('blue')
// console.log(colorCopy) checking to see if the push command to add blue excuted correctly

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

const middleNums = numbers.slice(1, 4)
// console.log(middleNums) this will check if the new arry "middleNums" contains the correct numbers 2, 3, 4
// from the correct indexes in the "numbers" arry.



//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
let answeres = ""

for (i = 0; i < bigOrSmallArray.length; i++){
  if (bigOrSmallArray[i] > 100){
    console.log("big")
    // console.log("------------") this will help see each time it "big" is console.loged
  } else if (bigOrSmallArray[i] <= 100){
    answeres += "small"
    // console.log(answeres)
    // console.log("------------") this will show if small was pushed to the arry "answers"
  }
}
// CODE HERE
