import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page 404</h1>
            <NavLink to="/create-employee">Home</NavLink>
        </div>
    );
};

export default NotFound;