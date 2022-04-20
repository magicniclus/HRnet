export const successLoading = ()=>{
    return {
        type:"success",
    }
}

export const addDepartment= (value)=>{
    console.log("addDepartment: ", value);
    return {
        type: "addDepartment",
        payload: value
    }
}

export const addState= (value)=>{
    return {
        type: "addState",
        payload: value
    }
}

export const resetUser = (value)=>{
    return {
        type: "resetUser",
        payload: value
    }
}

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