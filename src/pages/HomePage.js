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
import Test from '../component/test';

const HomePage = () => {
    const department = ["Sales", "Marketing", "Enginnering", "Humain Resources", "Legal"]

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

    const [itsLogged, setItsLogged] = useState("logged")

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const [stateInValue, setStateInValue] = useState("");
    const [departmentInValue, setDepartmentInValue] = useState("")

    const dispatch = useDispatch()

    const handleChangeFistName = (e) => {
        setFirstName(e.target.value)
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleChangeCode = (e) => {
        setCode(e.target.value)
    }

    const [err, setErr] = useState(false);

    const [selectDatePicker, setSelectDatepicker] = useState(null);
    const [selectDatePickerDeux, setSelectDatepickerDeux] = useState(null);

    const handleChangeState = (e) => {
        setStateInValue(e)
    }

    const handleChangeDepartment = (e) => {
        setDepartmentInValue(e)
    }

    const addEmployee = (e) => {
        e.preventDefault();

        if (firstName !== "" && lastName !== "" && street !== "" && city !== "" && code !== "" && stateInValue !== "" && departmentInValue !== "") {

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
                        Last Name
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