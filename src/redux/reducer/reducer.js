const initState = {
    isLoading : false,
    users: {
    states : "Alabama",
    department : "Sales"
    }
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "addUser":
            return {
                ...state,
                isLoading : true,
                users: {...state.users, ...action.payload}
            }
            
        case "addDepartment": 
        alert(action.payload)
        return{
            ...state,
            users: {...state.users, department : action.payload}
            
        }    

        case "addState": 
        return{
            ...state,
            users: {...state.users, states : action.payload}
        }    

        default: 
        return{
            ...state
        }
    }
}

export default reducer