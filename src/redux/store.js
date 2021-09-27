import { createStore, combineReducers } from 'redux'
import { reducer } from './reducer'
import { todoReducer } from './todoReducer'

const rootReducer = combineReducers({
    counter: reducer,
    todos: todoReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())