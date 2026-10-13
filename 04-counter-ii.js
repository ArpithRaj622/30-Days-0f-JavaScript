let createCounter = function(init) {
    const original = init;
    function increment() {
        return ++init;
    }
    function decrement() {
        return --init;
    }
    function reset() {
        init = original;
        return init;
    }

    return { increment, decrement, reset };
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());