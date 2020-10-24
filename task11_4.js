/* 11.4 Написать ф-ю, к-я принимает два числа. Каждую сек.
выводить в консоль, начиная от первогво и заканчивая вторым.
Используй setInterval. П-р: (1, 3). Выводить: [1, 2, 3]
 */
let getRange = function (start, end){
    let arr = [];
    let cnt = start;
    while (cnt <= end){
        arr.push(cnt);
        cnt++;
    }
    console.log(arr);
}

let intervalId = setInterval(getRange, 1000, -1, 3);

setTimeout(function(){
    clearInterval(intervalId)
}, 7000);