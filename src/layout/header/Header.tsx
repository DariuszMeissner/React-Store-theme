/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react'
import HeaderTop from '../../features/header/components/header-top/HeaderTop'
import NavBar from '../../features/header/components/nav-bar/NavBar'
import useSizeScreen from '../../hooks/useSizeScreen'

const Header: FC = () => {
  const screen = useSizeScreen()

  return (
    <header>
      <HeaderTop />
      {screen.isL && <NavBar />}
    </header>
  )
}

export default Header
