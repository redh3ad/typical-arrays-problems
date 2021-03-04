exports.min = function min (array) {
if(arguments.length == 0) return 0;
if(array.length == 0) return 0;
let min = array[0];
for (let i = 0; i < array.length; i++) {
if (min > array[i]) min = array[i];
}
return min;
}

exports.max = function max (array) {
if(arguments.length == 0) return 0;
if(array.length == 0) return 0;
let max = array[0];
for (let i = 0; i < array.length; i++) {
if (max < array[i]) max = array[i];
}
return max;
}

exports.avg = function avg (array) {
let result = 0;
if(arguments.length == 0) return 0;
if(array.length == 0) return 0;
for (let i = 0; i< array.length; i++){
result+=array[i];
}
return result/array.length;
}
