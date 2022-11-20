import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { apiSlice } from '../api/feature/apiSlice'
import { searchRefeimentsActions } from '../api/feature/search-refeiments-slice/searchRefeimentsSlice'
import { RootState } from '../api/feature/store'
import { Grid, Headline2, ProductTeaser } from '../components'
import { LoadMore, SearchRefeiments } from '../features'
import { Section } from '../layout'

const CategoryPage: FC = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const { data, isSuccess } = apiSlice.useGetProductsOfCategoryQuery(
    category || ''
  )
  const products = useSelector(
    (state: RootState) => state.searchRefeimentsSlice.products
  )

  useEffect(() => {
    // set recommended products
    if (isSuccess) {
      const productsCopy = data?.products?.slice()
      dispatch(searchRefeimentsActions.sortByRating(productsCopy || []))
    }
  }, [isSuccess])

  const style = {
    section: {
      margin: '25px 0'
    }
  } as const

  return (
    <Section styleCss={style.section}>
      <Headline2>{category}</Headline2>
      {category && (
        <SearchRefeiments data={products || []} category={category} />
      )}
      <Grid
        rowGap={[20, 20, 20, 20]}
        columnGap={[20, 20, 20, 20]}
        gridColumns={[2, 3, 4, 4]}
        columnEqual>
        {products &&
          products.map((item) => (
            <ProductTeaser productId={`${item.id}`} key={item.id} />
          ))}
      </Grid>
      {isSuccess && <LoadMore length={products?.length || 0} />}
    </Section>
  )
}

export default CategoryPage
