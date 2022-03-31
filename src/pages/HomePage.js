import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birth, setBirth] = useState("")
    const [start, setStart] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [code, setCode] = useState("")

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

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

    const addEmployee = (e)=>{
        e.preventDefault();
        if(firstName !== ""){
            const user = {
                firstName : firstName,
                lastName : lastName,
                birth : birth,
                start : start,
                street : street,
                city : city,
                code : code
            }
            employees.push(user);
            localStorage.setItem('employees', JSON.stringify(employees));
    
            let getOne = localStorage.getItem("employees")
            let get = JSON.parse(getOne);
            console.log(get);
        }
    }

    return (
        <div>
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
                    <input type="date" id="birth" value={birth} onChange={handleChangeBirth} />
                </label>
                <label className="start" >
                    Last Name
                    <input type="date" id="start" value={start} onChange={handleChangeStart} />
                </label>
                <div className="adress">
                    <p>Adress</p>
                    <label className="street" >
                        Street
                        <input type="text" id="street" value={street} onChange={handleChangeStreet} />
                    </label>
                    <label className="city" >
                        City
                        <input type="text" id="city" value={city} onChange={handleChangeCity} />
                    </label>
                    <label className="code" >
                        Zip Code
                        <input type="number" id="code" value={code} onChange={handleChangeCode} />
                    </label>
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export default HomePage;