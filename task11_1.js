//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент,
// то он учитывается и выводится отдельно.
//Оформить решение в виде функции.
let arr = [1, 2, 3, 0,"n",null, 4, "m", 5, "45", NaN, false, true];
let countNull = 0;
let countEven = 0;
let countOdd = 0;
let count = function countEvenOdd() {
    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                countNull ++;
            } else if (arr[i] % 2 === 0) {
                countEven ++;
            } else {
                countOdd ++;
            }
        }
    }
    console.log("Total of odd numbers are: " + countOdd);
    console.log("Total of even numbers are: " + countEven);
    console.log("Total of 0 numbers are: " + countNull);
}

count();