/* Number of People in the Bus */

function peopleOnBus (busStops){
    var people = 0;
    for(var x = 0; x < busStops.length; x++) {
        people += busStops[x][0];
        people -= busStops[x][1];
    } return people;
}

console.log("Number of People in the Bus");
console.log(peopleOnBus([[10,0],[3,5],[5,8]]));
console.log(peopleOnBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(peopleOnBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));


/* Get the Mean of an Array */

function getAverage(marks){
    var total = 0
    for (var i = 0; i < marks.length; i++) {
        total += marks[i]

    }
    return Math.floor(total / marks.length);
}

console.log("Get the Mean of an Array");
console.log(getAverage([2,2,2,2]));
console.log(getAverage([1,3,5,7,9,11,13,15,17,19]));
console.log(getAverage([1,1,1,1,1,1,1,2]));


/* Smallest Unused ID */

function nextId(ids){

    var idsSorted = ids.sort(function(a, b) {
        return a - b;
    })

    var idsNoDups = [...new Set(idsSorted)]

    for (var i = 0 ; i <= ids.length + 1 ; i++) {
        if (i !== idsNoDups[i]) {
            return i;
        } else if (i == ids.length) {
            return ids.length;
        }
    }
}

console.log("Smallest Unused ID");
console.log(nextId([0,1,2,3,5]));
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));
console.log(nextId([0,2,5,7,8,10]));


//The Highest Profit Wins!

function minMax(arr) {

    let sortedArr = arr.sort((a, b) => a - b);

    let minMaxArr = [];
    minMaxArr.push(sortedArr[0]);
    minMaxArr.push(sortedArr[sortedArr.length - 1]);

    return minMaxArr;
}


//Disemvowel Trolls

function disemvowel(str) {

    var vowels = {

        "a": true,
        "e": true,
        "i": true,
        "o": true,
        "u": true,
        "A": true,
        "E": true,
        "I": true,
        "O": true,
        "U": true,

    };

    var newStr = ""
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        if (!vowels[letter]) {
            newStr += str[i];
        }
    }
    return newStr;
}

// Reverse words

function reverseWords(str) {
    let strArr = str.split(" ");
    let newStr = [];
    for(let x = 0; x < strArr.length; x++){
        let smallStrArr = strArr[x].split("");
        smallStrArr = smallStrArr.reverse();
        let smallStr = smallStrArr.join("");
        newStr.push(smallStr);
    }
    return newStr.join(" ");
}

    //using the .map() function

function reverseWords(str) {
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
    }).join(' ');
}

//count characters in your string

function count (string) {
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}


/*
Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the indiviudal odd numbers. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return:

'Even is greater than Odd'

If the sum of odd numbers is greater than the sum of even numbers return:

'Odd is greater than Even'

If the total of both even and odd numbers are identical return:

'Even and Odd are the same'


 */

function evenOrOdd(str) {
    var even = 0, odd = 0;
    str.split("").forEach(function(num){
        if (num % 2 === 0) {
            even += +num;
        } else {
            odd += +num;
        }
    });
    if (even === odd) return "Even and Odd are the same";
    return even > odd  ? "Even is greater than Odd" : "Odd is greater than Even"
}

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 */

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}

/*
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
 */

function oddOrEven(array) {

    const sum = array.reduce((accumulation, currentNumber) => {
        return accumulation + currentNumber;
    }, 0);

    return (sum % 2 === 0) ? "even" : "odd";
}

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

var twoSum = function(nums, target) {
    let numberIndex = new Map();
    let resultArr = [];

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let complement = target - num;

        if(numberIndex.has(complement)) {
            resultArr[0] = numberIndex.get(complement);
            resultArr[1] = i;
            return resultArr;
        }

        numberIndex.set(num, i);
    }
};