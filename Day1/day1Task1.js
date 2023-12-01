const data = require("./dataDay1.js")

function handleDigits(data)
{
    const filterCharData = data.map((word) => word.replace(/\D/g, ''))
    const twoNumberData = filterCharData.filter(test => test.length == 2)
    const oneNumberData = filterCharData.filter(test => test.length == 1 )
    const moreThanTwoData = filterCharData.filter(test => test.length > 2  )
    
    const concatedResult = twoNumberData.concat (dealWithOneNumbers(oneNumberData),dealWithTwoNumbers(moreThanTwoData))
    console.log(concatedResult)
    return sumData(concatedResult)
}


function dealWithOneNumbers(oneNumberData)
{
   return  oneNumberData.map(element => element + element)
}
function dealWithTwoNumbers(moreThanTwoData)
{
    return moreThanTwoData.map(element => element[0] + element[element.length-1])
}

function sumData(data)
{
    let sumResult = 0 ; 

     data.map(element => {
        sumResult+= parseInt(element)
    })
    return sumResult
}

//console.log(handleDigits(data))

module.exports = {
    handleDigits
};