export function dateFormat(inputDate) {
    //récupération de la date
    console.log(inputDate);
    const arrayInputDate = inputDate.toString().split(" ");

    // console.log(arrayInputDate);

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

    const addZero = (value) =>{
        if(value > 0 && value < 10)return `0${value}`;
        return value;
    }
    
    const newInputDate = `${arrayInputDate[2]}/${addZero(month())}/${arrayInputDate[3]}`;

    return newInputDate;
}