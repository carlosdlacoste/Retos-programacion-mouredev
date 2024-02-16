// Convertir un numero decimal a fraccion

function decimalToFraction(num1, den1, num2, den2){
    let firstOperation = num1/den1
    let secondOperation = num2/den2
    let sum = firstOperation + secondOperation
    let decimalArr = sum.toString().split(".")
    let leftDecimalPart = decimalArr[0]
    let rightDecimalPart = decimalArr[1]
    let resultNum = leftDecimalPart + rightDecimalPart
    let resultDen = Math.pow(10, rightDecimalPart.length)
    let result = resultNum + ' / ' + resultDen
    return result
}


console.log(decimalToFraction(1, 2, 3, 5))