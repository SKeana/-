// This is the array that will have all of the key-value pairs for this section
// Controlling spaces
const wordList = [
  { english: 'left', italian: 'Sinistra' },
  { english: 'right', italian: 'Destro' },
  { english: 'above', italian: 'Sopra' },
  { english: 'below', italian: 'Sotto' },
  { english: 'beside', italian: 'Accanto' },
  { english: 'front', italian: 'Davanti' },
  { english: 'behind', italian: 'Dietro' },
  { english: 'top', italian: 'Superiore' },
  { english: 'bottom', italian: 'Metter il fondo a' }
];

function getRandomPair(arr) {
  if (arr.length === 0) {
      throw new Error('The array is empty.');
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

// Get the <ul> element to append list items
const wordListElement = document.getElementById('wordList');
const resultMessageElement = document.getElementById('resultMessage');

let selectedPair;

// Generate and display a list of 4 random word pairs
for (let i = 0; i < 4; i++) {
  const randomPair = getRandomPair(wordList);
  
  // Save the selected pair
  if (i === 0) {
      selectedPair = randomPair;
  }

  // Create a list item
  const listItem = document.createElement('li');
  listItem.textContent = `Pair ${i + 1} - Italian: ${randomPair.italian}`;

  // Append the list item to the <ul> element
  wordListElement.appendChild(listItem);
}

// Function to check the user's guess
function checkGuess() {
  const guessInput = document.getElementById('guessInput').value.toLowerCase(); // Convert to lowercase for case-insensitive comparison

  // Clear previous result message
  resultMessageElement.textContent = '';

  // Check if the guess is correct
  if (guessInput === selectedPair.italian.toLowerCase()) {
      resultMessageElement.textContent = 'Correct!';
  } else {
      resultMessageElement.textContent = 'Not correct. Try again!';
  }
}
