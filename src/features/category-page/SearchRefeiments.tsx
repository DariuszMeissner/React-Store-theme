import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiSlice, IProduct } from '../../api/feature/apiSlice'
import { filterAccordionSliceActions } from '../../api/feature/filter-accordion-slice/filterAccordionSlice'
import { searchRefeimentsActions } from '../../api/feature/search-refeiments-slice/searchRefeimentsSlice'
import { Button } from '../../components'
import { useSizeScreen } from '../../hooks'
import FilterAccordion from './FilterAccordion'

interface IProps {
  data: IProduct[]
  category: string
}
const style = {
  wrapper: {
    position: 'relative',
    paddingTop: '40px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'end'
  },
  button: {
    color: 'black'
  }
} as const

const SearchRefeiments: FC<IProps> = ({ data, category }) => {
  const screen = useSizeScreen()
  const dispatch = useDispatch()
  const [orderByTitle, setOrderByTitle] = useState<string>('Recommended')
  const [brandTitle, setBrandTitle] = useState<string>('All')

  const queryProducts = apiSlice.useGetProductsOfCategoryQuery(category)

  // unfreeze data
  const products = data?.slice()
  const allProducts = queryProducts.data?.products.slice()

  const handleHeighestPrice = useCallback(() => {
    dispatch(searchRefeimentsActions.sortByHeigestPrice(products || []))
    setOrderByTitle('Price Low to High')
  }, [products])

  const handleLowestPrice = useCallback(() => {
    dispatch(searchRefeimentsActions.sortByLowestPrice(products || []))
    setOrderByTitle('Price High to Low')
  }, [products])

  const handleRating = useCallback(() => {
    dispatch(searchRefeimentsActions.sortByRating(products || []))
    setOrderByTitle('Recommended')
  }, [products])

  const handleBrand = useCallback(
    (brand: string) => {
      dispatch(
        searchRefeimentsActions.filterByBrand({
          products: queryProducts.data?.products || [],
          brand
        })
      )
      setBrandTitle(brand)
    },
    [products]
  )

  const handleAllProductsCategory = useCallback(() => {
    if (queryProducts.isSuccess) {
      dispatch(searchRefeimentsActions.sortByHeigestPrice(allProducts || []))
    }
    setBrandTitle('all')
  }, [products])

  const closeFilterAccordion = useCallback(() => {
    dispatch(filterAccordionSliceActions.register(null))
  }, [products])

  return (
    <div className="search-refeiments" style={style.wrapper}>
      {(screen.isX || screen.isL) && (
        <>
          {/* sort filter */}
          <FilterAccordion id={1} title={`Order by : ${orderByTitle}`}>
            <Button
              text="Price Low to High"
              onClick={handleLowestPrice}
              styleCss={style.button}
            />
            <Button
              text="Price High to Low"
              onClick={handleHeighestPrice}
              styleCss={style.button}
            />
            <Button
              text="Raecommended"
              onClick={handleRating}
              styleCss={style.button}
            />

            {/* apply button */}
            <Button
              text="Apply"
              onClick={closeFilterAccordion}
              variant="black"
              styleCss={{ width: '100%', margin: '0', marginTop: '25px' }}
            />
          </FilterAccordion>

          {/* brand filter */}
          <FilterAccordion id={2} title={`${brandTitle}`}>
            {queryProducts.data?.products.map((el) => (
              <Button
                text={`${el.brand}`}
                onClick={() => handleBrand(el.brand)}
                styleCss={style.button}
                key={el.id}
              />
            ))}
            <Button
              text="All"
              onClick={handleAllProductsCategory}
              styleCss={style.button}
            />

            {/* apply button */}
            <Button
              text="Apply"
              onClick={closeFilterAccordion}
              variant="black"
              styleCss={{ width: '100%', margin: '0', marginTop: '25px' }}
            />
          </FilterAccordion>
        </>
      )}

      {(screen.isS || screen.isM) && <div>filter button</div>}
    </div>
  )
}

export default SearchRefeiments
