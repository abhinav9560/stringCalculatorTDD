function add(numbers) {
    if (numbers === "") return 0;

    const delimiter = /,/;
    const numberArray = numbers.split(delimiter).map(num => parseInt(num));



    return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;