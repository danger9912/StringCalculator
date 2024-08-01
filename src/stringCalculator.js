class StringCalculator {
    // Method to add numbers from a string
    add(numbers) {
        // If the input string is empty, return 0
        if (numbers === '') {
            return 0;
        }

        let delimiter = /[\n,]/;

        // Check if delimiter is defined at the beginning of the string
        if (numbers.startsWith('//')) {
            // Find the end index of the delimiter definition
            const delimiterEndIndex = numbers.indexOf('\n');
            // Extract the custom delimiter part from the string
            let delimiterPart = numbers.substring(2, delimiterEndIndex);


            // multiple delimiter
            // Check if the custom delimiter is enclosed in square brackets
            if (delimiterPart.startsWith('[')) {

                // Extract all delimiters in square brackets
                const delimiters = delimiterPart.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));

                // Create a regex pattern to match any of the delimiters
                delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));

            } else {
                // If a single character delimiter is used, escape any regex special characters
                delimiter = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            }

            // Remove the custom delimiter definition from the numbers string
            numbers = numbers.substring(delimiterEndIndex + 1);
        }

        // Split the numbers string using the determined delimiter
        const numArray = numbers.split(delimiter);

        // Filter out any negative numbers from the array
        const negativeNumbers = numArray.filter(num => parseInt(num) < 0);
        
        // If there are any negative numbers, throw an error with the list of negative numbers
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
        }

        // Calculate the sum of the numbers, ignoring any numbers greater than 1000
        return numArray.reduce((sum, num) => {
            const number = parseInt(num);
            return number > 1000 ? sum : sum + number;
        }, 0);
    }
}

module.exports = StringCalculator;
