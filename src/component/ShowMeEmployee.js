import React from 'react';
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const defaultTheme = createTheme();
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

function ShowMeEmployee() {
    let addOneUser = localStorage.getItem("employees")
let users = JSON.parse(addOneUser);

const roows = [];
let element;
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
    const employeeList = roows;
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
    const [searchText, setSearchText] = React.useState('');
    // const [rows, setRows] = React.useState(employeeList);
    // const [pageSize, setPageSize] = React.useState(5);

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = employeeList.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        // setRows(filteredRows);
    };

    React.useEffect(() => {
        // setRows(employeeList);
    }, [employeeList]);

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
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                        requestSearch(event.target.value),
                    clearSearch: () => requestSearch(''),
                },
            }}  
        />
    );
}

export default ShowMeEmployee;