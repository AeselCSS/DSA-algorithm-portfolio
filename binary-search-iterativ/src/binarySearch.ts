import defaultCompare from "./defaultCompare.js";

// The function binary search recieves a target number, an array of numbers and optionally a compare function
// if no compare function is provided, the default compare function is used
// The function returns the index of the target number in the array if it exists, otherwise it returns -1

const binarySearch = (target: number, array: number[], comparefunction?: any) => {

    const compareFunc = comparefunction || defaultCompare;

    let min: number = 0;
    let max: number = array.length;

    let isFound:boolean = false;

    // The while loop runs until the target number is found or the min index is greater than the max index
    while (!isFound && min < max) {
        // The middle index is calculated
        let middle = Math.floor((min + max) / 2);
        // The compare function is called with the target number and the number at the middle index
        let c = compareFunc(target, array[middle]);
    
        if (c > 0) min = middle + 1;
        if (c < 0) max = middle - 1;
        if (c == 0) {
            isFound = true;
            return middle;
        }
    }
    // If the target number is not found in the array, the function returns -1
    return -1;
}

export default binarySearch;