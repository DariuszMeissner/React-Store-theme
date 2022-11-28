import React, { FC, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { apiSlice } from '../api/feature/apiSlice'
import { searchRefeimentsActions } from '../api/feature/search-refeiments-slice/searchRefeimentsSlice'
import { RootState } from '../api/feature/store'
import { Grid, Headline2, ProductTeaser } from '../components'
import { LoadMore, SearchRefeiments } from '../features'
import { Section } from '../layout'

export const style = {
  section: {
    margin: '25px 0'
  }
} as const

export const PRODUCT_PER_PAGE = 8

const CategoryPage: FC = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const { data, isSuccess } = apiSlice.useGetProductsOfCategoryQuery(
    category || ''
  )
  const products = useSelector(
    (state: RootState) => state.searchRefeimentsSlice.products
  )

  const headline = category?.replace('-', ' ')

  useEffect(() => {
    // set recommended products on start
    if (isSuccess) {
      const productsCopy = data?.products?.slice(0, PRODUCT_PER_PAGE)
      dispatch(searchRefeimentsActions.sortByRating(productsCopy || []))
    }
  }, [isSuccess, category, data])

  return (
    <main className="main-content">
      <Section styleCss={style.section}>
        <Headline2>{headline}</Headline2>
        {category && (
          <SearchRefeiments data={products || []} category={category} />
        )}
        <Grid
          rowGap={[20, 20, 20, 20]}
          columnGap={[20, 20, 20, 20]}
          gridColumns={[2, 3, 4, 4]}
          columnEqual>
          {products &&
            products?.map((item) => (
              <ProductTeaser productId={`${item.id}`} key={item.id} />
            ))}
        </Grid>
        <LoadMore length={products?.length || 0} />
      </Section>
    </main>
  )
}

export default CategoryPage
