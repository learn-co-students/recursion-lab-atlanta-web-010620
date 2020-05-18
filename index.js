// Code your solution here!

// // all characters in string 
function printString(string){
    console.log(string[0]); 
    if (string.length > 1){
        let substring = string.substring(1,string.length); 
        printString(substring); 
    }else{
        return true; 
    }
}


function reverseString(string){
    if (string.length > 0){
        return reverseString(string.substring(1)) + string.charAt(0)
    }else{
        return ""; 
    }
}

function isPalindrome(string){
    if (string.length > 0){
        if (string.length === 1){
            return true 
        }else{

            if (string[0] === string[string.length-1]){
                let sub = string.substring(1,string.length-1)
                return isPalindrome(sub)
            }else{
                return false; 
            }
        }
    }else{
        return true; 
    }
}

function addUpTo(array, index){
    if (index === 0){
        return array[0];
    }else if(index > 0){
        array[index-1] += array[index]; 
        return addUpTo(array, index-1); 
    }
}

function maxOf(array){
    let maxNum;
    if (array.length === 1){
        return array[0]
    }else{
        if (array[0] > array[1]){
            maxNum = array[0]; 
        }else{
            maxNum = array[1]; 
        }
        array[1] = maxNum; 
        return maxOf(array.slice(1,array.length)); 
    }
}

function includesNumber(array, number){
    if (array.length > 0){
        if (array[0] === number){
            return true
        }else{
            return includesNumber(array.slice(1),number); 
        }
    }
    return false; 
}