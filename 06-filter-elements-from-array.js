let filter = function(arr, fn) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
}

const arr = [10,20,30,40];
const greaterThan10 = function(n) {
    return n > 10;
}

const ElementsGreaterThan10 = filter(arr, greaterThan10);

console.log(ElementsGreaterThan10);