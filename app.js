// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromEuroToDollar = (euro) => {
    const dollar = euro * 1.2 
    return dollar

}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

let fromDollarToYen = (dollar) => {
    const yen = (dollar) / 1.2 * 127.9
    return yen

}


let fromYenToPound = (yen) => {
    const pound = yen / 127.9 * 0.8
    return pound

}


module.exports = { sum , fromEuroToDollar, fromDollarToYen , fromYenToPound };
