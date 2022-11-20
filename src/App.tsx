import React, { FC } from 'react'
import BackToTop from './components/BackToTop'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header'

type TProps = {
  children: React.ReactNode
}

const App: FC<TProps> = ({ children }) => {
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
