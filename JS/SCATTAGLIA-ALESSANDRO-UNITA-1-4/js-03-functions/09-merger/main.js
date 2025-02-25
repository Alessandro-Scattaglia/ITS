function merger(a, b) {
    if (typeof a === "number" && !isNaN(a) && typeof b === "number" && !isNaN(b)) {
        console.log(a + b)
    } else if (typeof a === "string" && typeof b === "string") {
        console.log(`${a} ${b}`);
    }
    else {
        return null;
    }
}


console.log(merger(1,2));
console.log(merger("a","b"));
console.log(merger(1,"ò"));
