import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateEmployee from '../component/ModalCreateEmployee';
import { addUser, resetUser } from '../redux/action/action';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormat } from '../utils';
import { DropDown } from "@magicniclus/components";

/**
 * It's a React component that is used to create a new employee
 * @returns A React component that is used to create a new employee.
 */
const HomePage = () => {
    /* An array of strings that will be used to populate the dropdown menu. */
    const department = ["Sales", "Marketing", "Enginnering", "Humain Resources", "Legal"]

    const allState = useSelector(state => state);

    /* A hook that allows us to access the state of the store. */
    const stateValue = [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District Of Columbia',
        'Federated States Of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North California',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South California',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];

    /* This is a React Hook that allows us to use state in a functional component. */
    const [itsLogged, setItsLogged] = useState("logged")

    /* This is a React Hook that allows us to use state in a functional component. */
    const [firstName, setFirstName] = useState("");
    /* This is a React Hook that allows us to use state in a functional component. */
    const [lastName, setLastName] = useState("");
    /* This is a React Hook that allows us to use state in a functional component. */
    const [street, setStreet] = useState("");
    /* This is a React Hook that allows us to use state in a functional component. */
    const [city, setCity] = useState("");
    /* This is a React Hook that allows us to use state in a functional component. */
    const [code, setCode] = useState("");
    /* This is a React Hook that allows us to use state in a functional component. */
    const [stateInValue, setStateInValue] = useState("");
    /* This is a React Hook that allows us to use state in a functional component. */
    const [departmentInValue, setDepartmentInValue] = useState("")

    /* A hook that allows us to dispatch an action to the store. */
    const dispatch = useDispatch()

    /**
     * When the user types in the input field, the value of the input field is set to the state
     * variable firstName.
     * @param e - the event object
     */
    const handleChangeFistName = (e) => {
        setFirstName(e.target.value)
    }

    /**
     * When the user types in the input field, the value of the input field is set to the state
     * variable lastName.
     * @param e - the event object
     */
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    /**
     * When the user types in the input field, the value of the input field is set to the state
     * variable 'street'.
     * @param e - the event object
     */
    const handleChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    /**
     * When the user types in the input field, the value of the input field is set to the state of the
     * city.
     * @param e - the event object
     */
    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    /**
     * `handleChangeCode` is a function that takes an event as an argument and sets the state of the
     * code to the value of the event target
     * @param e - the event object
     */
    const handleChangeCode = (e) => {
        setCode(e.target.value)
    }

    /* A React Hook that allows us to use state in a functional component. */
    const [err, setErr] = useState(false);

    /* This is a React Hook that allows us to use state in a functional component. */
    const [selectDatePicker, setSelectDatepicker] = useState(null);
    /* This is a React Hook that allows us to use state in a functional component. */
    const [selectDatePickerDeux, setSelectDatepickerDeux] = useState(null);

    /**
     * It takes the event object as an argument, and then sets the stateInValue to the value of the
     * event object
     * @param e - The event object
     */
    const handleChangeState = (e) => {
        setStateInValue(e)
    }

    /**
     * It takes the value of the department dropdown menu and sets it to the state variable
     * departmentInValue
     * @param e - the event object
     */
    const handleChangeDepartment = (e) => {
        setDepartmentInValue(e)
    }

    /**
     * It takes the values from the form and creates an object with them. Then it dispatches the action
     * addUser with the object as a parameter
     * @param e - the event
     */
    const addEmployee = (e) => {
        e.preventDefault();

        if (firstName !== "" && lastName !== "" && street !== "" && city !== "" && code !== "" && stateInValue !== "" && departmentInValue !== "" && selectDatePicker !== null && selectDatePickerDeux !== null) {

            const user = {
                firstName: firstName,
                lastName: lastName,
                birth: dateFormat(selectDatePicker),
                start: dateFormat(selectDatePickerDeux),
                street: street,
                city: city,
                department: departmentInValue,
                state: stateInValue,
                code: code
            }

            dispatch(addUser(user))
            setItsLogged('clicked')
            setErr(false)

        } else {
            setErr(true)
        }
    }

    /**
     * It resets the state of the user and the form
     */
    const resetUserValue = ()=>{
        setItsLogged(itsLogged === "clicked" ? "logged" : "clicked")
        const resetoldUser = {
            firstName: "",
            lastName: "",
            birth: "",
            start: "",
            street: "",
            city: "",
            department: "",
            state: "",
            code: ""
        }

        setFirstName("")
        setLastName("")
        setStreet("")
        setCity("")
        setCode("")
        setStateInValue(stateValue[0])
        setDepartmentInValue(department[0])

        setItsLogged("logged")

        dispatch(resetUser(resetoldUser))
    }


    /* The above code is a React component that is used to create a new employee. */
    return (
        <>
            <div onClick={resetUserValue} className={itsLogged}>
                <ModalCreateEmployee value={itsLogged === "clicked" ? false : true} />
            </div>
            <main className="homePage">
                <h1>HRnet Exemple</h1>
                <NavLink to="/employee-list">View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label className="fistName" >
                        First Name
                        <input className={err ? "input err" : "input"}  type="text" id="firstName" value={firstName} onChange={handleChangeFistName} />
                    </label>
                    <label className="lastName" >
                        Last Name
                        <input type="text" id="lastName" value={lastName} onChange={handleChangeLastName} />
                    </label>
                    <label className="birth" >
                        Date of Birth
                        <DatePicker selected={selectDatePicker} onChange={date => setSelectDatepicker(date)} maxDate={new Date()} placeholderText="dd/mm/yyyy" />
                    </label>
                    <label className="start" >
                        Start Date
                        <DatePicker selected={selectDatePickerDeux} onChange={date => setSelectDatepickerDeux(date)} maxDate={new Date()} placeholderText="dd/mm/yyyy" />
                    </label>
                    <div className="adress">
                        <p className="adressTitle">Adress</p>
                        <label className="street" >
                            Street
                            <input type="text" id="street" value={street} onChange={handleChangeStreet} />
                        </label>
                        <label className="city" >
                            City
                            <input type="text" id="city" value={city} onChange={handleChangeCity} />
                        </label>
                        <div >
                            <p className="state">State</p>
                            <DropDown title={stateValue[0]} list={stateValue} callBack={handleChangeState} width="160px" />
                        </div>
                    </div>
                    <div className="department" >
                        <p>Department</p>
                        <DropDown title={department[0]} list={department} callBack={handleChangeDepartment} width="160px" />
                    </div>
                    <label className="code" >
                        Zip Code
                        <input type="number" id="code" value={code} onChange={handleChangeCode} />
                    </label>
                    <div className="buttonContainer">
                        <button type="submit" className="button" onClick={addEmployee}>Save</button>
                        {err ? <h3 className="err">Erreur de saisi</h3> : null}
                    </div>
                </form>
            </main>
        </>
    );
};

export default HomePage;