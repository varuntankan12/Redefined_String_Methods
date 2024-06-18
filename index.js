String.prototype.toLowerCase = function () {
    let code = [];

    for (let i = 0; i < this.length; i++) {
        code[i] = this[i].charCodeAt(0);
    }

    for (let i = 0; i < code.length; i++) {
        if (code[i] >= 62 && code[i] < 91) {
            code[i] += 32;
        }
    }

    return String.fromCharCode(...code);
}


String.prototype.toUpperCase = function () {
    let code = [];

    for (let i = 0; i < this.length; i++) {
        code[i] = this[i].charCodeAt(0);
    }

    for (let i = 0; i < code.length; i++) {
        if (code[i] >= 97 && code[i] < 123) {
            code[i] -= 32;
        }
    }

    return String.fromCharCode(...code);
}

String.prototype.substring = function (from, to = this.length) {
    let newStr = "";
    for (let i = from; i < to; i++) {
        newStr += this[i];
    }

    return newStr;
}

String.prototype.split = function (symbol = "") {

    let splitted = [];
    if (symbol == "") {
        for (let i = 0; i < this.length; i++) {
            splitted[i] = this[i];
        }
    } else {
        let index = 0;
        for (let i = 0; i < this.length; i++) {
            if (this[i] != symbol) {
                splitted[index] == undefined ? splitted[index] = this[i] : splitted[index] += this[i];
            } else {
                index += 1;
            }
        }
    }

    return splitted;
}




String.prototype.charAt = function (index) {
    if (this[index] == undefined) {
        return "";
    } else {
        return this[index];
    }
}





String.prototype.charCodeAt = function (index) {
    let asciiobj = {
        '\u0000': 0, 'NUL': 0,
        '\u0001': 1, 'SOH': 1,
        '\u0002': 2, 'STX': 2,
        '\u0003': 3, 'ETX': 3,
        '\u0004': 4, 'EOT': 4,
        '\u0005': 5, 'ENQ': 5,
        '\u0006': 6, 'ACK': 6,
        '\u0007': 7, 'BEL': 7,
        '\u0008': 8, 'BS': 8,
        '\u0009': 9, 'HT': 9,
        '\u000A': 10, 'LF': 10,
        '\u000B': 11, 'VT': 11,
        '\u000C': 12, 'FF': 12,
        '\u000D': 13, 'CR': 13,
        '\u000E': 14, 'SO': 14,
        '\u000F': 15, 'SI': 15,
        '\u0010': 16, 'DLE': 16,
        '\u0011': 17, 'DC1': 17,
        '\u0012': 18, 'DC2': 18,
        '\u0013': 19, 'DC3': 19,
        '\u0014': 20, 'DC4': 20,
        '\u0015': 21, 'NAK': 21,
        '\u0016': 22, 'SYN': 22,
        '\u0017': 23, 'ETB': 23,
        '\u0018': 24, 'CAN': 24,
        '\u0019': 25, 'EM': 25,
        '\u001A': 26, 'SUB': 26,
        '\u001B': 27, 'ESC': 27,
        '\u001C': 28, 'FS': 28,
        '\u001D': 29, 'GS': 29,
        '\u001E': 30, 'RS': 30,
        '\u001F': 31, 'US': 31,
        ' ': 32, '!': 33, '"': 34, '#': 35, '$': 36, '%': 37, '&': 38, "'": 39,
        '(': 40, ')': 41, '*': 42, '+': 43, ',': 44, '-': 45, '.': 46, '/': 47,
        '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54, '7': 55,
        '8': 56, '9': 57, ':': 58, ';': 59, '<': 60, '=': 61, '>': 62, '?': 63,
        '@': 64, 'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71,
        'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78, 'O': 79,
        'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85, 'V': 86, 'W': 87,
        'X': 88, 'Y': 89, 'Z': 90, '[': 91, '\\': 92, ']': 93, '^': 94, '_': 95,
        '`': 96, 'a': 97, 'b': 98, 'c': 99, 'd': 100, 'e': 101, 'f': 102, 'g': 103,
        'h': 104, 'i': 105, 'j': 106, 'k': 107, 'l': 108, 'm': 109, 'n': 110, 'o': 111,
        'p': 112, 'q': 113, 'r': 114, 's': 115, 't': 116, 'u': 117, 'v': 118, 'w': 119,
        'x': 120, 'y': 121, 'z': 122, '{': 123, '|': 124, '}': 125, '~': 126, '\u007F': 127, 'DEL': 127
    };

    return asciiobj[this[index]];
}


String.prototype.at = function (index) {
    return this[index];
}



String.prototype.slice = function (from, to = this.length) {
    let newStr = '';
    for (let i = from; i < to; i++) {
        if (i < this.length) {
            newStr += this[i];
        }
    }
    return newStr;
}




String.prototype.substr = function (from, size = this.length - from) {
    let newStr = '';
    for (let i = from; i < size; i++) {
        if (i < this.length) {
            newStr += this[i];
        }
    }
    return newStr;
}





String.prototype.concat = function (...strings) {
    let newStr = this;
    for (let i = 0; i < strings.length; i++) {
        newStr += strings[i];
    }

    return newStr;
}







String.prototype.trim = function () {
    let newStr = "";
    let front = 0;
    let end = this.length;
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== " ") {
            front = i;
            break;
        }
    }

    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] !== " ") {
            end = i;
            break;
        }
    }

    for (let i = front; i <= end; i++) {
        newStr += this[i];
    }

    return newStr;
}




String.prototype.trimStart = function () {
    let newStr = "";
    let index = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== " ") {
            index = i;
            break;
        }
    }

    for (let i = index; i < this.length; i++) {
        newStr += this[i];
    }

    return newStr;
}





String.prototype.trimEnd = function () {
    let newstr = '';
    let index = this.length;
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] !== " ") {
            index = i;
            break;
        }
    }

    for (let i = 0; i <= index; i++) {
        newstr += this[i];
    }

    return newstr;
}





String.prototype.padStart = function (size = 0, string = "") {
    let newStr = this;
    for (let i = this.length; i < size; i++) {
        newStr = string + newStr;
    }

    return newStr;
}






String.prototype.padEnd = function (size = 0, string = "") {
    let newStr = this;
    for (let i = this.length; i < size; i++) {
        newStr += string;
    }

    return newStr;
}







String.prototype.repeat = function (count) {
    let newStr = this;

    for (let i = 1; i < count; i++) {
        newStr += this;
    }

    return newStr;
}







String.prototype.replace = function (presentValue, replaceValue) {
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] == presentValue[0]) {
            let equal = true;
            let index = 0;
            for (let j = i; j < presentValue.length + i; j++) {
                if (this[j] != presentValue[index]) {
                    equal = false;
                }
                index += 1;
            }
            if (equal) {
                for (let j = 0; j < replaceValue.length; j++) {
                    newStr += replaceValue[j];
                }
                i += presentValue.length - 1;
            } else {
                newStr += this[i];
            }
        } else {
            newStr += this[i];
        }

    }
    return newStr;
}






let string = "This is a string that is being used to test all string methods.";

console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.charAt(5));
console.log(string.at(6));
console.log(string.slice(5, 16));
console.log(string.substr(16, 10)); // ??
console.log(string.concat(" ", "This part is concatinated"));
console.log("       string        ".trim()); //remove spaces before and after text
console.log("       string        ".trimStart()); 
console.log("       string        ".trimEnd());
console.log("string".padStart(20, "P"));
console.log("string".padEnd(20, "P"));
console.log("string ".repeat(2));
console.log(string.replace("string", "STRING"));
console.log(string.split(" "));