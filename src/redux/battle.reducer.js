import {
    SET_BATTLE_PLAYER_ONE_USER_NAME,
    SET_BATTLE_PLAYER_TWO_USER_NAME,
    TEST
} from "./battle.constans";


const initialState = {
    userName: '',
}


const battleReducer = (state = initialState, action) => {

    console.log('action', action)
    console.log('state', state)

    switch (action.type) {
        // case TEST:
        //     return {
        //         ...state,
        //         userName: action.payload
        //     }
        case SET_BATTLE_PLAYER_ONE_USER_NAME:
            return {
                ...state,
                userName: action.payload
            };
        case SET_BATTLE_PLAYER_TWO_USER_NAME:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return state;
    }

}

export default battleReducer;