// String.prototype functions
// String.prototype.iterator

const str = "Hello World";

function iterateString(str) {
    const iterator = str[Symbol.iterator]();
    let theChar = iterator.next();

    while (!theChar.done) {
        if (theChar.value === " ") {
            theChar = iterator.next();
            continue;
        }
        console.log(theChar.value);
        theChar = iterator.next();
    }
}

function eachChar(str) {
    for (let v of str) {
        if (v == " ") {
            continue;
        }
        console.log("Sempar Fi ", v);
    }
}

function mdnExample() {
    // \uD835\uDC68 UTF-16 code
    const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

    for (const v of str) {
        console.log(v);
    }
}

// iterateString(str);
// eachChar(str);
// mdnExample();

// String.at
// returns the value at the given index

// Providing negative values iterates the string in reverse...
function mdnAt(str, index) {
    let atIndex = str.at(index);
    console.log(`The character: ${atIndex} is at index: ${index}`);
}

// mdnAt(str, 6);

// String.charAt
// Similar to the at() prototype function. It just doesn't take negative values as an index.
// The index should always be inclusive to the range of the length of the string.

function mdnCharAt(str, index) {
    console.log(`The Character: ${str.charAt(index)} is at: ${index}`);
}

// mdnCharAt(str, 6);

// String.charCodeAt()
// returns the UTF-16 code value of the character.

function codeAt() {
    const sentence = "The quick brown fox jumps over the lazy dog.";
    const index = 6;

    console.log(
        `Character code ${sentence.charCodeAt(
            index
        )} is equal to ${sentence.charAt(index)}`
    );
}

// codeAt();

// String.codePointAt()
// returns the full unicode code. Similar to charCodeAt().
// Visit MDN for example.

// String.concat()
// Concatenates the strings.

function mdnConcat() {
    const str = "Hello";
    const str1 = "Fren";

    let str2 = str.concat(", ", str1);
    console.log(str2);
}

// mdnConcat();

// String.endsWith()
// returns a value boolean based on whether the string end with the provided string, character
// Takes the endPosition as a second argument. Defaults to str.length. The endPosition is exclusive

function mdnEndsWith(str) {
    console.log(str.endsWith("lo", 5));
}

// mdnEndsWith(str);

// String.fromCharCode()
// Returns the value of the UTF-16 code

function mdnFromCharCode() {
    console.log(String.fromCharCode(189, 43, 190, 61));
    // also fromCodePoint()
    console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
}

// mdnFromCharCode();

// String.includes()
// Returns a boolean based on whether a string exists within the other string. Is case sensitive

function checkIncludes(word) {
    const str = "The quick brown fox jumps over the lazy dog";
    console.log(
        `The word ${word} ${
            str.includes(word) ? "is" : "is not"
        } present in the string`
    );
}

// checkIncludes("fox");

// String.indexOf() / String.lastIndexOf()
// Provides the first occurence of the substring in a string.
// Also takes a starting position in case of finding the substring at or after the start position.

function strIndexOf() {
    // MDN Example
    const paragraph = "I think Ruth's dog is cuter than your dog!"; // "NO!"

    const searchTerm = "dog";
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
    // Expected output: "The index of the first "dog" is 15"

    console.log(
        `The index of the second "${searchTerm}" is ${paragraph.indexOf(
            searchTerm,
            indexOfFirst + 1
        )}`
    );
    // Expected output: "The index of the second "dog" is 38"

    // Also the lastIndexOf()
    console.log(
        `The index of the last "${searchTerm}" is ${paragraph.lastIndexOf(
            searchTerm
        )}`
    );
}

// strIndexOf();

// Regex
const re = /ab+c/; // This for a constant pattern.
const reg = new RegExp("ab+c"); // This when you are damn sure the pattern will change.
// The object is compiled on runtime.

// * => Zero or more times. + => One or more times.

// String.match()
// Returns an array of all the matched characters of the string.

function jsMatch() {
    const str = "The quick brown fox jumps over the lazy dog. It barks.";
    const re = /[A-Z]/g;

    console.log(str.match(re));
}

// jsMatch();

// String.matchAll()

function jsMatchAll() {
    const regexp = /t(e)(st(\d?))/g;
    const str = "test1test2";

    const array = [...str.matchAll(regexp)];

    console.log(array[0]);
    // Expected output: Array ["test1", "e", "st1", "1"]

    console.log(array[1]);
    // Expected output: Array ["test2", "e", "st2", "2"]
}

// jsMatchAll();

// String.normalize()
// Turns Unidoce to its normalized form

