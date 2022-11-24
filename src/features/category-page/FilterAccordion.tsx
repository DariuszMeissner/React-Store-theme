import React, { FC, useRef } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { registerModal } from '../../api/feature/modal-slice/modalSlice'
import { RootState } from '../../api/feature/store'
import { useDisableScroll } from '../../hooks'
import MODALS from '../../util/modalsID'

interface IProps {
  id: number
  title: string
  children: React.ReactNode
}

const FilterAccordion: FC<IProps> = ({ id, title, children }) => {
  const dispatch = useDispatch()
  const contentEl = useRef<HTMLDivElement>(null)
  const active = useSelector((state: RootState) => state.modal.registered)

  const { lockScroll, unlockScroll } = useDisableScroll()

  const registered = active === id

  const positionAccordion = active === MODALS.FILTER_SORT_ID ? 50 : 0

  const style = {
    content: {
      height: registered ? contentEl.current?.scrollHeight : 0,
      position: 'absolute',
      zIndex: 7,
      right: positionAccordion,
      width: 400,
      fontWeight: 300,
      lineHeight: '18px',
      textAlign: 'center',
      background: 'white',
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      transition: 'height 300ms ease'
    },
    iconSize: {
      height: 20,
      width: 20
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 30
    }
  } as const

  const handleRegisterAccordion = () => {
    if (registered) {
      unlockScroll()
      dispatch(registerModal(null))
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
      <div ref={contentEl} style={style.content}>
        {children}
      </div>
    </div>
  )
}

export default FilterAccordion
