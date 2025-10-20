/**
 * Password Validator
 * Author: Alessandro Scattaglia
 * Description: This script validates passwords according to the following rules:
 *              - At least 8 characters long
 *              - At least one uppercase letter
 *              - At least one lowercase letter
 *              - At least one digit
 *              - At least one symbol
 * Example usage:
 *   validatePassword("Abcdefg$1"); // returns true
 *   validatePassword("abcdefg1");  // throws custom error
 */

function validatePassword(password) {
  const errors = [];

  if (password.length < 8) errors.push("too short (min 8 characters)");
  if (!/[A-Z]/.test(password)) errors.push("missing uppercase letter");
  if (!/[a-z]/.test(password)) errors.push("missing lowercase letter");
  if (!/[0-9]/.test(password)) errors.push("missing digit");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("missing symbol");

  if (errors.length > 0) {
    throw {
      name: "InvalidPasswordError",
      message: "Invalid password format - " + errors.join(", ")
    };
  }

  return true;
}

// Test cases
const testPasswords = [
  "Abcdefg$1",   // valid
  "abcdefg1",    // missing uppercase & symbol
  "ABCDEFGH1$",  // missing lowercase
  "abcdEFGH$",   // missing digit
  "A1$bc",       // too short
  "Password1!",  // valid
];

testPasswords.forEach(pw => {
  try {
    console.log(`Testing "${pw}":`, validatePassword(pw));
  } catch (error) {
    console.error(`Testing "${pw}":`, error.message);
  }
});
