// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Visa network always has a prefix of 4, and a length of 13 or 16 or 19
  // MasterCard network always has a prefix of 51, 52, 53, 54, 55 and a length of 16

  var cardNumberTwoDigits = Number(cardNumber.substring(0, 2));
  var cardNumberThreeDigits = Number(cardNumber.substring(0, 3));
  var cardNumberFourDigits = Number(cardNumber.substring(0, 4));
  var cardNumberSixDigits = Number(cardNumber.substring(0, 6));

  if ((cardNumberTwoDigits === 38 || cardNumberTwoDigits === 39 ) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  }
  if ((cardNumberTwoDigits === 34 || cardNumberTwoDigits === 37 ) && cardNumber.length === 15) {
    return 'American Express';
  }
  if ((cardNumberTwoDigits >= 51 && cardNumberTwoDigits <= 55 ) && cardNumber.length === 16) {
    return 'MasterCard';
  }

  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  if ((cardNumberFourDigits === 6011 || (cardNumberThreeDigits >= 644 &&
    cardNumberThreeDigits <= 649) || cardNumberTwoDigits === 65) &&
  (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }

  if ((cardNumberFourDigits === 5018 || cardNumberFourDigits === 5020 ||
    cardNumberFourDigits === 5038 || cardNumberFourDigits === 6304) &&
  (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro';
  }

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
// and a length of 16, 18, or 19.

// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent
// conflict, you should choose the network with the longer prefix.

  if (((cardNumberSixDigits >= 622126 && cardNumberSixDigits <= 622925) ||
  (cardNumberThreeDigits >= 624 && cardNumberThreeDigits <= 626) ||
   (cardNumberFourDigits >= 6282 && cardNumberFourDigits <= 6288)) &&
   (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay';
  }

  if ((cardNumberFourDigits === 4903 || cardNumberFourDigits === 4905 ||
    cardNumberFourDigits === 4911 || cardNumberFourDigits === 4936 ||
    cardNumberFourDigits === 6333 || cardNumberFourDigits === 6759 ||
    cardNumberSixDigits === 564182 || cardNumberSixDigits === 633110) &&
    (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  } else if (cardNumber[0] === '4' && (cardNumber.length === 13 ||
    cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }
};



