// Code your solution here!

function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(string, result= '') {
    result = result + string[string.length - 1]
    if(string.length > 1) {
        let subString = string.substring(0, string.length - 1)
        return reverseString(subString, result)
    } else {
        return result
    }
}

function isPalindrome(string) {
    if (string[0] !== string[string.length - 1]) {
        return false
    } else {
        if (string.length > 2) {
            let subString = string.substring(1, string.length - 1)
            return isPalindrome(subString)
        } else {
            return true
        }
    }
}

function addUpTo(array, index) {
    if (index > 0) {
        return addUpTo(array.slice(0, index), index - 1) + array[index]
    } else {
        return array[index]
    }
}

function maxOf(array, result = 0) {
    if (array.length > 1) {
        if (array[array.length - 1] > result) {
            const newresult = array[array.length - 1]
            return maxOf(array.slice(0, -1), newresult)
        } else {
            return maxOf(array.slice(0, -1), result)
        }
    } else {
        if (array[0] < result) {
            return result
        } else {
            return array[0]
        }
    }
}

function includesNumber(array, number) {
    if (array[0] === number) {
        return true
    } else {
        if (array.length > 1) {
            return includesNumber(array.slice(1, array.length), number)
        } else {
            return false
        }
    }
}