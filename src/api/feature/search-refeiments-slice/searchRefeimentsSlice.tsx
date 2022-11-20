/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../apiSlice'

interface IInitialState {
  products: IProduct[] | null
}

const initialState: IInitialState = {
  products: []
}

const searchRefeimentsSlice = createSlice({
  name: 'searchRefeimentsSlice',
  initialState,
  reducers: {
    sortByHeigestPrice: (state, actions: { payload: IProduct[] }) => {
      const products = actions.payload || []

      state.products = products.sort(
        (curr: { price: number }, next: { price: number }) =>
          next.price - curr.price
      )
    },
    sortByLowestPrice: (state, actions: { payload: IProduct[] }) => {
      const products = actions.payload || []

      state.products = products.sort(
        (curr: { price: number }, next: { price: number }) =>
          curr.price - next.price
      )
    },
    sortByRating: (state, actions: { payload: IProduct[] }) => {
      const products = actions.payload || []

      state.products = products.sort(
        (curr: { rating: number }, next: { rating: number }) =>
          next.rating - curr.rating
      )
    },
    filterByBrand: (
      state,
      actions: { payload: { products: IProduct[]; brand: string } }
    ) => {
      const { brand, products } = actions.payload

      state.products = products.filter(
        (product: { brand: string }) => product.brand === brand
      )
    }
  }
})
export const searchRefeimentsActions = searchRefeimentsSlice.actions

export const {
  sortByHeigestPrice,
  sortByLowestPrice,
  sortByRating,
  filterByBrand
} = searchRefeimentsSlice.actions

export default searchRefeimentsSlice.reducer
