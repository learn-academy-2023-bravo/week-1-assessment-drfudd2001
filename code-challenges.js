// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

    // Make an arrow function that takes a number (temperature) and verifies if the number is below, at, or above another number (boiling point)
    // Returns a string:
            // "(Temperature) is below boiling point."
            // "(Temperature) is at boiling point."
            // "(Temperature) is above boiling point."
    // The number that signifies boiling point is 212.

const temperature1 = 42
const temperature2 = 350
const temperature3 = 212
const boilingPoint = 212

const isTemperatureBoiling = (number) => {
    if (number > boilingPoint){
        return `${number} is above boiling point.`
    } else if (number < boilingPoint){
        return `${number} is below boiling point.`
    } else if (number === boilingPoint){
        return `${number} is at boiling point.`
    } else return "Please enter a temperature."
}

console.log(isTemperatureBoiling(temperature1)) // Output: "42 is below boiling point."
// Expected output: "42 is below boiling point"

console.log(isTemperatureBoiling(temperature2)) // Output: "350 is above boiling point."
// Expected output: "350 is above boiling point"

console.log(isTemperatureBoiling(temperature3)) // Output: "212 is at boiling point."
// Expected output: "212 is at boiling point"

console.log(isTemperatureBoiling()) // Output: "Please enter a temperature."


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
