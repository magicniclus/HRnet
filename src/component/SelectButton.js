import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';
import { MenuItem } from '@mui/material';

const SelectButton = (props) => {
    const etat = props.etat;

    return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{minWidth: 120, border: "1px solid #767676", boxShadow:"none"}}>
        <NativeSelect
        defaultValue={30}
        inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
        }}
        >
        {etat.map((etat)=>
            <option value={etat}>{etat}</option>
        )}
        </NativeSelect>
      </FormControl>
    </Box>
    );
};

export default SelectButton;