//задача 1

let v1 = 36, v2 = 20;
newV1 = `36 км/ч соответствует ${v1/3.6} м/с`;
newV2 = `20 м/с соответствует ${v2*3.6} км/ч`;
console.log(newV1);
console.log(newV2);
console.log("\n")

//задача 2

let a = 5, b = 3, c = 7;
if((a + b > c)&&(b + c > a)&&(a + c > b)){
    console.log("треугольник существует")
    let p = (a + b + c)/2;
    let s = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    console.log(`периметр = ${p*2}`);
    console.log(`площадь = ${Math.round(s)}`);
    console.log(`соотношение = ${Math.round(p*2/s)}`);
}
else{
    console.log("треугольника не существует")
}
console.log("\n")

//задача 3

// let answer;
// let result = prompt('Введите число', '');
// while (isNaN(result)) {
    // alert('Ошибка, введено не число');
    // result = prompt('Введите число', '')
// }
// for(let i = 0; i <= result; i++){
    // if(i % 5 === 0 && i!=0){
        // answer = 'fizz buzz';
    // }else if(i % 2 === 0){
        // answer = 'buzz';
    // } else{
        // answer = 'fizz';
    // };
    // console.log(`"${i} ${answer}"`);
// };
console.log("\n")

//задача 4

let tree = '* \n';
for(let i = 2; i <= 12; i++){
    if(i % 2 === 0){
        for(k = 1; k <= i; k++){
            tree += '#';
        }
        tree += '\n';
        }else{
            for(k = 1; k <= i; k++){
                tree += '*';
            }
            tree += '\n';
        }
    }
tree += '||';
console.log(tree);
console.log("\n")

//задача 5

let answer = 3;
let numb;
do{
    numb = prompt('Угадайте число', '');
    if (isNaN(numb)){
        console.log('Ошибка, введено не число');
    }else if(answer > numb){
        console.log('Ваше число меньше');
    }else if(answer < numb){
        console.log('Ваше число больше');
    }else if(numb == answer){
        console.log('Вы угадали!');
        break;
}} while (numb !== answer);
console.log("\n")

//задача 6

// let n = prompt('Введите делимое', '');
// let x = prompt('Введите делитель', '');
// let y = prompt('Введите делитель', '');
// console.log(`n = ${n}, x = ${x}, y = ${y}, `);
// let flag;
// flag = (n % x) + (n % y);
// if(flag == 0){
    // console.log(true);
// }else{
    // console.log(false);
// }
// console.log("\n")

//задача 7

let month = '7', firstQuarter = '123', secondQuarter = '456', thirdQuarter = '789', fourthQuarter = '101112';
switch (true) {
    case firstQuarter.includes(month):
        console.log(`месяц ${month} => 1 квартал`)
        break
    case secondQuarter.includes(month):
        console.log(`месяц ${month} => 2 квартал`)
        break
    case thirdQuarter.includes(month):
        console.log(`месяц ${month} => 3 квартал`)
        break
    case fourthQuarter.includes(month):
        console.log(`месяц ${month} => 4 квартал`)
        break
    }