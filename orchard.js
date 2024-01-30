///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0
for (i = 0; i < fujiAcres.length; i++){
    totalAcres +=  fujiAcres[i]
    // console.log(totalAcres) This is to check and see that it is adding the new index value to totalAcres each time
}
console.log(totalAcres)




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres  = totalAcres / fujiAcres.length // I am assigning the varr averageDailyAcres the answer of totalAcres devided by how many indexs are in the fujiAcres array
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0){
    days += 1                       // The += will increase the days var by 1 each time the loop is run
    acresLeft -= averageDailyAcres // The -= will decrease the total from averageDailyAcres from acresLeft
    // console.log(days)            These console.logs will show if the loop is correctly adding and subtracting
    // console.log("-------")
    // console.log(acresLeft)
    // console.log("-------")
}
console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

const fujiAcresCopy = fujiAcres.slice()
// console.log(fujiAcresCopy) checking to see if the slice command worked as expected.
const galaAcresCopy = galaAcres.slice()
const pinkAcresCopy = pinkAcres.slice()

let fujiTons = []
let galaTons = []
let pinkTons = []

for (i = 0; i < fujiAcresCopy.length; i++){
    fujiTons.push(fujiAcresCopy[i] * 6.5)  // By using the .push command it is adding the index value * 6.5 to the varr
    // console.log(fujiTons)  This will console.log the results of the for loop for the fujiTons arry.
}

for (i = 0; i < galaAcresCopy.length; i++){
    galaTons.push(galaAcresCopy[i] * 6.5)  // By using the .push command it is adding the index value * 6.5 to the varr
    // console.log(galaTons)  This will console.log the results of the for loop for the galaTons arry
}

for (i = 0; i < pinkAcresCopy.length; i++){
    pinkTons.push(pinkAcresCopy[i] * 6.5) // By using the .push command it is adding the index value * 6.5 to the varr
    // console.log(pinkTons)  This will console.log the results of the for loop for the galaTons arry
}
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/



let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(i = 0; i < fujiTons.length; i ++){
    fujiPounds += fujiTons[i] * 2000
    // console.log(fujiPounds)  This checks if the for loop is multpling the tons to pounds correctly
}
for(i = 0; i < galaTons.length; i ++){
    galaPounds += galaTons[i] * 2000
    // console.log(galaPounds)  This checks if the for loop is multpling the tons to pounds correctly
}
for(i = 0; i < pinkTons.length; i ++){
    pinkPounds += pinkTons[i] * 2000
    // console.log(pinkPounds)  This checks if the for loop is mulpling the tons to pounds correctly
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0

fujiProfit += fujiPounds * fujiPrice  // This will do the math of finding the total profit for Fuji apples by multiplying the pounds with the price per pound
galaProfit += galaPounds * galaPrice  // This will do the math of finding the total profit for gala apples by multiplying the pounds with the price per pound
pinkProfit += pinkPounds * pinkPrice  // This will do the math of finding the total profit for pink apples by multiplying the pounds with the price per pound

// console.log("---------------------") This line was to seperate the previous console.log 
console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)







// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = 0

totalProfit += fujiProfit + galaProfit + pinkProfit // This is adding all the profits from each profit var and adding it to the new totalprofit var

// console.log("-----------") This line was to seperate the previous console.log
console.log(totalProfit)

