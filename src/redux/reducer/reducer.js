const initState = {
    isLoading : false,
    states : "Alabama",
    department : "Sales",
    users:[]
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "addUser":
            return {
                ...state,
                isLoading : true,
                users: [...state.users, action.payload]
            }
            
        case "addDepartment":  
        return{
            ...state,
            department : action.payload
        }    

        case "addState": 
        return{
            ...state,
            states : action.payload
        }    

        default: 
        return{
            ...state
        }
    }
}

export default reducer