import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../apiSlice'

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
  title: string
  images: string[]
}

const initialState: ICart = {
  products: [],
  userId: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload
      const exist = state.products.find((item) => item.id === product.id)

      if (exist) {
        state.products.map((item) => {
          if (item.id === product.id) {
            exist.quantity += 1
          }
          return item
        })
      } else {
        state.products.push({
          id: product.id,
          title: product.title,
          price: product.price,
          discountPercentage: product.discountPercentage,
          stock: product.stock,
          quantity: 1,
          images: product.images
        })
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const itemId = action.payload

      return {
        ...state,
        products: state.products.filter((el) => el.id !== itemId)
      }
    },

    clearCart: (state) => {
      return {
        ...state,
        products: []
      }
    },

    increase: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const itemInCart = state.products.find((item) => item.id === itemId)

      if (itemInCart) {
        itemInCart.quantity += 1
      }
    },

    decrease: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const itemInCart = state.products.find((item) => item.id === itemId)

      if (itemInCart) {
        itemInCart.quantity -= 1
      }
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

export const { addProduct, removeProduct, clearCart, increase, decrease } =
  cartSlice.actions

export const cartActions = cartSlice.actions

export default cartSlice.reducer
