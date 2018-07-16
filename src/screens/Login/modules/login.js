import update from 'react-addons-update';
import constants from './actionConstants';

//#region Constants
const {  } = constants;

//#endregion

//#region Actions

//#enregion

//#region Anction Handlers
const ACTION_HANDLERS = {
};
//endregion

const initialState = {
};

export function LoginReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler? handler(state, action) : state;
}