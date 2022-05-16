import React from 'react';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

/**
 * Escape all special characters in a string so that it can be used in a regular expression.
 * @param value - The string to be escaped
 * @returns the value of the string with the special characters escaped.
 */
function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/* Creating a default theme for the material-ui components. */
const defaultTheme = createTheme();

/* Creating a default theme for the material-ui components. */
const useStyles = makeStyles(
    (theme) =>
        createStyles({
            root: {
                padding: theme.spacing(0.5, 0.5, 0),
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            textField: {
                [theme.breakpoints.down('xs')]: {
                    width: '100%',
                },
                margin: theme.spacing(1, 0.5, 1.5),
                '& .MuiSvgIcon-root': {
                    marginRight: theme.spacing(0.5),
                },
                '& .MuiInput-underline:before': {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                },
            },
        }),
    { defaultTheme },
);

/**
 * It's a text field with a search icon and a clear icon
 * @param props - {
 * @returns A div with a text field.
 */
function QuickSearchToolbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search…"
                className={classes.textField}
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

/* Getting the data from local storage and parsing it. */
function ShowMeEmployee() {
    let addOneUser = localStorage.getItem("employees")
let users = JSON.parse(addOneUser);

/* Parsing the string from local storage into a JSON object. */
const roows = [];
/* Creating an empty array. */
let element;
/* Looping through the array of objects and pushing the values into the roows array. */
for (let i = 0, end=users.length; i < end; i++) {
    element = users[i];
    roows.push( {
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
    
    /* Creating a variable called employeeList and setting it equal to the roows array. */
    const employeeList = roows;
    /* Creating an array of objects. */
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
    /* Creating a state variable called searchText and setting it equal to an empty string. */
    const [searchText, setSearchText] = React.useState('');
    /* Setting the rows to the employeeList. */
    const [rows, setRows] = React.useState(employeeList);
    /* Setting the page size to 5. */
    const [pageSize, setPageSize] = React.useState(5);

    /**
     * The function takes in a search value, sets the search text to the search value, creates a
     * regular expression that is case insensitive, and then filters the employee list based on the
     * search value
     * @param searchValue - The value of the search input.
     */
    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = employeeList.filter((row) => {
            console.log(row);
        });
        setRows(filteredRows);
    };

    /* Setting the rows to the employeeList. */
    React.useEffect(() => {
        // setRows(employeeList);
    }, [employeeList]);

    /* Returning the data grid with the rows per page options, pagination, auto height, components,
    rows, columns, and components props. */
    return (
        <DataGrid
            rowsPerPageOptions={[5, 10, 15]}
            pagination
            autoHeight
            components={{ Toolbar: QuickSearchToolbar }}
            rows={roows}
            columns={columns}
            componentsProps={{
                toolbar: {
                    value: searchText,
                    onChange: (event) =>
                        requestSearch(event.target.value),
                    clearSearch: () => requestSearch(''),
                },
            }}  
        />
    );
}

export default ShowMeEmployee;