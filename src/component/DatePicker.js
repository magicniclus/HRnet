import React from 'react';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

/**
 * The DatePicker component is a controlled component, which means that the selected date is stored in
 * the state of the parent component
 */
const DatePickerComponent = () => {
    /* A destructuring assignment. It is a way to assign values to multiple variables at once. */
    const [selectDatePicker, setSelectDatepicker] = useState(null)
    return (
        <div>
            <DatePicker selected={selectDatePicker} onChange={date => setSelectDatepicker(date)}/>
            
        </div>
    );
};

export default DatePickerComponent;
