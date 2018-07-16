import { combineReducers } from "redux";
import {HomeReducer as home} from '../screens/Home/modules/home';

export const makeRootReducer = () => {
	return combineReducers({
		home
	});
}

export default makeRootReducer;