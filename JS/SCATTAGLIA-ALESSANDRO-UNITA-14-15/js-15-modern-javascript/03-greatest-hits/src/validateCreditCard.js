/**
 * Author: Alessandro Scattaglia
 * 
 * Exercise: Credit Card Validation
 * 
 * Description:
 * Validates a credit card number based on several rules:
 *  - Must contain exactly 16 digits (ignoring dashes).
 *  - Must not contain letters or invalid characters.
 *  - Final digit must be even.
 *  - The sum of all digits must be greater than 16.
 *  - All digits cannot be the same.
 * 
 * @example
 * validateCreditCard('9999-9999-8888-0000');
 * // { valid: true, number: '9999-9999-8888-0000' }
 * 
 * validateCreditCard('4444-4444-4444-4444');
 * // { valid: false, number: '4444-4444-4444-4444', error: 'same_digit' }
 */

export const validateCreditCard = (card) => {
  const cardNumber = card.replaceAll('-', '');

  if (cardNumber.length !== 16) {
    return logResult(card, false, 'wrong_length');
  }

  if (/[A-Za-z]/.test(cardNumber)) {
    return logResult(card, false, 'invalid_characters');
  }

  if (Number(cardNumber.at(-1)) % 2 !== 0) {
    return logResult(card, false, 'odd_final_digit');
  }

  const sum = [...cardNumber].reduce((acc, d) => acc + Number(d), 0);
  if (sum <= 16) {
    return logResult(card, false, 'sum_less_than_16');
  }

  if (new Set(cardNumber).size === 1) {
    return logResult(card, false, 'same_digit');
  }

  return logResult(card, true);
};

const logResult = (card, valid, error = null) => {
  const box = `
================================
= number : ${card} =
= valid : ${String(valid).padEnd(21)}=
${error ? `= error : ${error.padEnd(21)}=` : ''}
================================`;
  console.log(box);
  return error ? { valid, number: card, error } : { valid, number: card };
};
