// Задача 1
console.log('Задача 1');

function speed(v1, units) {
    if(units == 'toMS'){
        return(`convertSpeed(${v1}, '${units}') -> '${v1/3.6} м/с'`)
    }else{
        return(`convertSpeed(${v1}, '${units}') -> '${v1*3.6} км/ч'`)
    }
}
let v1 = 36, units;
console.log(speed(36, 'toKMH'));
console.log(speed(36, 'toMS'));
console.log('\n');

// Задача 2
//console.log('Задача 2');

// let value = prompt('Введите чсило', '')
// function absValue(value) {
    // if(value < 0){
        // return -value;
    // }else{
        // return value; 
    // }
// }
// console.log(absValue(value));
// console.log('\n');

// Задача 3
console.log('Задача 3');

let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
};

console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

let property = "Свойства: ";
property += Object.keys(student)
console.log(property)
console.log('\n');


//задача 4
console.log('Задача 4');

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(randomNumber(-12, 2));
console.log('\n');

//задача 5
console.log('Задача 5');

let arr2 = [];
function sampleArray(arr, n){
    for(let i = 0; i < n; i++){
        arr2.push(arr[randomNumber(0, arr.length - 1)]);
    }
    return arr2;
}
console.log(sampleArray(['a','b','c','d'], 3))