function bubble(input) {
    for (let i = input.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (input[j] > input[j + 1]) {
                const temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }

    return input;
}

console.info(bubble([5, 9, 3, 14, 1, 8, 0, 2]));

function selection(input) {
    for (let i = 0; i < input.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[min]) {
                min = j;
            }
        }

        const temp = input[i];
        input[i] = input[min];
        input[min] = temp;
    }
}

console.info(bubble([5, 9, 3, 14, 1, 8, 0, 2]));


function sum(input, target) {
    let i = 0, j = input.length - 1;

    while (i < j) {
        let sum = input[i] + input[j];
        if (sum == target) {
            return [i + 1, j + 1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
}

console.info(sum([1, 2, 3, 5, 8, 9, 14], 11));

function square(target) {
    let i = 1, j = Math.sqrt(target);
    while (i <= j) {
        let sum = i * i + j * j;

        if (sum == target) {
            return [i, j];
        } else if (sum < target) {
            i++
        } else {
            j--;
        }
    }
}

console.info(square(25));

function reverse(input) {
    let i = 0, j = input.length - 1;

    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    const res = [];

    while (i <= j) {
        let l = input[i], r = input[j];

        if (!vowels.includes(input[i])) {
            res[i++] = l;
        } else if (!vowels.includes(input[j])) {
            res[j--] = r;
        } else {
            res[i++] = r;
            res[j--] = l;
        }
    }

    return res;
}

console.info(reverse("monday".split("")));

function validPalindrome(input) {
    for (let i = 0, j = input.length - 1; i < j; i++, j--) {
        if (input[i] != input[j]) {
            return isPalindrome(input, i, j - 1) || isPalindrome(input, i + 1, j);
        }
    }

    return true;
}

function isPalindrome(input, i, j) {
    while (i < j) {
        if (input[i++] != input[j--]) {
            return false;
        }
    }

    return true;
}

console.info(validPalindrome("ogoogo".split("")), validPalindrome("google".split("")));

function merge(input1, input2) {
    let i = input1.length - 1, j = input2.length - 1, k = input1.length + input2.length - 1;

    while (j >= 0) {
        if (input2[j] < input1[i]) {
            input1[k--] = input1[i--];
        } else {
            input1[k--] = input2[j--];
        }
    }

    return input1;
}

console.info(merge([8, 15], [3, 4, 6, 13, 19]));

function getCharIndex(input, start, target) {
    input = input.split("");

    for (let i = start, len = input.length; i < len; i++) {
        if (input[i] == target) {
            return i;
        }
    }

    return false;
}

function findLongWord(input, target) {
    let res = [];

    for (let i = 0, len = target.length; i < len; i++) {
        let source = target[i].split("");

        let includeChar = true;

        for (let j = 0, index = 0, len2 = source.length; j < len2; j++, index++) {
            index = getCharIndex(input, index, source[j]);

            if (index === false) {
                includeChar = false;
            }
        }

        if (includeChar) {
            res[source.length] = source.join("");
        }
    }

    return res.length > 0 ? res.pop() : null;
}

console.info(findLongWord("abpcpeleawcuh", ["apple", "banana", "peach", "kiwi"]));

function decimalTransfer(input, radix) {
    let res = [];

    let hex = 0;

    while (input > 1) {
        hex = input % radix;
        input = Math.floor(input / radix);
        res.push(hex);

        if (input == 1) {
            res.push(input);
        }
    }

    return res.reverse().join("");
}

function transferDecimal(input, radix) {
    input = input.split("");

    let sum = 0, hex = "0123456789abcdef";

    for (let i = 0, j = input.length - 1; j >= 0; j--, i++) {
        let index = hex.indexOf(input[i].toLowerCase());
        if (index > 0) {
            sum += index * Math.pow(radix, j);
        }
    }

    return sum;
}

console.info(decimalTransfer(20, 2) == "10100", transferDecimal("10100", 2) == 20);
console.info(decimalTransfer(20, 8) == "24", transferDecimal("24", 8) == 20);
console.info(decimalTransfer(20, 16) == "14", transferDecimal("14", 16) == 20);

function findRepeatNum(input) {
    let i = 0, len = input.length, res = [];

    while (i < len) {
        if (!res.includes(input[i])) {
            res.push(input[i++]);
        } else {
            return input[i];
        }
    }
}

console.info(findRepeatNum([2, 5, 1, 3, 8, 2]) == 2);

function findNumIn2DArray(input, target) {
    let i = 0, j = input[0].length - 1;

    while (i < input.length && j >= 0) {
        let item = input[i][j];

        if (item == target) {
            return true;
        } else if (item < target) {
            ++i;
        } else {
            --j;
        }
    }

    return false;
}

console.info(findNumIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
], 18) === true);

function replaceStr(input, search, replace) {
    let i = 0, str = "", searchLen = search.length;

    while (i < input.length) {
        if (input[i] == search[0] && input.substr(i, searchLen) == search) {
            str += replace;
            i += searchLen;
        } else {
            str += input[i++];
        }
    }

    return str;
}

console.info(replaceStr("Today is Monday.", "da", "#"));

function fibonacci(input) {
    if (input <= 2) {
        return input == 0 ? 0 : 1;
    } else {
        return fibonacci(input - 1) + fibonacci(input - 2);
    }
}

console.info(fibonacci(7) == 13);