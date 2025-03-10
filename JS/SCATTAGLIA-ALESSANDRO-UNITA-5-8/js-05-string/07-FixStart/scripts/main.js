function FixStart(string) {
    let first = string[0];
    console.log(first + string.slice(1).replaceAll(first, "*"));
}

FixStart("bubble");
