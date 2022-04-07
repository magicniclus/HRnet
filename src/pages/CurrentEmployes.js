import * as React from 'react';
import { NavLink } from 'react-router-dom';
import DatePickerComponent from '../component/DatePicker';

function CurrentEmployes() {

  return (
    <main className="currentEmployees">
      <h1>Current Employees</h1>
      <NavLink to="/create-employee">Home</NavLink>
      <DatePickerComponent />
    </main>
  );
}

export default CurrentEmployes

