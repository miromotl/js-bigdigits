// bigdigits.js
// ------------
// Read a string of digits as a command line argument and display these
// digits as "big" digits, as in the times of the big centralized line printers
// where the short names of the users and the job ids were printed in big
// letters on the first page of the printout.
//
// This is taken from the book "Programming Go"
//
// Run it with node:
// node bigdigits 123

"use strict";

let bigDigits = function ( ) {
    
    let bds = [
        ["  000  ", " 0   0 ", "0     0", "0     0", "0     0", " 0   0 ", "  000  "],
        [" 1 ", "11 ", " 1 ", " 1 ", " 1 ", " 1 ", "111"],
        [" 222 ", "2   2", "   2 ", "  2  ", " 2   ", "2    ", "22222"],
        [" 333 ", "3   3", "    3", "  33 ", "    3", "3   3", " 333 "],
        ["   4  ", "  44  ", " 4 4  ", "4  4  ", "444444", "   4  ", "   4  "],
        ["55555", "5    ", "5    ", " 555 ", "    5", "5   5", " 555 "],
        [" 666 ", "6    ", "6    ", "6666 ", "6   6", "6   6", " 666 "],
        ["77777", "    7", "   7 ", "  7  ", " 7   ", "7    ", "7    "],
        [" 888 ", "8   8", "8   8", " 888 ", "8   8", "8   8", " 888 "],
        [" 9999", "9   9", "9   9", " 9999", "    9", "    9", "    9"]
    ];

    return {
      length: bds[0].length,
      col: function (digit, row) {
          return bds[digit][row];
      }
    };
}();

let args = process.argv.slice(2);
//var stringOfDigits, row, col, line, digit;

if (args.length === 0) {
    console.log('usage: node bigdigits <whole number>');
    process.exit(0);
}

let stringOfDigits = args[0];

for (let row = 0; row < bigDigits.length; row += 1) {
    let line = "";
    for (let col = 0; col < stringOfDigits.length; col += 1) {
        let digit = stringOfDigits[col];
        console.assert(digit >= '0' && digit <= '9', 'invalid whole number');
        line += bigDigits.col(+digit, row) + ' ';
    }
    console.log(line);
}