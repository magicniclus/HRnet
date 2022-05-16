import * as React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeArray from '../component/EmployeeArray';

/**
 * This function returns a main element with a h1 element, an EmployeeArray component, and a NavLink
 * component
 * @returns The CurrentEmployees component is being returned.
 */
function CurrentEmployes() {

  /* This is a function that returns a main element with a h1 element, an EmployeeArray component, and
  a NavLink
   * component */
  return (
    <main className="currentEmployees">
      <h1>Current Employees</h1>
      <EmployeeArray />
      <NavLink to="/create-employee">Home</NavLink>
    </main>
  );
}

export default CurrentEmployes

