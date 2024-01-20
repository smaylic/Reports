console.log("///");

function sayHello(name) {
    return `Hello ${name}`
}
console.log(sayHello(name))

console.log("///");

function numbersMorethan10 (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
        console.log(numbers[i]);
        }
    }
}
const numbersArray = [5, 12, 8, 15, 20];
numbersMorethan10(numbersArray);

console.log("///");

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
    case 'plus':
        result = num1 + num2;
        break;
    case 'minus':
        result = num1 - num2;
        break;
    case 'multiply':
        result = num1 * num2;
        break;
    case 'divide':
        result = num1 / num2;
        break;
    default:
        result = 'Invalid operator';
    }
    return result;
}
console.log(calculator(55, 3, 'plus'));
console.log(calculator(10, 3, 'minus'));
console.log(calculator(19, 2, 'multiply')); 
console.log(calculator(10, 50, 'divide')); 