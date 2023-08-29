// Task 1. Написать функцию, которая получает один аргумент (массив целых чисел: положительных и отрицательных) и возвращает сумму положительных чисел:
function positive_nums(array){
    let sum_positive_nums = 0;
    for (i=0;i<array.length;i++){
        if(array[i]<0){
            sum_positive_nums+=array[i];
        }
    }
    return sum_positive_nums;
}

let array=[1,2,3,4,5,0,-32,-1,-3];


console.log(positive_nums(array));


// Task 2. Написать функцию, которая получает один аргумент (массив целых чисел) и возвращает наибольшее число из массива:



function highest_value(array){
    let bigestNamber = arr[0];
    for(i=0;i<=array.length;i++){
        if (array[i]>bigestNamber){
            bigestNamber=array[i];
        }
    }
    return bigestNamber;
}

let array = [-5, -52, 30, 11, 45, -50, 10];

console.log(highest_value(array))