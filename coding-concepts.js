// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The < .length > will allow for the verification of the length property of an array.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Using the variable assigned to the given array and using the array brackets with the desired index number, will access the value assigned to the index number. The index is base 0, therefore, even though the letter "o" is the fifth position in the given string, the index number given was 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The string "Ruby" is assigned to the second position in the array, and the index number for that position is 1. The variable "index" is assigned to the number 1, and said number happens to also be the second position in the given array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: An error
// b) Verify and explain: The < .toUpperCase() > method only works when the given object is a string. For this code to work, the array must be accessed and returned as a string. By using the < .toString() > method, we can change the array into a string and then into upper case letters. Afterwards, using the < .split(',') > method and a comma as a separator, we will turn the string back into an array with a space between the array values. It would have to be writen as:

    //console.log(weekendDays.toString().toUpperCase().split(","))

// This code will return:

    // [ "SATURDAY", "SUNDAY" ]

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The variable dataTypes with < .length > is verifying the length of the array that the variable is assigned to. By using < typeof >, we would get the type of value < dataTypes.length > will return when called.