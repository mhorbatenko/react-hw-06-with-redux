
import {
    SET_BATTLE_PLAYER_ONE_USER_NAME,
    SET_BATTLE_PLAYER_TWO_USER_NAME,
    TEST
} from "./battle.constans"

export const setUserName = (id, payload) => {

    // return {
    //     type: TEST,
    //     payload
    // }
    // return {
    //     type: SET_BATTLE_PLAYER_ONE_USER_NAME,
    //     payload
    // }
    if (id === 'battlePlayerOne') {
        return {
            type: SET_BATTLE_PLAYER_ONE_USER_NAME,
            payload
        }
    }
    return {
        type: SET_BATTLE_PLAYER_TWO_USER_NAME,
        payload
    }
}