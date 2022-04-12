import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const EmployeeArray = () => {
    let addOneUser = localStorage.getItem("employees")
    let users = JSON.parse(addOneUser);

    console.log(users);

    return(
    <>
    </>
    )
};

export default EmployeeArray;