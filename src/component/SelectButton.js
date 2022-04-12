import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addDepartment, addState } from '../redux/action/action';

/**
 * [SelectButton description]
 *
 * @param   {Object}  props  [props description]
 * @param   {("state" | "department")} props.addClass
 * @param    {Array} props.etat
 *
 * @component
 */
const SelectButton = (props) => {
  const actions = { state: addState, department: addDepartment }
  const addValue = props.etat;
  const addClass = props.addClass;

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(actions[addClass](e.target.value));
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 120, border: "1px solid #767676", boxShadow: "none" }} >
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}
        >
          {addValue.map((value) =>
            <option key={value} value={value}>{value}</option>
          )}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SelectButton;