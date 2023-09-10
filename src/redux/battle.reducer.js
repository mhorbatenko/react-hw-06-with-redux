import {
    SET_BATTLE_PLAYER_USER_NAME
} from "./battle.constans";


const initialState = {
    userName: '',
}


const battleReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_BATTLE_PLAYER_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }

}

export default battleReducer;