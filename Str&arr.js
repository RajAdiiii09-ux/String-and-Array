//Assignment 2: String and Array Problem-Solving Toolkit.

                         //Tasks

//1. Write a function to reverse a string without using reverse().

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log( reverseString("Hello World"));

//2.Write a function to check whether a string is a palindrome.

function isPalindrome(str) {
  let reversed = reverseString(str);
  return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 

//3.Write a function to count vowels and consonants in a string.


let count = 0
let str ='Hello World'
for(let i = 0;i<=str.length;i++){
    if(str[i]==='a' || str[i]==='e'||str[i]==='i'|| str[i]==='o'|| str[i]==='u'){
        count++
       }
} 
console.log(count)

//4.Write a function to find the second-largest distinct number in an array.

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest([1, 2, 3, 4, 5]));

//5.Write a function to remove duplicate elements from an array without using Set.

function removeDuplicates(arr) {
  let Arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Arr.indexOf(arr[i]) === -1) {
      Arr.push(arr[i]);
    }
  }
  return Arr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//6.Write a function to find the sum of all even numbers in an array.

function sumEven(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }

  console.log(sum);
}

sumEven([1, 2, 3, 4, 5, 6]);

//7.Write a function to find the frequency of a given element in an array.

function frequency(arr, element) {
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        count++;
    }
}
console.log(count);
}

frequency([1, 2, 3, 4, 5, 6], 3);

//8.Write a function to check whether two strings are anagrams.

function areAnagrams(str1, str2) {
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("cat", "act"));

// //9.Write a function to move all zeros to the end of an array while maintaining the
// order of non-zero elements.

// function moveZerosToEnd(arr) {
//   let nonZeroArr = [];
//   let zeroCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       nonZeroArr.push(arr[i]);
//     } else {
//       zeroCount++;
//     }
//   }

//   for (let i = 0; i < zeroCount; i++) {
//     nonZeroArr.push(0);
//   }

//   return nonZeroArr;
// }
// console.log(moveZerosToEnd([1, 0, 2, 0, 3, 0, 4]));