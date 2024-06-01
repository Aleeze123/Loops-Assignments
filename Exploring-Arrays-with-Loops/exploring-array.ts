/*    Exploring Arrays with Loops(Using loop )
1Create an empty array:
o Define an empty array called myArray.
2. Run a loop 10 times, adding a new incrementing value to the array:
o Use a for loop to iterate 10 times.
o In each iteration, add a new incrementing value (starting from 1) to the myArray.
3. Log the array into the console:
o After populating the array, log the myArray into the console.
4. Use the for loop to iterate through the array:
o Use a for loop to iterate through the array elements.
o Adjust the number of iterations based on the number of values in the array.
o Output each array element along with its index into the console.
Use the for...of loop to output the value into the console from the array:
o Use a for...of loop to iterate through the array elements.
o Output each array element directly into the console*/

// Step 1: Create an empty array
let myArray: string[] = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
    myArray.push(`Value-${i}`);
}

// Step 3: Log the array into the console with the specified format using a for loop
console.log('INDEX           VALUE');
for (let i = 0; i < myArray.length; i++) {
    console.log(`   ${i}            ${myArray[i]}`);
}

// Step 4: Use the for...of loop to output the value into the console from the array
for (let value of myArray) {
    console.log(value);
}