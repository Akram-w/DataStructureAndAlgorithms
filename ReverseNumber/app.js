function getReversedNumber(number) {
    if (number < 10) {
        return number;
    }
    let remainder = number % 10;
    let nextNumber = (number - remainder) / 10;

    return `${remainder}${getReversedNumber(nextNumber)}`;
}

let data = 35000;
let result = getReversedNumber(data);
console.log(`The Value ${data} after reversed ${result}`)