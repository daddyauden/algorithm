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
