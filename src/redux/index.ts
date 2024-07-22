import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'

const passedCarousel = (state = false, action: any) => {
    switch (action.type) {
        case 'SET_PASSED_CAROUSEL':
            return action.payload
        default:
            return state
    }
}

const reducer = combineReducers({
    passedCarousel,
})

export type IRootState = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunk))