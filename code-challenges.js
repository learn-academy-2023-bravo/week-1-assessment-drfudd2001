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

    // Make an arrow function that takes a number (temperature) and verifies if the number is below, at, or above another number (boiling point) by checking if the number is higher, lower, or equal  (  > , < , and ===  ) 
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

    // Create code that combines the two arrays into a new array utilizing <  array1.concat(array2)  >.
    // Then using the new array, return the lenght of said array utilizing <  array3.length  >.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

const padresCombinedWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(padresCombinedWorldSeriesRuns) // Output: [2, 5, 2, 2, 4, 6, 3, 5, 3]

console.log(padresCombinedWorldSeriesRuns.length) // Output: 9
// Expected output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

    // Create code that utilizes <  string..split("").reverse().join("")  > to reverse the provided string.
    // <  .split("")  > will separate the characters in the string and mutate it into an array.
    // < .reverse()  > will reverse the order of the values in the array.
    // <  .join("")  > will unite all the characters in the array and return a new string.

const currentCohort = "Bravo 2023"

const reversedCohort = (currentCohort.split("").reverse().join("")) // Output: "3202 ovarB"

console.log(reversedCohort) // Output: "3202 ovarB"
// Expected output: "3202 ovarB"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
    // Utilizing the < .lastIndex() > to find the last index of a given value using the variables given.
    // The code created works by either using the givenValue# or by entering the value on the array for with index we want to find.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1)) // Output: 7
// Expected output: 7

const givenValue2 = 10

console.log(myNumbers.lastIndexOf(10)) // Output: 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
    // Make code that will arrenge the array values based on a numerical order from largest to smallest.
    // By utilizing the < .sort > feature, and using two parameter to signify the values and two more values to indicate the desired order of values.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a)) // Output :[82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]

console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a)) // Output :[68, 67, 66, 66, 62, 59, 59]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
