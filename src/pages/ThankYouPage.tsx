import React, { FC } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectOrderDetails } from '../api/feature/checkout/checkoutSlice'
import { Button, Headline2 } from '../components'
import { Section } from '../layout'

const style = {
  iconButton: {
    color: 'black',
    margin: 0,
    textTransform: 'uppercase',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberWrap: {
    textAlign: 'center'
  },
  number: {
    fontWeight: 500
  },
  detailsWrap: {
    backgroundColor: '#f6f6f6',
    width: '100%',
    maxWidth: 500,
    padding: 25,
    margin: '50px auto'
  },
  details: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 500
  },
  label: {
    fontWeight: 500,
    marginTop: 25
  },
  content: {
    fontWeight: 300
  },
  section: {
    marginTop: 25
  },
  totalWrapper: {
    marginTop: 25
  }
} as const

const ThankYouPage: FC = () => {
  const navigate = useNavigate()
  const orderDetails = useSelector(selectOrderDetails)

  return (
    <Section>
      <Headline2 styleCss={{ textAlign: 'center' }}>
        Your order was placed.
      </Headline2>

      <p style={style.numberWrap}>
        <span>Order number is</span>&nbsp;
        <span style={style.number}>{orderDetails.number}</span>
      </p>

      <div style={style.detailsWrap}>
        <h3 style={style.details}>Details</h3>
        <p style={style.label}>Products</p>

        {orderDetails.products.map((product) => (
          <div style={style.content} key={product.id}>
            <span>{product.quantity}&nbsp;x&nbsp;</span>
            <span>{product.title}</span>
          </div>
        ))}

        <div style={style.totalWrapper}>
          <span style={style.label}>Total:&nbsp;</span>
          <span style={style.content}>{orderDetails.subtotal}&nbsp;€</span>
        </div>

        <div>
          <p style={style.label}>Contact:</p>
          <p style={style.content}>email: {orderDetails.email}</p>
          <p style={style.content}>
            phone number: {orderDetails.shippingAddress?.phone}
          </p>
        </div>
      </div>

      <Button
        iconSize={25}
        icon={HiArrowLongLeft}
        text="Back to home"
        label="icon-back"
        onClick={() => navigate('/')}
        styleCss={style.iconButton}
      />
    </Section>
  )
}
export default ThankYouPage
