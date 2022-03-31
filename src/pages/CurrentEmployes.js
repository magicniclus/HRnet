import * as React from 'react';
import { NavLink } from 'react-router-dom';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

function CurrentEmployes() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <NavLink to="/create-employee">Home</NavLink>
    </div>
  );
}

export default CurrentEmployes

