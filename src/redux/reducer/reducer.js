/* Setting the initial state of the application. */
const initState = {
    isLoading: false,
    states: "Alabama",
    department: "Sales",
    users: [{
        firstName: "",
        lastName: "",
        birth: "",
        start: "",
        street: "",
        city: "",
        department: "",
        state: "",
        code: ""
    }
    ]
}

/**
 * The reducer function takes in the current state and an action, and returns a new state
 * @param [state] - This is the current state of the store.
 * @param action - This is the action object that was returned from the action creator.
 * @returns The state is being returned.
 */
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "addUser":
            return {
                ...state,
                isLoading: true,
                // users: [...state.users, action.payload]
                users: [action.payload]
            }

        case "resetUser":
            console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                users: [action.payload]
            }

        case "addDepartment":
            return {
                ...state,
                department: action.payload
            }

        case "addState":
            return {
                ...state,
                states: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer