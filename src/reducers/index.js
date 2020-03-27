import { combineReducers } from 'redux'
import starwars from './starwars'
import login from './login'

const reducer = combineReducers({
    login,
    starwars
})

export default reducer