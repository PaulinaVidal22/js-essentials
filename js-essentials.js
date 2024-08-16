// 0 - Bajar repo, hacer hola mundo console.log
console.log("hola mundo!");

// 2 - Funciones:
// add(firstOperator, secondOperator),
function add(firstOperator, secondOperator) {
    let sum = firstOperator + secondOperator;
    return sum;
}

console.log("creating my first function! : the result of 2 + 3 = " + add(2,3));

// subtract(firstOperator, secondOperator),
function subtract(firstOperator, secondOperator){
    let subs = firstOperator - secondOperator;
    return subs
}

console.log( " 33 - 11 ? " + subtract(33,11));

// divide(firstOperator, secondOperator),
function divide(firstOperator, secondOperator){
    let div = firstOperator / secondOperator;
    return div
}

console.log("46 / 2 = " + divide(46,2));

// multiply(firstOperator, secondOperator)
function multiply(firstOperator, secondOperator){
    let mult = firstOperator * secondOperator;
    return mult;
}

console.log("0,5 * 4 should be 2 ? " + multiply(0.5,4));

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

function dress(temperature, isRaining){
    let str = "";
    if (isRaining) {
        str += "llevar paraguas";
    }

    if (temperature < 10) {
        str += "\t ir en auto";
    } else if (temperature > 30){
        str += "\t ir de short";
    } else if (temperature === 30) {
        str += "\t usar lentes";
    }

    return str;
}

console.log(dress(30, true));

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator){
    switch (operation){
        case "addition":
            return add(firstOperator, secondOperator);
            // add
        case "substraction":
            return subtract(firstOperator, secondOperator);
        case "division":
            return divide(firstOperator, secondOperator);
        case "multiplication":
            return multiply(firstOperator, secondOperator);
        default:
            let message = "operacion invalida";
            return message;
    }
}

console.log(calculate("multiplication",2,11));

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating(name, foods){
    let str = "";
    for (let food of foods){
        str += `\n ${name} is eating ${food}`;
    }
    return str;
}

console.log(eating("Paola",['🍔','🍟','🍗',] ));

// 6 - Funcion
// finalCountDown(count)
function finalCountDown(count){
    let counter = count;
    while (counter >= 0 ){
        // arr[index] = 
        console.log(counter);
        counter--;
    }
}

console.log(finalCountDown(5));

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

function getGrade(score){
    if (score >=0 && score <=40){
        return "D";
    } else if(score >= 41 && score <= 60){
        return "R";
    } else if (score >= 61 && score <= 74){
        return "B";
    } else if (score >= 75 && score <= 84){
        return "BMB"
    } else if (score >= 85 && score <= 96){
        return "MB";
    } else if (score >= 97 && score <= 100){
        return "S";
    } else {
        return "not a valid score."
    }
}

console.log(" 35 corresponds to : " + getGrade(35));
console.log(" -6 corresponds to : " + getGrade(-6));
console.log(" -1 corresponds to : " + getGrade(-1));
console.log(" 96 corresponds to : " + getGrade(96));
console.log(" 99 corresponds to : " + getGrade(99));
console.log(" 101 corresponds to : " + getGrade(101));
console.log(" 222 corresponds to : " + getGrade(222));

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the new collection of articles

function fillCart(person, articlesCollection) {
    articlesCollection.forEach(article => {
        person.cart.push(article);
    });
}

const person = { name: 'Pepe', cart: [] };
const articlesCollection = [
    { article: '👟', amount: 1, price: 25 },
    { article: '👕', amount: 2, price: 15 },
    { article: '🎒', amount: 1, price: 40 }
];

fillCart(person, articlesCollection);
console.log("this is " + person.name + "'s cart :");
console.log(person.cart);

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory){
    let count = 0;
    inventory.forEach(product => {
        if (product == '🍌' ){
            count++;
        }
    });
    return count;
}

console.log("there are " + countBanana(['🥑','🍌','🥭', '🍌']) + " bananas.")

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
function getTotal(inventory){
    let total = 0;
    inventory.forEach(product => {
        total += (product.price * product.quantity);
    });
    return total;
}

console.log("inventory's total value : " + getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]));
