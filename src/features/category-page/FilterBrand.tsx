import React, { ChangeEvent, FC } from 'react'
import { IProduct } from '../../api/feature/apiSlice'
import { Button, RadioButton } from '../../components'
import { useSizeScreen } from '../../hooks'

interface IProps {
  filterBrandValue: string
  allCategoryProducts: IProduct[]
  onChangeBrandFilter: (e: ChangeEvent<HTMLInputElement>) => void
  closeFilter?: () => void
  handleAllProductsCategory: () => void
}

const FilterBrand: FC<IProps> = ({
  filterBrandValue,
  allCategoryProducts,
  onChangeBrandFilter,
  closeFilter,
  handleAllProductsCategory
}) => {
  const screen = useSizeScreen()

  const categories = allCategoryProducts.map((el) => el.brand)
  const categoriesWithoutDuplicate = [...new Set(categories)]

  const style = {
    container: {
      width: '100%',
      padding: screen.isL || screen.isX ? 30 : 0
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: screen.isS || screen.isM ? 'column' : undefined,
      alignItems: screen.isS || screen.isM ? 'start' : 'center',
      width: '100%'
    }
  } as const

  return (
    <div style={style.container}>
      <div style={style.buttons}>
        {categoriesWithoutDuplicate.map((category) => (
          <RadioButton
            label={category}
            value={filterBrandValue === category}
            onChange={onChangeBrandFilter}
            key={category}
          />
        ))}
        <RadioButton
          label="Brand All"
          value={filterBrandValue === 'Brand-all'}
          onChange={handleAllProductsCategory}
          key="brand-all"
        />
      </div>

      {(screen.isL || screen.isX) && (
        <Button
          type="button"
          text="Apply"
          onClick={closeFilter}
          variant="black"
          styleCss={{ width: '100%', margin: '0', marginTop: '25px' }}
        />
      )}
    </div>
  )
}

FilterBrand.defaultProps = {
  closeFilter: () => {}
}

export default FilterBrand
