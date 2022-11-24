import React, { FC } from 'react'
import useSizeScreen from '../../hooks/useSizeScreen'
import FooterCopyright from './FooterCopyright'
import FooterPayments from './FooterPayments'

const Footer: FC = () => {
  const screen = useSizeScreen()
  const padding =
    (screen.isS && '32px 16px 80px 16px') ||
    (screen.isM && '32px') ||
    ((screen.isX || screen.isL) && '32px 96px') ||
    undefined

  const style = {
    footerContainer: {
      color: 'white',
      background: '#181818',
      padding,
      textAlign: 'center'
    }
  } as const

  return (
    <footer style={style.footerContainer}>
      <div>Secure payments with:</div>
      <FooterPayments />
      <FooterCopyright />
    </footer>
  )
}

export default Footer
