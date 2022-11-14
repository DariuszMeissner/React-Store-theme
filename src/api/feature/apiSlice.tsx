import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface IProducts {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}

export interface IUser {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com'
  }),
  tagTypes: ['Products', 'Cart'],
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProducts, string>({
      query: () => ({
        url: '/products',
        providesTags: ['Products']
      })
    }),

    getSingleProduct: builder.query<IProduct, string | undefined>({
      query: (id) => ({
        url: `/products/${id}`
      })
    }),

    getAllProductsCategories: builder.query<string[], string>({
      query: () => ({
        url: `/products/categories`
      })
    }),

    getProductsOfCategory: builder.query<IProducts, string>({
      query: (name) => ({
        url: `/products/category/${name}`
      })
    }),

    searchProducts: builder.query<IProducts, string>({
      query: (name) => ({
        url: `/products/search?q=${name}`
      })
    }),

    productsPagination: builder.query<
      IProducts,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => {
        return {
          url: `/products?limit=${limit}&skip=${skip}`
        }
      }
    }),

    login: builder.mutation<IUser, { username: string; password: string }>({
      query: ({ username, password }) => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: '/auth/login',
        body: {
          username,
          password
        },
        providesTags: ['User']
      })
    })
  })
})
