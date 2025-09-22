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


function validateCreditCard(card) {
    const splitted_card = card.split('');
    const card_number = splitted_card.join("").replaceAll("-", "");


    if (card_number.length !== 16) {
        console.log(`
================================
= number : ${card} =
= valid : false                =
= error : wrong_length         =
================================`);
        return { valid: false, number: card, error: 'wrong_length' };
    }

    if (card_number.match(/[A-Za-z]/gm)) {
        console.log(`
================================
= number : ${card} =
= valid : false                =
= error : invalid_characters   =
================================`);
        return { valid: false, number: card, error: 'invalid_characters' };
    }

    if (card_number.slice(-1) % 2 !== 0) {
        console.log(`
================================
= number : ${card} =
= valid : false                =
= error : odd_final_digit      =
================================`);
        return { valid: false, number: card, error: 'odd_final_digit' };
    }

    let sum = 0;
    for (let i = 0; i < card_number.length; i++) {
        sum += Number(card_number[i]);
    }
    if (sum <= 16) {
        console.log(`
================================
= number : ${card} =
= valid : false                =
= error : sum_less_than_16     =
================================`);
        return { valid: false, number: card, error: 'sum_less_than_16' };
    }


    let first = card_number[0];
    for (let i = 1; i < card_number.length; i++) {
        if (card_number[i] !== first) {
            console.log(`
================================
= number : ${card} =
= valid : true                 =
================================`);
            return { valid: true, number: card };
        }
    }


    console.log(`
================================
= number : ${card} =
= valid : false                =
= error : same_digit           =
================================`);
    return { valid: false, number: card, error: 'same_digit' };
}

validateCreditCard('9999-9999-8888-0000');
validateCreditCard('4444-4444-4444-4444');
validateCreditCard('6666-6666-6666-1666');
