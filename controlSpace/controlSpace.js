// This is the list that will have all of the key words for this section
// Controlling spaces
const wordList = {
  left: 'Sinistra',
  right: 'Destro',
  above: 'Sopra',
  below: 'Sotto',
  beside: 'Accanto',
  front: 'Davanti',
  behind: 'Dietro',
  top: 'Superiore',
  bottom: 'Metter il fondo a'
};

function getRandomKey(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
      throw new Error('The object is empty.');
  }
  return keys[Math.floor(Math.random() * keys.length)];
}

// Get the <ul> element to append list items
const wordListElement = document.getElementById('wordList');
const resultMessageElement = document.getElementById('resultMessage');

let selectedItalianWord;

// Generate and display a list of 4 random word pairs
for (let i = 0; i < 4; i++) {
  const randomEnglishWord = getRandomKey(wordList);
  const randomItalianWord = wordList[randomEnglishWord];

  // Save the Italian word from the selected pair
  if (i === 0) {
      selectedItalianWord = randomItalianWord;
  }

  // Create a list item
  const listItem = document.createElement('li');
  listItem.textContent = `Pair ${i + 1} - Italian: ${randomItalianWord}`;

  // Append the list item to the <ul> element
  wordListElement.appendChild(listItem);
}

// Function to check the user's guess
function checkGuess() {
  const guessInput = document.getElementById('guessInput').value.toLowerCase(); // Convert to lowercase for case-insensitive comparison

  // Clear previous result message
  resultMessageElement.textContent = '';

  // Check if the guess is correct
  if (guessInput === selectedItalianWord.toLowerCase()) {
      resultMessageElement.textContent = 'Correct!';
  } else {
      resultMessageElement.textContent = 'Not correct. Try again!';
  }
}
