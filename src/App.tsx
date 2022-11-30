import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BackToTop from './components/BackToTop'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header'

type TProps = {
  children: React.ReactNode
}

const App: FC<TProps> = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return (
    <div>
      <Header />
      {children}
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
