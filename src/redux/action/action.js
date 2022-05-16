/**
 * It returns an object with a type property of "success"
 * @returns An object with a type property.
 */
export const successLoading = ()=>{
    return {
        type:"success",
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - The value of the input field
 * @returns An object with a type and a payload.
 */
export const addDepartment= (value)=>{
    console.log("addDepartment: ", value);
    return {
        type: "addDepartment",
        payload: value
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - This is the value that we want to pass to the reducer.
 * @returns An object with a type and a payload.
 */
export const addState= (value)=>{
    return {
        type: "addState",
        payload: value
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - The value that you want to pass to the reducer.
 * @returns An object with a type and a payload.
 */
export const resetUser = (value)=>{
    return {
        type: "resetUser",
        payload: value
    }
}

/**
 * It takes a user object as an argument, dispatches an action with the type "addUser" and the user
 * object as the payload, then adds the user object to the employees array in local storage
 * @param user - This is the user object that we are passing to the action.
 */
export function addUser(user) {
    return (dispatch) => {
        dispatch({type : "addUser", payload: user});
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(user);
        localStorage.setItem('employees', JSON.stringify(employees));
        let addOneUser = localStorage.getItem("employees")
        let users = JSON.parse(addOneUser);
    };
}