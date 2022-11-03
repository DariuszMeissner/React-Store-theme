import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiSlice } from './api/feature/apiSlice'
import Cart from './pages/Cart'
// import { showTotalProductsPrice } from './api/cart/cartSlice'
import Account from './pages/Account'

const App = () => {
  const dispatch = useDispatch()
  const productsCategory = apiSlice.useGetProductsOfCategoryQuery('smartphones')
  const productsAll = apiSlice.useGetAllProductsQuery('')
  const product = apiSlice.useGetSingleProductQuery('1')
  const search = apiSlice.useSearchProductsQuery('phone')
  const pagination = apiSlice.useProductsPaginationQuery({
    limit: 10,
    skip: 10
  })
  // const totalPrice = useSelector(showTotalProductsPrice)

  const [login, { isSuccess, data }] = apiSlice.useLoginMutation()

  const onClickLogin = async () => {
    await login({ username: 'kminchelle', password: '0lelplR' })
  }

  return (
    <div className="App">
      <button type="button" onClick={onClickLogin}>
        login
      </button>
      <Cart />
      <Account />
    </div>
  )
}

export default App
