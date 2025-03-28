function mySetInterval(callback, delay) {
    let counter = 1;
    function repeat() {
        callback();
        console.log(`Counter: ${counter}`);
        if (counter < 15) {
            setTimeout(repeat, delay);
        }
        counter++;
    }
    setTimeout(repeat, delay);
}

mySetInterval(() => console.log("Hello!"), 1000);