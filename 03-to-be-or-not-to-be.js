let expect = function(val) {
    const obj = {
        toBe(val1) {
            if (val === val1)
                return true;
            else 
                throw new Error("Not Equal");
        },
        notToBe(val1) {
            if (val !== val1) 
                return true;
            else 
                throw new Error("Equal");
        }
    }

    return obj;
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(6));