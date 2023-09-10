
import {
    SET_BATTLE_PLAYER_USER_NAME
} from "./battle.constans"

export const setUserName = (id, payload) => {

    return {
        type: SET_BATTLE_PLAYER_USER_NAME,
        payload
    }

}