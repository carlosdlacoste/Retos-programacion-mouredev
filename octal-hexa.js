/*
 * Crea una función que reciba un número decimal y lo trasforme a Octal
 * y Hexadecimal.
 * - No está permitido usar funciones propias del lenguaje de programación que
 * realicen esas operaciones directamente.
 */

function decimalToOctal(num){
    let remainderArr = []
    const lowerThanEight = num
    while (num >= 8) {
        remainderArr.push(num % 8)
        num = Math.floor(num / 8)
        if(num < 8) remainderArr.push(num)
    } 
    if (lowerThanEight < 8) remainderArr.push(lowerThanEight)
    const reversedArr = remainderArr.reverse()
    const OctalNumber = reversedArr.join("")
    return parseInt(OctalNumber)
}

const letterDic = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
}

function decimalToHexadecimal(num) {
    let remainderArr = [];
    const lowerthanSixteen = num;
    while(num >= 16){
        if(letterDic.hasOwnProperty(`${num % 16}`)) remainderArr.push(letterDic[`${num % 16}`])
        else remainderArr.push(num % 16)
        num = Math.floor(num / 16)
        if(num < 16) {
            if(letterDic.hasOwnProperty(`${num}`)){
                remainderArr.push(letterDic[`${num}`])
            } 
            else remainderArr.push(num)
        }
    }
    if(lowerthanSixteen < 16){
        if(letterDic.hasOwnProperty(lowerthanSixteen)) remainderArr.push(letterDic[lowerthanSixteen])
        else remainderArr.push(lowerthanSixteen)
    }
    const reversedArr = remainderArr.reverse();
    const HexaArr = reversedArr.join("")
    return HexaArr
}

console.log(decimalToOctal(500))
console.log(decimalToHexadecimal(500))


// Otra version mas corta y eficiente del mismo codigo para un numero hexadecimal 


// const convertHexa = (n) => {
// 	let res = "";
// 	const hexaNums = [
// 		"0",
// 		"1",
// 		"2",
// 		"3",
// 		"4",
// 		"5",
// 		"6",
// 		"7",
// 		"8",
// 		"9",
// 		"A",
// 		"B",
// 		"C",
// 		"D",
// 		"E",
// 		"F",
// 	];

// 	while (n > 0) {
// 		let rem = n % 16;
// 		n = Math.floor(n / 16);
// 		res = hexaNums[rem] + res;
// 	}

// 	return res;
// };

// console.log(convertHexa(7));
