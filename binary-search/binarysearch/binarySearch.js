import defaultCompare from "./defaultCompare.js";
const binarySearch = (target, array, comparefunction) => {
    const compareFunc = comparefunction || defaultCompare;
    let min = 0;
    let max = array.length;
    let iterations = 0;
    let isFound = false;
    while (!isFound && min < max) {
        iterations++;
        let middle = Math.floor((min + max) / 2);
        let c = compareFunc(target, array[middle]);
        if (c > 0)
            min = middle + 1;
        if (c < 0)
            max = middle - 1;
        if (c == 0) {
            isFound = true;
            console.log(`Number of iterations: ${iterations}`);
            return middle;
        }
    }
    console.log(`Number of iterations: ${iterations}`);
    return -1;
};
export default binarySearch;
