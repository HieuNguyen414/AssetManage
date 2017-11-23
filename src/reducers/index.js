import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// import TestReducer from "../container/WorkingReduxContainer/reducer";

export default combineReducers({
	form: formReducer,
	// TestReducer,
});
