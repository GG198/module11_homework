/* 11.3 Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел.
Выведите в консоль результат.
 */
function createAdder(num1) {
    return function addA(num2) {
        return num1 + num2
    }
}
let add =  createAdder(2);
console.log(`Result is: ${add(5)}`)
