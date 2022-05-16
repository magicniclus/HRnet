import { createStore, applyMiddleware } from 'redux'; 
import thunk from "redux-thunk";

// import { composeWithDevTools} from "redux-devtools-extension";
/* Importing the reducer from the reducer folder. */
import reducer from './reducer/reducer';

// const store = createStore(reducer ,composeWithDevTools(applyMiddleware(thunk)))
/* The above code is creating a store using the reducer and applying the thunk middleware. */
const store = createStore(reducer, applyMiddleware(thunk))

export default store;