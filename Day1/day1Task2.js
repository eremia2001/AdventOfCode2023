const data = require("./dataDay1Task2")
const { handleDigits } = require('./day1Task1.js');
const fs = require('fs');


// fs.readFile('./data.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     const lines = data.split('\n'); // Teilt den Text in Zeilen
//     //const normalizedData = lines.map(line => line.replace(/\r/g, '') ) 

//     const result = lines.map(data => wordContainsDigit(data))
//     handleDigits(result)
// })



const numbersInString = [
    "one","two","three","four","five","six","seven","eight","nine"
]

const resultData = data.map((word) => wordContainsDigit(word) )
console.log(handleDigits(resultData))


function replaceAll(str, substring, replacement) {
    return str.replace(new RegExp(substring, 'g'), replacement);
}

function stringNumToDigit(num)
{
    return  numbersInString.indexOf(num)+1
}

function wordContainsDigit(word)
{
    let resultWord = word ;
  numbersInString.map(stringNumber => {
    if(word.includes(stringNumber))
    {
       const wordWithoutFirstChar = stringNumber.slice(1)
       const test = wordWithoutFirstChar.slice(0,-1)
       resultWord = replaceAll(resultWord,test,stringNumToDigit(stringNumber))
    }
} )


return resultWord
}



