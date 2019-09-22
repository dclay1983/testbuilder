// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  let len = cardNumber.length;
  let prefix = parseInt(cardNumber.slice(0, 2))
  
  if (len === 14 && (prefix == 38 || prefix == 39)) {
    // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
    return "Diner's Club";
  } else if (len === 15 && (prefix == 34 || prefix == 37)) {
    // The American Express network always starts with a 34 or 37 and is 15 digits long
    return "American Express";
  }else if (len === 16 && (prefix >= 51 && prefix <= 55)) {
    // The MasterCard network always starts with 51-55 and is 16, digits long
    return "MasterCard";
  }else if ((len === 13 || len === 16 || len === 19) && (prefix >= 40 && prefix <= 49)) {
    // The Visa network always starts with 4 and is 13, 16, or 19 digits long
    return "Visa";
  } else {
    if ((len === 16 || len === 19) && (prefix === 60 || prefix === 64 || prefix === 65)) {
    // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
      if (prefix === 65) {
        return "Discover";
      } else {
        prefix = parseInt(cardNumber.slice(0, 4));
        if (prefix === 6011 || (prefix >= 6440 && prefix <= 6499)) {
          return "Discover";
        }
      }
    } else if ((len >= 12 && len <= 19) && (prefix == 50 || prefix == 63)) {
      // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
      prefix = parseInt(cardNumber.slice(0, 4));
      if (prefix === 5018 || prefix === 5020 || prefix === 5038 || prefix === 6304) {
          return "Maestro";
      }

    }
  }
};


