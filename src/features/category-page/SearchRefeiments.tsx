import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { apiSlice, IProduct } from '../../api/feature/apiSlice'
import { registerModal } from '../../api/feature/modal-slice/modalSlice'
import {
  filterByBrand,
  sortByHeigestPrice,
  sortByLowestPrice,
  sortByRating
} from '../../api/feature/search-refeiments-slice/searchRefeimentsSlice'
import { RootState } from '../../api/feature/store'
import {
  Accordion,
  AnimationCss,
  Button,
  Headline1,
  Headline2,
  Modal,
  Overlay
} from '../../components'
import { useDisableScroll, useRect, useSizeScreen } from '../../hooks'
import MODALS from '../../util/modalsID'
import FilterAccordion from './FilterAccordion'
import FilterBrand from './FilterBrand'
import FilterSort from './FilterSort'

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
    margin: '0',
    marginBottom: '15px'
  },
  modal: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'start',
    padding: '50px',
    maxWidth: '600px'
  },
  iconButtonClose: {
    color: 'black',
    position: 'absolute',
    top: 20,
    right: 20
  }
} as const

const INITIAL_SORT_VALUE = 'Recommended'
const INITIAL_FILTER_BRAND_VALUE = 'Brand-all'

const SearchRefeiments: FC<IProps> = ({ data, category }) => {
  const screen = useSizeScreen()
  const dispatch = useDispatch()

  // get state active of modal
  const isActiveModal = useSelector(
    (state: RootState) => state.modal.registered
  )

  const { lockScroll, unlockScroll } = useDisableScroll()

  // get size of search refeiments
  const [rect, ref] = useRect()

  // filters state
  const [sortingValue, setSortingValue] = useState<string>(INITIAL_SORT_VALUE)
  const [filterBrandValue, setFilterBrandValue] = useState<string>(
    INITIAL_FILTER_BRAND_VALUE
  )
  // get data for brand filter
  const queryProducts = apiSlice.useGetProductsOfCategoryQuery(category)

  // unfreeze data
  const filteredProducts = data?.slice()
  const allCategoryProducts = queryProducts.data?.products.slice()

  const onChangeSortFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSortingValue(value)

      switch (value) {
        case 'Price Low to High':
          dispatch(sortByLowestPrice(filteredProducts || []))
          break
        case 'Price High to Low':
          dispatch(sortByHeigestPrice(filteredProducts || []))
          break
        case 'Recommended':
          dispatch(sortByRating(filteredProducts || []))
          break
        default:
      }
    },
    [filteredProducts]
  )

  const onChangeBrandFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setFilterBrandValue(value)

      dispatch(
        filterByBrand({
          products: queryProducts.data?.products || [],
          brand: value
        })
      )
    },
    [filteredProducts]
  )

  const handleAllProductsCategory = useCallback(() => {
    if (queryProducts.isSuccess) {
      dispatch(sortByHeigestPrice(allCategoryProducts || []))
    }
    setFilterBrandValue('Brand-all')
  }, [filteredProducts])

  const closeFilterAccordion = useCallback(() => {
    dispatch(registerModal(null))
    unlockScroll()
  }, [filteredProducts])

  const handleRegisterModal = (id: number | null) => {
    if (isActiveModal === id) {
      dispatch(registerModal(null))
      unlockScroll()
    } else {
      dispatch(registerModal(id))
      lockScroll()
    }
  }

  return (
    <>
      <div className="search-refeiments" style={style.wrapper} ref={ref}>
        {/* sort filter on X/L */}
        {(screen.isX || screen.isL) && (
          <>
            <FilterAccordion
              id={MODALS.FILTER_SORT_ID}
              title={`Order by : ${sortingValue}`}>
              <FilterSort
                sortingValue={sortingValue}
                onChangeSortFilter={onChangeSortFilter}
                closeFilter={closeFilterAccordion}
              />
            </FilterAccordion>

            {/* brand filter on X/L */}
            <FilterAccordion
              id={MODALS.FILTER_BRAND_ID}
              title={`${filterBrandValue}`}>
              <FilterBrand
                filterBrandValue={filterBrandValue}
                allCategoryProducts={allCategoryProducts || []}
                onChangeBrandFilter={onChangeBrandFilter}
                closeFilter={closeFilterAccordion}
                handleAllProductsCategory={handleAllProductsCategory}
              />
            </FilterAccordion>

            {/* overlay accordion */}
            {(isActiveModal === MODALS.FILTER_BRAND_ID ||
              isActiveModal === MODALS.FILTER_SORT_ID) && (
              <Overlay
                styleCss={{ top: (rect?.top || 0) + (rect?.height || 0) }}
              />
            )}
          </>
        )}

        {/* button open filter modal on M/S */}
        {(screen.isS || screen.isM) && (
          <>
            <Button
              text="Filters"
              onClick={() => handleRegisterModal(MODALS.ALL_FILTERS)}
              variant="black"
              styleCss={style.button}
            />

            {/* overlay on M/S */}
            {isActiveModal === MODALS.ALL_FILTERS && (
              <Overlay
                styleCss={{
                  top: 0 - (rect?.top || 0) - (rect?.height || 0),
                  zIndex: '6'
                }}
              />
            )}
          </>
        )}
      </div>

      {/* filters modal M/S */}
      {(screen.isS || screen.isM) && (
        <AnimationCss
          isMounted={isActiveModal === MODALS.ALL_FILTERS}
          variant="appear"
          styleCss={{ zIndex: '999' }}>
          {/* modal */}
          <Modal
            id={MODALS.ALL_FILTERS}
            closeOnClick={() => handleRegisterModal(MODALS.ALL_FILTERS)}
            modalPosition="left"
            styleCss={{
              ...style.modal,
              top: 0 - (rect?.top || 0) - (rect?.height || 0)
            }}>
            {/* content */}
            <Button
              label="icon-close"
              icon={IoCloseOutline}
              onClick={() => handleRegisterModal(MODALS.ALL_FILTERS)}
              styleCss={style.iconButtonClose}
            />
            <Headline1>Filter</Headline1>
            <Accordion
              titles={[
                `Sort by: ${sortingValue}`,
                `Brand: ${filterBrandValue} `
              ]}
              styleCss={{ height: 'auto', marginTop: '20px' }}>
              <FilterSort
                sortingValue={sortingValue}
                onChangeSortFilter={onChangeSortFilter}
              />
              <FilterBrand
                filterBrandValue={filterBrandValue}
                onChangeBrandFilter={onChangeBrandFilter}
                allCategoryProducts={allCategoryProducts || []}
                handleAllProductsCategory={handleAllProductsCategory}
              />
            </Accordion>

            <Button
              text="Apply"
              onClick={() => handleRegisterModal(MODALS.ALL_FILTERS)}
              variant="black"
              styleCss={style.button}
            />
          </Modal>
        </AnimationCss>
      )}
    </>
  )
}

export default SearchRefeiments
