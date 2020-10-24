/* 11.5 Напишите функцию, которая принимает два натуральных числа
x и n и возвращает x в степени n, т.е. умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис
 */
let expo = (a, b) => {
    if (typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b)) {
        console.log(a ** b);
    } else
    {
        console.log('Be careful,enter a number');
    }
}
expo(-2,-3);