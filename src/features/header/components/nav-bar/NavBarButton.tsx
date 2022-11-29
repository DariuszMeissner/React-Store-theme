import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../api/feature/store'

interface IProps {
  title: string
  id: number
  onClick: () => void
  color?: string
}

const NavBarButton: FC<IProps> = ({ title, id, onClick, color }) => {
  const [onMouse, setOnMouse] = useState<boolean>(false)
  const activeNav = useSelector((state: RootState) => state.modal.registered)

  const isActive = activeNav === id

  const style = {
    main: {
      color,
      lineHeight: '40px',
      textTransform: 'uppercase',
      margin: '0 20px',
      borderBottom: `5px solid ${isActive ? 'white' : 'transparent'}`,
      position: 'relative'
    },
    hover: {
      position: 'absolute',
      height: 1,
      bottom: isActive ? -2 : 5,
      left: 0,
      width: '100%',
      backgroundColor: color,
      transform: onMouse ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: onMouse ? 'left' : 'right',
      transition: 'transform 0.25s ease-out'
    }
  } as const

  const handleOnClick = () => {
    onClick()
  }

  const handleOnMouseEnter = () => setOnMouse(true)

  const handleOnMouseLeave = () => setOnMouse(false)

  return (
    <button
      type="button"
      onClick={handleOnClick}
      style={style.main}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      <span>{title}</span>
      <div style={style.hover} />
    </button>
  )
}

NavBarButton.defaultProps = {
  color: '#ffffff'
}

export default NavBarButton
