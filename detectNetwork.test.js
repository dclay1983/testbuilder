/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
/* var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
}); */
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() { 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901235') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  let assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  let assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  let expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  let assert = chai.assert;

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011456789012294') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011456789012294384') === 'Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    assert(detectNetwork('6443456789012294') === 'Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    assert(detectNetwork('6443456789012294384') === 'Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    assert(detectNetwork('6453456789012294') === 'Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    assert(detectNetwork('6453456789012294384') === 'Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    assert(detectNetwork('6463456789012294') === 'Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    assert(detectNetwork('6463456789012294384') === 'Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    assert(detectNetwork('6473456789012294') === 'Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    assert(detectNetwork('6473456789012294384') === 'Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    assert(detectNetwork('6483456789012294') === 'Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    assert(detectNetwork('6483456789012294384') === 'Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    assert(detectNetwork('6493456789012294') === 'Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    assert(detectNetwork('6493456789012294384') === 'Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6523456789012294') === 'Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6523456789012294384') === 'Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  let assert = chai.assert;
  let prefixes = [5018, 5020, 5038, 6304]

  prefixes.forEach( function(prefix) {
    for (let len = 12; len <= 19; len++) {
      let cardNumber = prefix.toString().split("");
      while (cardNumber.length < len) {
        cardNumber.push(Math.floor(Math.random("") * 10))
      }
      cardNumber = cardNumber.join("")
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        assert(detectNetwork(cardNumber) === 'Maestro');
      });
    }
  });
});
describe('China UnionPay', function() {
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  let assert = chai.assert;
  let ranges = [{min: 622126, max: 622925}, {min: 624, max: 626}, {min: 6282, max: 6288}]
  ranges.forEach( function (range) {
    for (let prefix = range.min; prefix <= range.max; prefix++) {
      for (let len = 16; len <= 19; len++) {
        let cardNumber = prefix.toString().split("");
        while (cardNumber.length < len) {
          cardNumber.push(Math.floor(Math.random("") * 10))
        }
        cardNumber = cardNumber.join("")
        it(`has a prefix of ${prefix} and a length of ${len}`, function() {
          assert(detectNetwork(cardNumber) === 'China UnionPay');
        });
      }
    }
  });
});
describe('Switch', function() {
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  let assert = chai.assert;
  let prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  let lengths = [16, 18, 19];
  prefixes.forEach( function (prefix) {
    lengths.forEach( function (len) {
      let cardNumber = prefix.toString().split("");
      while (cardNumber.length < len) {
        cardNumber.push(Math.floor(Math.random("") * 10))
      }
      cardNumber = cardNumber.join("")
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        assert(detectNetwork(cardNumber) === 'Switch');
      });
    });
  });
});