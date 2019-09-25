// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var networkCards = [
  // The Diner's Club network always starts with a 38 or 39 and is 14 
  // digits long
  {name: "Diner's Club", lengths: [14], prefixes: [38, 39]},

  // The American Express network always starts with a 34 or 37 and is 15 
  // digits long
  {name: "American Express", lengths: [15], prefixes: [34, 37]},

  // The MasterCard network always starts with 51-55 and is 16, digits long
  {name: "MasterCard", lengths: [16], prefixRanges: [{min: 51, max: 55}]},

  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110,
  // 6333, or 6759 and a length of 16, 18, or 19.
  {name: "Switch", lengths: [16, 18, 19], 
    prefixes: [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110]},

  // The Visa network always starts with 4 and is 13, 16, or 19 digits long
  {name: "Visa", lengths: [13, 16, 19], prefixRanges: [{min: 40, max: 49}]},

  // Discover always has a prefix of 6011, 644-649, or 65,
  // and a length of 16 or 19.
  {name: "Discover", lengths: [16, 19], prefixes: [6011, 65], 
    prefixRanges: [{min: 644, max: 649}]},

  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of
  // 12-19.
  {name: "Maestro", lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    prefixes: [5018, 5020, 5038, 6304]},

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288
  // and a length of 16-19.
  {name: "China UnionPay", lengths: [16, 17, 18, 19],
    prefixRanges: [{min: 622126, max: 622925}, {min: 624, max: 626}, {min: 6282, max: 6288}]}
]

var checkLength = function(cardLength, lengths) {
  for (let i = 0; i < lengths.length; i++) {
    if (cardLength === lengths[i]) {return true;}
  }
  return false;
};

var checkPrefix = function(cardNumber, prefixes, maxPrefixLength) {
  for (let i = 0; i < prefixes.length; i++) {
    let len = prefixes[i].toString().length;
    if (len > maxPrefixLength) {
      if (parseInt(cardNumber.slice(0, len)) === prefixes[i]) {
        return len;
      }
    }
  }
  return false;
}

var checkPrefixRanges = function(cardNumber, prefixRanges, maxPrefixLength) {
  for (let i = 0; i < prefixRanges.length; i++) {
    let len = prefixRanges[i].min.toString().length;
    if (len > maxPrefixLength) {
      if (parseInt(cardNumber.slice(0, len)) >= prefixRanges[i].min &&
        parseInt(cardNumber.slice(0, len)) <= prefixRanges[i].max) {
        return len;
      }
    }
  }
  return false;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  let cardLength = cardNumber.length;
  let matchedCard = {name: undefined, prefixLength: 0}

  networkCards.forEach(function (networkCard) {
    if (checkLength(cardLength, networkCard.lengths)) {
      let testPrefix = networkCard.prefixes ? checkPrefix(cardNumber, networkCard.prefixes,
        matchedCard.prefixLength) : false;
      if (testPrefix) {
        matchedCard.name = networkCard.name;
        matchedCard.prefixLength = testPrefix;
      } else {
        testPrefix = networkCard.prefixRanges ? checkPrefixRanges(cardNumber, networkCard.prefixRanges,
          matchedCard.prefixLength) : false;
        if (testPrefix) {
          matchedCard.name = networkCard.name;
          matchedCard.prefixLength = testPrefix;
        }
      }
    }
  })
  return matchedCard.name;
};