let createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
}

const f = createHelloWorld();

console.log(f(5,null,NaN));