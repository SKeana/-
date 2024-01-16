// this is the list that will have all of the key words for this section
// controling spacees
const wordList = {
    left: 'Sinistra',
    right: 'destro',
    above: 'Sopra',
    below: 'sotto',
    beside: 'accanto',
    front: 'davanti',
    behind: 'dietro',
    top: 'superiore',
    bottom: 'metter il fondo a'
};

function getRandomKey(obj){
  const keys = Object.keys(obj);
  if (keys.length === 0) {
      throw new Error('The object is empty.');
  }
  return keys[Math.floor(Math.random() * keys.length)];
}

// Get the <ul> element to append list items
const wordListElement = document.getElementById('wordList');

// Generate and display a list of 4 random word pairs
for (let i = 0; i < 4; i++) {
  const randomEnglishWord = getRandomKey(wordList);
  const randomItalianWord = wordList[randomEnglishWord];

  // Create a list item
  const listItem = document.createElement('li');
  listItem.textContent = `Pair ${i + 1} - English: ${randomEnglishWord}, Italian: ${randomItalianWord}`;

  // Append the list item to the <ul> element
  wordListElement.appendChild(listItem);
}