/*          Guessing Game (Using while loop )
1. Set a maximum value: Create a variable to store the maximum value for the number 
guessing game.
2. Generate a random number: Use Math.random() and Math.floor() to generate a 
random number between 1 and the maximum value. Log this value to the console for 
development purposes.
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set 
it to false initially.
4. Simulate user guesses: Use an array to store a series of predefined guesses.
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the 
correct guess is made.
6. Check the user's guess: Inside the loop, check if the current guess matches the random 
number. Provide feedback if the guess is too high or too low.*/

let maximumValue:number = 70;
let randomNumber: number = Math.floor(Math.random() * maximumValue) + 1;
console.log(`Random number (for development purposes): ${randomNumber}`); 

// track the guess status
let isCorrectGuessed: boolean = false;

// Simulate user guesses
let guesses: number[] = [15, 5, 27, 60, 43, 99, 20, 3, 70];

// 5. Iterate over guesses
let index: number = 0;
while (!isCorrectGuessed && index < guesses.length) {
  let currentGuess: number = guesses[index];
  console.log(`Guess #${index + 1}: ${currentGuess}`);

  // 6. Check the user's guess
  if (currentGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
    isCorrectGuessed = true;
  } else if (currentGuess > randomNumber) {
    console.log("Your guess is too high........");
  } else {
    console.log("Your guess is too low......... Try again!");
  }
  index++;
}
if (!isCorrectGuessed) {
  console.log(`Oh no!, you didn't guess the correct number: The number was: ${randomNumber}`);
}
