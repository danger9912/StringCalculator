class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }

        let delimiter = /[\n,]/;
        if (numbers.startsWith('//')) {
            const delimiterEndIndex = numbers.indexOf('\n');
            let delimiterPart = numbers.substring(2, delimiterEndIndex);
            if (delimiterPart.startsWith('[')) {
                const delimiters = delimiterPart.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
                delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
            } else {
                delimiter = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            }
            numbers = numbers.substring(delimiterEndIndex + 1);
        }

        const numArray = numbers.split(delimiter);
        const negativeNumbers = numArray.filter(num => parseInt(num) < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
        }

        return numArray.reduce((sum, num) => {
            const number = parseInt(num);
            return number > 1000 ? sum : sum + number;
        }, 0);
    }
}

module.exports = StringCalculator;
