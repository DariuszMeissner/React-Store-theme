import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import { apiSlice } from './apiSlice'
import cartReducer from './cart-slice/cartSlice'
import modalReducer from './modal-slice/modalSlice'
import searchRefeimentsSliceReducer from './search-refeiments-slice/searchRefeimentsSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['modal', 'searchRefeimentsSlice', 'apiSlice.reducerPath']
}

const reducers = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  searchRefeimentsSlice: searchRefeimentsSliceReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(apiSlice.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store
