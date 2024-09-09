import binarySearch from "./binarySearch.js";

const array = [...Array(50).keys()].map(x => x + 1);
const target = 11;

// The binarySearch function is called without a compare function
console.log('Calling binarySearch without custom compare function');
const index = binarySearch(target, array);
console.log(`The target number ${target} is at index ${index} in the array`);

// The binarySearch function is called with a custom compare function
const customCompare = (a: number, b: number): number => {
    console.log(`customCompare: Comparing number 1 (${a}) - number 2 (${b})`);
    return a - b;
};

console.log('Calling binarySearch with custom compare function');
const index2 = binarySearch(target, array, customCompare);
console.log(`The target number ${target} is at index ${index2} in the array`);

// The binarySearch function is called with customCompare but with a target not in the array
const target2 = 100;
console.log('Calling binarySearch with custom compare function and target not in the array');
const index3 = binarySearch(target2, array, customCompare);
console.log(`The target number ${target2} is at index ${index3} in the array`);

// The binarySearch function is called without customCompare but with a target not in the array
const index4 = binarySearch(target2, array);
console.log(`The target number ${target2} is at index ${index4} in the array`);
