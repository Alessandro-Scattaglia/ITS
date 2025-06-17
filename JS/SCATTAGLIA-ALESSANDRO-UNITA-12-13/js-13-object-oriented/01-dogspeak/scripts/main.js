/**
 * @description Adds a method to the String prototype that logs the string followed by " Woof!".
 * Useful for learning how to extend built-in prototypes in JavaScript.
 * @author Alessandro Scattaglia
 * @output
 * We like to learn Woof!
 * Dogs are smart Woof!
 * @example
 * let s = 'We like to learn';
 * s.dogSpeak(); // We like to learn Woof!
 * 'Dogs are smart'.dogSpeak(); // Dogs are smart Woof!
 */

String.prototype.dogSpeak = function() {
    console.log(this + ' Woof!');
  };
  
  let s = 'We like to learn';
  s.dogSpeak();
  
  'Dogs are smart'.dogSpeak();
  