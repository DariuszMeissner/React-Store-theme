import React, { ChangeEvent, FC } from 'react'
import { Button, RadioButton } from '../../components'
import { useSizeScreen } from '../../hooks'

interface IProps {
  sortingValue: string
  onChangeSortFilter: (e: ChangeEvent<HTMLInputElement>) => void
  closeFilter?: () => void
}

const FilterSort: FC<IProps> = ({
  sortingValue,
  onChangeSortFilter,
  closeFilter
}) => {
  const screen = useSizeScreen()

  const style = {
    container: {
      width: '100%',
      padding: 30
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
        <RadioButton
          label="Price Low to High"
          value={sortingValue === 'Price Low to High'}
          onChange={onChangeSortFilter}
        />
        <RadioButton
          label="Price High to Low"
          value={sortingValue === 'Price High to Low'}
          onChange={onChangeSortFilter}
        />
        <RadioButton
          label="Recommended"
          value={sortingValue === 'Recommended'}
          onChange={onChangeSortFilter}
        />
      </div>

      {/* apply button */}
      {(screen.isL || screen.isX) && (
        <Button
          text="Apply"
          onClick={closeFilter}
          variant="black"
          styleCss={{ width: '100%', margin: '0', marginTop: '25px' }}
        />
      )}
    </div>
  )
}

FilterSort.defaultProps = {
  closeFilter: () => {}
}

export default FilterSort
