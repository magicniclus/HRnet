import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import SelectButton from '../component/SelectButton';
<<<<<<< Updated upstream
import ClearIcon from '@mui/icons-material/Clear';
import { Elderly } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateEmployee from '../component/ModalCreateEmployee';
=======
import { useDispatch } from 'react-redux';
>>>>>>> Stashed changes
import { addUser } from '../redux/action/action';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormat } from '../utils';
<<<<<<< Updated upstream
=======
import ModalCreateEmployee from '../component/ModalCreateEmployee';
// import { DropDownBtn } from '@magicniclus/reactdropdownbtn'
>>>>>>> Stashed changes

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
    const [birth, setBirth] = useState("");
    const [start, setStart] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");

    const [stateInValue, setStateInValue] = useState("");
    const [stateSales, setStateSales] = useState("")

    const dispatch = useDispatch()

    const allState = useSelector(state=>state)
    
    const handleChangeFistName = (e)=>{
        setFirstName(e.target.value)
    }
    
    const handleChangeLastName = (e)=>{
        setLastName(e.target.value)
    }
    
    const handleChangeBirth = (e)=>{
        setBirth(e.target.value)
    }
    
    const handleChangeStart = (e)=>{
        setStart(e.target.value)
    }
    
    const handleChangeStreet = (e)=>{
        setStreet(e.target.value)
    }
    
    const handleChangeCity = (e)=>{
        setCity(e.target.value)
    }
    
    const handleChangeCode = (e)=>{
        setCode(e.target.value)
    }

    const [selectDatePicker, setSelectDatepicker] = useState(null);
    const [selectDatePickerDeux, setSelectDatepickerDeux] = useState(null);
    
    const [getStateValue , setGetStateValue] = useState('')
    const [getDepartmentValue , setGetDepartmentValue] = useState('')

    const handleChangeState = (e) => {
        setStateInValue(e.target.value)
    }
    
    const addEmployee = (e)=>{
        e.preventDefault();
        const allSelected = document.querySelectorAll('select');

        if(firstName !== ""){
            
            const user = {
                firstName : firstName,
                lastName : lastName,
                birth : dateFormat(selectDatePicker),
                start : dateFormat(selectDatePickerDeux),
                street : street,
                city : city,
                department: allState.department,
                state : allState.state,
                code : code
            }

            dispatch(addUser(user))
            setItsLogged('clicked')
            
        }
    }


    return (
        <>
            <div className={itsLogged}>
                <div className="container">
                    <div className="closeModale">
                        <ClearIcon color="primary" onClick={()=>setItsLogged("logged")} />
                    </div>
                    <p className="text">Employee Created!</p>
                </div>
            </div>
            <main className="homePage">
                <h1>HRnet Exemple</h1>
                <NavLink to="/employee-list">View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <form onSubmit={addEmployee}>
                    <label className="fistName" >
                        First Name
                        <input type="text" id="firstName" value={firstName} onChange={handleChangeFistName} />
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
                            <SelectButton etat={stateValue} addClass="state" />
                        </div>
                    </div>
                        <div className="department" >
                            <p>Department</p>
                            <SelectButton etat={department} addClass="department" />  
                        </div>
                        <label className="code" >
                            Zip Code
                            <input type="number" id="code" value={code} onChange={handleChangeCode} />
                        </label>
                    <button className="button">Save</button>
                </form>
            </main>
        </>
    );
};

export default HomePage;