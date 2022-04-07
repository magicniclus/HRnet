import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { NativeSelect } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartment, addState } from '../redux/action/action';

const SelectButton = (props) => {
    const addValue = props.etat;
    const [finalValue, setFinalValue] = useState(addValue[0])

    const dispatch = useDispatch()

    const handleChange = (e)=>{
      setFinalValue(e.target.value)
      if(finalValue === "Sales" || finalValue === "Marketing" || finalValue === "Enginnering" || finalValue === "Humain Resources" || finalValue === "Legal"){
            dispatch(addDepartment(finalValue))
        } else {
            dispatch(addState(finalValue))
        }
    }

    return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{minWidth: 120, border: "1px solid #767676", boxShadow:"none"}} >
        <NativeSelect
        defaultValue={30}
        inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
        }}
        onChange={handleChange}
        >
        {addValue.map((value)=>
            <option value={value}>{value}</option>
        )}
        </NativeSelect>
      </FormControl>
    </Box>
    );
};

export default SelectButton;