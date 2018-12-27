import reducer from './reducer'
import { createStore, compose, applyMiddleware } from 'redux'
import * as constants from './constants'
import * as actions from './actions'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

export {store, constants, actions}