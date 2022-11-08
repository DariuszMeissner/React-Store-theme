import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { apiSlice } from './api/feature/apiSlice'
import Header from './layout/header/Header'

type TProps = {
  children: React.ReactNode
}

const App: FC<TProps> = ({ children }) => {
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
    <div>
      <Header />
      {children}
    </div>
  )
}

export default App
