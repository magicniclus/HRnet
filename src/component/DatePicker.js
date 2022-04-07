import React from 'react';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
    const [selectDatePicker, setSelectDatepicker] = useState(null)
    return (
        <div>
            <DatePicker selected={selectDatePicker} onChange={date => setSelectDatepicker(date)}/>
            
        </div>
    );
};

export default DatePickerComponent;
