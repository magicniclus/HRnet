import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [firstName, setFirstName] = useState("")

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const handleChangeFistName = (e)=>{
        setFirstName(e.target.value)
    }

    const addEmployee = (e)=>{
        e.preventDefault();
        if(firstName !== ""){
            const user = {
                firstName : firstName
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
                <label>
                    First Name
                    <input type="text" id="firstName" value={firstName} onChange={handleChangeFistName} />
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default HomePage;