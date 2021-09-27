import { combineReducers } from 'redux'
import loginStatusReducer from './loginStatus'
import orderItemReducer from './orderItem'
import orderIdItemReducer from './orderIdItem'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginStatusReducer', 'orderItemReducer'],
}

const rootReducer = combineReducers({
  loginStatusReducer,
  orderItemReducer,
  orderIdItemReducer,
})

export default persistReducer(persistConfig, rootReducer)
