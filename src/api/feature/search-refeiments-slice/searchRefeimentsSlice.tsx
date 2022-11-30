import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    sortByHeigestPrice: (state, actions: PayloadAction<IProduct[]>) => {
      const products = actions.payload || []

      const sortedProducts = products.sort(
        (curr: { price: number }, next: { price: number }) =>
          next.price - curr.price
      )

      return {
        ...state,
        products: sortedProducts
      }
    },
    sortByLowestPrice: (state, actions: PayloadAction<IProduct[]>) => {
      const products = actions.payload || []

      const sortedProducts = products.sort(
        (curr: { price: number }, next: { price: number }) =>
          curr.price - next.price
      )

      return {
        ...state,
        products: sortedProducts
      }
    },
    sortByRating: (state, actions: PayloadAction<IProduct[]>) => {
      const products = actions.payload || []

      const sortedProducts = products.sort(
        (curr: { rating: number }, next: { rating: number }) =>
          next.rating - curr.rating
      )

      return {
        ...state,
        products: sortedProducts
      }
    },
    filterByBrand: (
      state,
      actions: { payload: { products: IProduct[]; brand: string } }
    ) => {
      const { brand, products } = actions.payload

      const sortedProducts = products.filter(
        (product: { brand: string }) => product.brand === brand
      )

      return {
        ...state,
        products: sortedProducts
      }
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
