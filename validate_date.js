const format = 'dd-mm-yyyy';
const date = '10-10-2020';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let result = "invalid";

if (format.length === 10 && date.length === 10) {
    let day = "";
    let month = "";
    let year = "";
    let seperaterOne = "";
    let seperaterTwo = "";

    switch (format) {
        case 'yyyy-mm-dd': {
            year = +(date[0] + date[1] + date[2] + date[3]);
            seperaterOne = date[4];
            month = +(date[5] + date[6]);
            seperaterTwo = date[7];
            day = +(date[8] + date[9]);
            break;
        }
        case 'dd-mm-yyyy': {
            day = +(date[0] + date[1]);
            seperaterOne = [2];
            month = +(date[3] + date[4]);
            seperaterTwo = [5];
            year = +(date[6] + date[7] + date[8] + date[9]);

            break;
        }
        case 'mm-dd-yyyy': {
            month = +(date[0] + date[1]);
            seperaterOne = date[2];
            day = +(date[3] + date[4]);
            seperaterTwo = [5];
            year = +(date[6] + date[7] + date[8] + date[9]);
            break;
        }
    }
    
    if (seperaterOne === "-" && seperaterTwo === "-") {

        const isDivisibleBy4 = year % 4 === 0;
        const isDivisibleBy400 = year % 400 === 0;
        const isDivisibleBy100 = year % 100 === 0;

        const isLeap = isDivisibleBy400 || !isDivisibleBy100 && isDivisibleBy4;

        const isValidMonth = month > 0 && month < 13;
        const isValidYear = year > 0 && year < 10000;

        let daysInMonth = 31;

        if (month === 4 || month === 6 || month === 10 || month === 11) {
            daysInMonth = 30;
        }

        if (month === 2 && isLeap) {
            daysInMonth = 29;
        } else if (month === 2) {
            daysInMonth = 28;
        }

        const isValidDate = isValidMonth && isValidYear && day <= daysInMonth;

        result = isValidDate ? "valid" : "invalid";
    }

}

console.log(result);
