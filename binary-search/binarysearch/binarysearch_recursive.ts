export function binarySearchRecursive<T>(
    value: T,
    array: T[],
    left: number,
    right: number,
    comparator: (a: T, b: T) => number = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    },
    iterationCount: number = 0
): number {
    // Increment the iteration count
    iterationCount++;

    // Base case: if the left index exceeds the right, the value is not in the array
    if (left > right) {
        console.log(`Total iterations: ${iterationCount}`);
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);
    // Compare the middle element with the target value
    const compareResult = comparator(array[mid], value);

    // If the middle element is equal to the target value, return the index
    if (compareResult === 0) {
        console.log(`Total iterations: ${iterationCount}`);
        return mid;
    } 
    // If the middle element is less than the target value, search in the right half
    else if (compareResult < 0) {
        return binarySearchRecursive(value, array, mid + 1, right, comparator, iterationCount);
    } 
    // If the middle element is greater than the target value, search in the left half
    else {
        return binarySearchRecursive(value, array, left, mid - 1, comparator, iterationCount);
    }
}

// Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const index = binarySearchRecursive(5, array, 0, array.length - 1);
// console.log(`Value found at index: ${index}`);