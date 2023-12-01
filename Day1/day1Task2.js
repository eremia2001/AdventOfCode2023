const data = require("./dataDay1Task2")
const { handleDigits } = require('./day1Task1.js');

const numbersInString = [
    "one","two","three","four","five","six","seven","eight","nine"
]

const resultData = data.map((word) => wordContainsDigit(word) )
console.log(handleDigits(resultData))
//console.log("asd",wordContainsDigit("eighthreefourtwitwotwo"))
//console.log(replaceAll("eighthreefourtwitwotwo","two",stringNumToDigit("two")))


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
       const test = stringNumber.slice(1)
        resultWord = replaceAll(resultWord,test,stringNumToDigit(stringNumber))
    }
} )

return resultWord
}
