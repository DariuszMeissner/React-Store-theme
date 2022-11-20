import React, { FC } from 'react'
import { SiVisa } from 'react-icons/si'
import { FaCcMastercard, FaCcPaypal } from 'react-icons/fa'

const style = {
  payments: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 25,
    justifyContent: 'center'
  },
  icon: {
    height: '35px',
    width: '35px',
    margin: '5px 15px'
  }
} as const

const FooterPayments: FC = () => {
  return (
    <div className="footer-payments" style={style.payments}>
      <SiVisa style={style.icon} />
      <FaCcMastercard style={style.icon} />
      <FaCcPaypal style={style.icon} />
    </div>
  )
}

export default FooterPayments
