const jsonfile = require('jsonfile');

var wordsList = jsonfile.readFileSync('./all_words.json');
console.log(wordsList);
