import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { setUserName } from "../../redux/battle.actions";
import { useDispatch } from "react-redux";


const BattlePlayerInput = memo(({id, label, handlePlayerSubmit}) => {

    // const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const userName = useSelector(state => state.battle.userName)
    console.log('userName', userName)

    const handleBattlePlayerSubmit = (event) => {
        event.preventDefault()
        handlePlayerSubmit(id, userName)
    }

    return (
        <form className="column" onSubmit={(event) => handleBattlePlayerSubmit(event)}>
            <label className="header" htmlFor={id}>{label}</label>
            <input
                id={id}
                type='text'
                placeholder="Github user name"
                onChange={(event) => dispatch(setUserName(id, event.target.value))}
                >
            </input>
            <button className="button" disabled={!userName.length}>Submit</button>

        </form>
    )
})

export default BattlePlayerInput;