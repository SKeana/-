// this is the list that will have all of the key words for this section
// controling spacees
const wordList: { [key: string]: string } = {
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

//this is the part that is looking at the list and picking words in 
//english and italian to be

function getRandomKey(obj: { [key: string]: any }): string {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
      throw new Error(" The obkext is emty.");
    }
    return keys[Math.floor(Math.random() * keys.length)];
  }

// getting making a str of both words 

const randomEnglishWord: string = getRandomKey(wordList);
const randomItalianWord: string = wordList[randomEnglishWord];

console.log("English:", randomEnglishWord);
console.log("Italian:", randomItalianWord);