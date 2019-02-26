import { createStore, combineReducers } from 'redux'

import size from './reducers/sizeReducer'
import cart from './reducers/cartReducer'

export default createStore(combineReducers({ size, cart }))
