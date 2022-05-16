/**
 * It takes a date in the format of "Mon Jan 01 2018 00:00:00 GMT+0000 (UTC)" and returns it in the
 * format of "01/01/2018"
 * @param inputDate - The date that you want to format.
 */
export function dateFormat(inputDate) {
    /* Converting the inputDate to a string and then splitting it into an array. */
    const arrayInputDate = inputDate.toString().split(" ");

    /**
     * It takes the month from the arrayInputDate array and returns the corresponding number
     * @returns The month of the date.
     */
    const month = () =>{
        switch (arrayInputDate[1]) {
            case "Jan":
                return 1;
            
            case "Feb":
                return 2;
            
            case "Mar":
                return 3;
            
            case "Apr":
                return 4;
            
            case "May":
                return 5;
            
            case "Jun":
                return 6;
            
            case "Jul":
                return 7;
            
            case "Aug":
                return 8;
            
            case "Sep":
                return 9;
            
            case "Oct":
                return 10;
            
            case "Nov":
                return 11;
            
            case "Dec":
                return 12;  
        
            default: console.log("error");
                break;
        }
    }

    /**
     * It takes a number and returns a string with a zero in front of it if the number is less than 10
     * @param value - The value to be formatted.
     * @returns the value of the parameter if it is greater than 0 and less than 10. If the value is
     * not greater than 0 and less than 10, the function is returning the value of the parameter.
     */
    const addZero = (value) =>{
        if(value > 0 && value < 10)return `0${value}`;
        return value;
    }
    
    /* Creating a new variable called newInputDate and assigning it the value of the day, month and
    year of the inputDate. */
    const newInputDate = `${arrayInputDate[2]}/${addZero(month())}/${arrayInputDate[3]}`;

    /* Returning the value of the newInputDate variable. */
    return newInputDate;
}