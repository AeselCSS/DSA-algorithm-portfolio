// The default compare function compares two numbers and returns -1 if the first number is smaller than the second number
// returns 0 if the numbers are equal and returns 1 if the first number is greater than the second number
// The function is used to compare numbers in the binary search algorithm

const defaultCompare = (a: number, b: number): number => {
    console.log(`defaultCompare: Comparing number 1 (${a}) - number 2 (${b})`);
    const result = a - b;
    if (result < 0) return -1;
    else if (result > 0) return 1; 
    else return 0;
};

export default defaultCompare;