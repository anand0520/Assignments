console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/---------------------------------------------/
function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;

        case "multiply":
            result = num1 * num2;
            break;

        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Division by zero is not allowed";
            }
            break;

        default:
            return "Invalid operation";
    }

    return result;
}

/---------------------------------------------------------/
console.log("Addition:", calculate(10, 5, "add"));
console.log("Subtraction:", calculate(10, 5, "subtract"));
console.log("Multiplication:", calculate(10, 5, "multiply"));
console.log("Division:", calculate(10, 5, "divide"));

function findTax(salary) {
    let tax = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            return "Invalid salary amount";
    }

    return tax;
}

/------------------------------------------------------------/

console.log("Tax on 400000:", findTax(400000));
console.log("Tax on 800000:", findTax(800000));
console.log("Tax on 1200000:", findTax(1200000));
console.log("Tax on 2000000:", findTax(2000000));

function sumOfProducts(n1, n2) {
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum += digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log("Sum of products:", sumOfProducts(6, 34));
