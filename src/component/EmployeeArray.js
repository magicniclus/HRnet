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
 * [nestedFilter description]
 *
 * @param   {Array.<Object>}  targetArray  [targetArray description]
 * @param   {String}  value        [value description]
 * @param   {showKeys}  type         [type description]
 * @param   {Function}    set
 *
 * @return  {void}               [return description]
 */
function nestedFilter(targetArray, value, set) {
    value = value.toLowerCase();
    let filterArray = [];
    console.log(targetArray)
    for (const type of Object.keys(targetArray[0])){
        if (typeof targetArray[0][type] !== 'string') continue;
        filterArray = filterArray.concat(targetArray.filter((el) => {
            if (el[type].toLowerCase().includes(value)) return el;
        })
        )
    }

    set([... new Set(filterArray)]);
}

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

    const [getRows, setGetRows] = useState(rows);
    const [searched, setSearched] = useState("");
    const requestSearch = (searchedVal) => {
        setSearched(searchedVal)
        nestedFilter(rows, searchedVal, setGetRows);
    };

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