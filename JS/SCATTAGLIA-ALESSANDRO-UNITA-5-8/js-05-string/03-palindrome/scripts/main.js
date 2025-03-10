/**
 * Author: Alessandro Scattaglia
 * 
 * Checks if a string is a palindrome and logs the result.
 * @example
 * // Outputs:
 * // true
 */

function isPalindrome(string) {
    if (string == string.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("itopinonavevanonipoti"));
