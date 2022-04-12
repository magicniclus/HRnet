import * as React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeArray from '../component/EmployeeArray';

function CurrentEmployes() {

  return (
    <main className="currentEmployees">
      <h1>Current Employees</h1>
      <EmployeeArray />
      <NavLink to="/create-employee">Home</NavLink>
    </main>
  );
}

export default CurrentEmployes

