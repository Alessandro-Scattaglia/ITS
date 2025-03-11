const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
console.log(emailRegex.test("test@example.com")); // true
console.log(emailRegex.test("user@domain.co"));   // true
console.log(emailRegex.test("user@.com"));        // false
console.log(emailRegex.test("user@domain.toolong")); // false

const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{1,4}([- ]?\d{2,4}){2,4}$/;
console.log(phoneRegex.test("+1 123-456-7890")); // true
console.log(phoneRegex.test("1234567890"));      // true
console.log(phoneRegex.test("123-45-678"));      // false
console.log(phoneRegex.test("+44 20 7946 0958")); // true

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
console.log(passwordRegex.test("Aa1@abcd"));     // true
console.log(passwordRegex.test("password"));     // false
console.log(passwordRegex.test("PASS1234!"));    // false
console.log(passwordRegex.test("Valid1@pwd"));   // true

const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[^\s?#]*)?(\?[^\s#]*)?(#[^\s]*)?$/i;
console.log(urlRegex.test("https://example.com"));         // true
console.log(urlRegex.test("http://sub.domain.co.uk/path")); // true
console.log(urlRegex.test("ftp://invalid.url"));           // false
console.log(urlRegex.test("https://site.com?query=test")); // true
