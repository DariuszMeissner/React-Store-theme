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

  return (
    <button
      style={style.main}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}>
      <span>{title}</span>
      <div style={style.hover} />
    </button>
  )
}

NavBarButton.defaultProps = {
  color: '#ffffff'
}

export default NavBarButton
