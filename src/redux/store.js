
// import the `applyMiddlware` tool
import { createStore, applyMiddleware } from 'redux'
// import the `thunk` tool
// import thunk from 'redux-thunk'
import reducers from './reducers'
import state from './state'

// pass them as a third argument to the `createStore` call
export default createStore(reducers, state)