let map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

const arr = [1,2,3];
const double = function(n) {
    return n * 2;
}

const doubleArray = map(arr, double);

console.log(doubleArray);