import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './apiSlice'
import cartReducer from './cart-slice/cartSlice'
import modalReducer from './modal-slice/modalSlice'
import searchRefeimentsSliceReducer from './search-refeiments-slice/searchRefeimentsSlice'
import filterAccordionSliceReducer from './filter-accordion-slice/filterAccordionSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    searchRefeimentsSlice: searchRefeimentsSliceReducer,
    filterAccordionSlice: filterAccordionSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store
