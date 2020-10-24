//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент,
// то он учитывается и выводится отдельно.
//Оформить решение в виде функции.
let array1 = [1, 2, 3, 0,"n",null, 4, "m", 5, "45", NaN, false, true];
let array2 = [15, 17, 28, "33", undefined, 0];

let count = function countEvenOdd(arr) {
    let countNull = 0;
    let countEven = 0;
    let countOdd = 0;
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

count(array1);
count(array2);

// Суть решения верная, но функция использована неправильно. В текущем виде использование функции не имеет смысла, т.к. она использует один и тот же массив (arr). Кроме того, переменные-счетчики находятся вне функции и при повторном запуске они не будут равны 0, а будут содержать значения, получившиеся при первом исполнении функции. Таким образом, её нельзя переиспользовать, а переиспользование - это одно из главных преимуществ использования функций. 
// Чтобы было верно, массив нужно передавать в функцию в качестве аргумента, а также перенести объявления счетчиков внутрь функции, чтобы при каждом новом использовании они обнулялись. Выше исправила