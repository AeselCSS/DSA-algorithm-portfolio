const defaultCompare = (a, b) => {
    console.log(`defaultCompare: Comparing number 1 (${a}) - number 2 (${b})`);
    const result = a - b;
    if (result < 0)
        return -1;
    else if (result > 0)
        return 1;
    else
        return 0;
};
export default defaultCompare;
