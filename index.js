function add(numbers) {
    if (numbers === "") return 0;

    const delimiter = /,|\n/;
    const numberArray = numbers.split(delimiter).map(num => parseInt(num));

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    const filteredNumbers = numberArray.filter(num => num <= 1000);

    return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;