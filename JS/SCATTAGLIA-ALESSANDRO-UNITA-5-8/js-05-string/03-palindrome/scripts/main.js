/**
 * Author: Alessandro Scattaglia
 * 
 * Checks if a string is a palindrome and logs the result.
 * @example
 * // Outputs:
 * // true
 */

function isPalindrome(str) {
    if (str == str.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("itopinonavevanonipoti"));
