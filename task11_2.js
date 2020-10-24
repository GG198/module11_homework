/* 11.2 Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны.
Обратите внимание на числа 0 и 1.
 */

let input = prompt('Enter a prime number');
primes = +input;

function isPrime(n){
    if (typeof n === 'number' && !isNaN(n)){
        if (n <= 1 || n > 1000) {
            return 'Данные не верны';

        } else{
            for(let x = 2; x < n; x++){
                if(n % x === 0){
                    return 'Not a prime number';
                }
            }
            return 'Is a prime number';
        }
    } else {
        return 'Something went wrong. Enter a prime number.'
    }
}
alert(`${primes} - ${isPrime(primes)}`);
