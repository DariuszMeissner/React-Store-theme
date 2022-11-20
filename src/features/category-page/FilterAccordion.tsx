import React, { FC } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { registerModal } from '../../api/feature/modal-slice/modalSlice'
import { RootState } from '../../api/feature/store'
import { useDisableScroll } from '../../hooks'

interface IProps {
  id: number
  title: string
  children: React.ReactNode
}

const style = {
  open: {
    position: 'absolute',
    zIndex: '7',
    width: '400px',
    marginBottom: '16px',
    fontWeight: '300',
    lineHeight: '18px',
    right: '50px',
    background: 'white',
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center'
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
  const active = useSelector((state: RootState) => state.modal.registered)

  const { lockScroll, unlockScroll } = useDisableScroll()

  const registered = active === id

  const handleRegisterAccordion = () => {
    if (registered) {
      dispatch(registerModal(null))
      unlockScroll()
    } else {
      lockScroll()
      dispatch(registerModal(id))
    }
  }

  return (
    <div className="filter-accordion">
      <button
        type="button"
        onClick={handleRegisterAccordion}
        style={style.button}>
        {title}
        {registered ? (
          <RiArrowUpSFill style={style.iconSize} />
        ) : (
          <RiArrowDownSFill style={style.iconSize} />
        )}
      </button>
      <div style={registered ? style.open : style.close}>{children}</div>
    </div>
  )
}

export default FilterAccordion
