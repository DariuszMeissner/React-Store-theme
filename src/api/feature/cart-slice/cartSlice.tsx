/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface ICart {
  userId: number | null
  products: ICartProduct[]
}

export interface ICartProduct {
  id: number
  price: number
  discountPercentage: number
  stock: number
  quantity: number
}

const initialState: ICart = {
  products: [],
  userId: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const check = state.products.find((item) => item.id)

      if (!check) {
        state.products.push({
          id: product.id,
          price: product.price,
          discountPercentage: product.discountPercentage,
          stock: product.stock,
          quantity: 1
        })
      }
    },
    removeProduct: (state, action) => {
      const itemId = action.payload
      state.products = state.products.filter((el) => el.id !== itemId)
    },

    clearCart: (state) => {
      state.products = []
    },

    increase: (state, action) => {
      const itemId = action.payload
      const itemIndex = state.products.findIndex((item) => item.id === itemId)
      const itemAmount = state.products[itemIndex].quantity

      if (itemAmount) state.products[itemIndex].quantity += 1
    },

    decrease: (state, action) => {
      const itemId = action.payload
      const itemIndex = state.products.findIndex((item) => item.id === itemId)
      const itemAmount = state.products[itemIndex].quantity

      if (itemAmount > 1) state.products[itemIndex].quantity -= 1
    }
  }
})

export const selectAllProductsCart = (state: { cart: ICart }) =>
  state.cart.products

export const totalPrice = (state: { cart: ICart }) =>
  state.cart.products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

export const totalQuantity = (state: { cart: ICart }) =>
  state.cart.products.reduce((total, item) => total + item.quantity, 0)

export const totalProducts = (state: { cart: ICart }) =>
  state.cart.products.length

export const cartActions = cartSlice.actions

export default cartSlice.reducer
