import React, { FC } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { filterAccordionSliceActions } from '../../api/feature/filter-accordion-slice/filterAccordionSlice'
import { RootState } from '../../api/feature/store'

interface IProps {
  id: number
  title: string
  children: React.ReactNode
}

const style = {
  open: {
    position: 'absolute',
    width: '400px',
    marginBottom: '16px',
    fontWeight: '300',
    lineHeight: '18px',
    right: '50px',
    background: 'white',
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  close: {
    position: 'absolute',
    height: '0px',
    overflow: 'hidden',
    marginBottom: '10px'
  },
  iconSize: {
    height: '20px',
    width: '20px'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '30px'
  }
} as const

const FilterAccordion: FC<IProps> = ({ id, title, children }) => {
  const dispatch = useDispatch()
  const active = useSelector(
    (state: RootState) => state.filterAccordionSlice.registered
  )

  const register = active === id

  const registerAccordion = () => {
    if (register) {
      dispatch(filterAccordionSliceActions.register(null))
    } else {
      dispatch(filterAccordionSliceActions.register(id))
    }
  }

  return (
    <div className="filter-accordion">
      <button type="button" onClick={registerAccordion} style={style.button}>
        {title}
        {register ? (
          <RiArrowUpSFill style={style.iconSize} />
        ) : (
          <RiArrowDownSFill style={style.iconSize} />
        )}
      </button>
      <div style={register ? style.open : style.close}>{children}</div>
    </div>
  )
}

export default FilterAccordion
