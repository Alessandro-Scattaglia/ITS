/**
 * @description Adds a method to the String prototype called toStrangeKebab() that converts a string
 * to a specific kebab-case format by extracting meaningful lowercase words and numbers,
 * removing special characters, and preserving the intended structure.
 * This helps practice regex, string transformation, and prototype extension.
 * @author Alessandro Scattaglia
 * @output
 * my-name-is-my-passport-verify-me
 * my-name-is-my-passport-verify-me-m-m-m
 * my-name-is-my-passport-p
 * m-y-name-is-2023
 * mynameismypassport
 * my-name-is
 * my-name-is
 * @example
 * 'My Name Is My Passport Verify Me MMM'.toStrangeKebab();
 * // => "my-name-is-my-passport-verify-me-m-m-m"
 */

String.prototype.toStrangeKebab = function () {
    return this
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')       // Replace non-alphanumeric with hyphen
      .replace(/(^-+|-+$)/g, '')         // Trim leading/trailing hyphens
      .replace(/-{2,}/g, '-');           // Replace multiple hyphens with one
  };
  
  const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
  ];
  
  source.forEach(item => console.log(item.toStrangeKebab()));
  