import { combineReducers } from 'redux'

import timerReducer from './timersReducer'
import selectedTimerReducer from './selectedTimerReducer'
import timersReducer from './timersReducer'

export default combineReducers({
    timers: timersReducer,
    selectedTimer: selectedTimerReducer,
})