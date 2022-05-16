import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

/**
 * @typedef {("fistName"| "lastName"| "startDay"| "department"| "dateOfBirth"| "street"| "city"| "state"| "zipCode")} showKeys
 */

/**
 * It takes an array of objects, a value to search for, and a setter function to update the state of
 * the filtered array
 * @param targetArray - the array you want to filter
 * @param value - the value of the input field
 * @param set - the setter function for the state variable you want to update
 */
function nestedFilter(targetArray, value, set) {
    value = value.toLowerCase();
    let filterArray = [];
    targetArray.forEach(el=>{
        for(const newEl of Object.values(el)){
            if(typeof newEl !== 'string') continue
            if(newEl.toLowerCase().includes(value)) filterArray.push(el)
        }
    })

    set([...new Set(filterArray)])
}

/* A function that returns a text field with a search icon and a clear icon. */
function QuickSearchToolbar(props) {
    return (
        <div className="value">
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search…"
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{ visibility: props.value ? 'visible' : 'hidden' }}
                            onClick={props.clearSearch}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}



/**
 * This function is used to create an array of objects that will be used to populate the table
 */
const EmployeeArray = () => {
    let addOneUser = localStorage.getItem("employees")
    let users = JSON.parse(addOneUser);

    const rows = [];
    let element;
    if (users !== null) {
        for (let i = 0, end = users.length; i < end; i++) {
            element = users[i];
            rows.push({
                id: i,
                firstName: element.firstName,
                lastName: element.lastName,
                startDay: element.start,
                department: element.department,
                dateOfBirth: element.birth,
                street: element.street,
                city: element.city,
                state: element.state,
                zipCode: element.code
            })
        }
    }


    /* Creating an array of objects that will be used to populate the table. */
    const columns = [
        { field: 'firstName', headerName: 'firstName', width: 150 },
        { field: 'lastName', headerName: 'lastName', width: 150 },
        { field: 'startDay', headerName: 'startDay', width: 150 },
        { field: 'department', headerName: 'department', width: 150 },
        { field: 'dateOfBirth', headerName: 'dateOfBirth', width: 150 },
        { field: 'street', headerName: 'street', width: 150 },
        { field: 'city', headerName: 'city', width: 150 },
        { field: 'state', headerName: 'state', width: 150 },
        { field: 'zipCode', headerName: 'zipCode', width: 150 },
    ];

    /* Creating a hook that is used to update the state of the table. */
    const [getRows, setGetRows] = useState(rows);
    /* Creating a hook that is used to update the state of the table. */
    const [searched, setSearched] = useState("");
    /**
     * It takes a value, sets it to the state, and then filters the rows based on that value
     * @param searchedVal - The value that the user is searching for.
     */
    const requestSearch = (searchedVal) => {
        setSearched(searchedVal)
        nestedFilter(rows, searchedVal, setGetRows);
    };

    /* Returning a div with a height of 700, a width of 90%, and a margin top of 5rem. It is also
    returning a DataGrid with rows, columns, components, and componentsProps. */
    return (
        <div style={{ height: 700, width: '90%', marginTop: "5rem" }}>
            <DataGrid
                rows={getRows}
                columns={columns}
                components={{ Toolbar: QuickSearchToolbar }}
                componentsProps={{
                    toolbar: {
                        value: searched,
                        onChange: (e) => requestSearch(e.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
            />
        </div>
    )
};

export default EmployeeArray;