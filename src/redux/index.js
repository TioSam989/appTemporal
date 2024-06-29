import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'


const reducer = combineReducers({

})

export const store = createStore(reducer, applyMiddleware(thunk))