function jsNormalize() {
    const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
    const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

    console.log(`${name1}, ${name2}`);
    // Expected output: "Amélie, Amélie"
    console.log(name1 === name2);
    // Expected output: false
    console.log(name1.length === name2.length);
    // Expected output: false

    const name1NFC = name1.normalize("NFC");
    const name2NFC = name2.normalize("NFC");

    // Normalized Forms:
    /*
        NFC
        NFD
        NFKC
        NFKD
    */

    console.log(`${name1NFC}, ${name2NFC}`);
    // Expected output: "Amélie, Amélie"
    console.log(name1NFC === name2NFC);
    // Expected output: true
    console.log(name1NFC.length === name2NFC.length);
    // Expected output: true
}

// jsNormalize();

// String.padEnd() Right Pad!
// String.padStart() Left Pad!
// Adds given character to right if the given length is not reached

function jsPad() {
    const str = "foo";
    const str1 = "bar";
    console.log(str.concat(" ", str1).padEnd(12, "."));
    console.log(str1.concat(" ", str).padStart(12, "."));
}

// jsPad();

// String.raw()
// Doesn't process the escape characters in a template literal. Damn!

function jsRaw() {
    const filePath = String.raw`C:\Users\UmairKhan\OneDrive - Paysys labs\Desktop\Projects`;
    console.log(filePath);
}

// jsRaw();

// String.repeat()
// Repeats the string

function jsRepeat() {
    const mood = "empty. ";
    console.log(`I feel ${mood.repeat(3)}`);
}

// jsRepeat();

// String.replace()
// Returns a new string with the replacement

function jsReplace() {
    const paragraph = "I think Ruth's dog is cuter than your dog!";

    console.log(paragraph.replace("Ruth's", "my"));
    // Expected output: "I think my dog is cuter than your dog!"

    const regex = /Dog/i;
    console.log(paragraph.replace(regex, "ferret"));
    // Expected output: "I think Ruth's ferret is cuter than your dog!"
}

// jsReplace();

// String.replaceAll
// Replaces all. Returns a new string.

function jsReplaceAll() {
    const paragraph = "I think Ruth's dog is cuter than your dog!";

    const regex = /Dog/gi;
    console.log(paragraph.replaceAll(regex, "ferret"));
    // Expected output: "I think Ruth's ferret is cuter than your dog!"
}

// jsReplaceAll();

// String.search()
// Takes regex as a parameter

function jsSearch() {
    const paragraph = "I think Ruth's dog is cuter than your dog!";

    // Anything not a word character, whitespace or apostrophe
    const regex = /[^\w\s']/g; // Regex is confusing...

    console.log(paragraph.search(regex));
    // Expected output: 41

    console.log(paragraph[paragraph.search(regex)]);
    // Expected output: "!"
}

// jsSearch();

// String.slice()
// Returns a new string. The end index is not inclusive.
// Can also take negative values.

function jsSlice() {
    const str = "The quick brown FOX jumps over the lazy dog.";
    console.log(str.slice(16, 19).at(-1));
    console.log(str.slice(16, 19).at(-2));
    console.log(str.slice(16, 19).at(-3));
}

// jsSlice();

// String.split()
// Splits up a string and returns the substrings in a array

function jsSplit() {
    const str = "The quick brown fox jumps over the lazy dog."; // Damned Fox!
    console.log(str.split(" "));
}

// jsSplit();

// String.startsWith()
// Takes a substring and a startPosition. The start position is inclusive.

function jsStartsWith() {
    const str1 = "Saturday night plans";

    console.log(str1.startsWith("Sat"));
    // Expected output: true

    console.log(str1.startsWith("Sat", 1));
    // Expected output: false
}

// jsStartsWith();

// String.substring()
// It swaps the parameters if end is lower than the start. Treats negative value a zero
// slice can work in reverse

function jsSubString() {
    const str = "The quick brown FOX jumps over the lazy dog.";
    console.log(str.substring(16, 19));
    console.log(str.slice(-28, -25));
}

// jsSubString();

// String.toLowerCase() / String.toUpperCase()

function jsToCase() {
    const str = "HELLO FREN.";
    const str1 = "soft boi";
    console.log(str.toLowerCase());
    console.log(str1.toUpperCase());
}

// jsToCase();

// String.toString()
// Returns the value in a string

function jsToString() {
    const strObj = new String("Foo");
    console.log("Original Value: ", strObj);
    console.log("toString Value: ", strObj.toString());
}

// jsToString();

// String.trim()
// Cuts off the whitespaces.

function jsTrim() {
    const str = "     Sempar Fi!     ";
    console.log(str.trim());
    console.log(str.trimStart());
    console.log(str.trimEnd());
}

// jsTrim();

// String.valueOf()
// Returns the primitive value of a string object.

function jsValueOf() {
    const stringObj = new String("foo");

    console.log(stringObj);
    // Expected output: String { "foo" }

    console.log(stringObj.valueOf());
    // Expected output: "foo"
}

// jsValueOf();

// That's All Folks!
