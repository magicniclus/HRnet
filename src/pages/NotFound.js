import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * It returns a div with a h1 tag and a NavLink tag
 * @returns A React component.
 */
const NotFound = () => {
    /* Returning a div with a h1 tag and a NavLink tag. */
    return (
        <div>
            <h1>Page 404</h1>
            <NavLink to="/create-employee">Home</NavLink>
        </div>
    );
};

export default NotFound;