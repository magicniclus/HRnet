import * as React from 'react';
import { NavLink } from 'react-router-dom';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

function CurrentEmployes() {

  return (
    <main className="currentEmployees">
      <h1>Current Employees</h1>
      <NavLink to="/create-employee">Home</NavLink>
    </main>
  );
}

export default CurrentEmployes

