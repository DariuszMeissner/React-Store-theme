import React, { FC } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllProductsCart } from '../api/feature/cart-slice/cartSlice'
import { Button, Logo } from '../components'
import { useSizeScreen } from '../hooks'
import Section from '../layout/Section'

type TProps = {
  children: React.ReactNode
}

const OrderPage: FC<TProps> = ({ children }) => {
  const screen = useSizeScreen()
  const navigate = useNavigate()
  const { step } = useParams()
  const productsCart = useSelector(selectAllProductsCart)

  const style = {
    header: {
      position: 'sticky',
      zIndex: 2,
      top: 0,
      height: 80,
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconButton: {
      color: 'black',
      margin: 0,
      textTransform: 'uppercase',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: screen.isX || screen.isL ? 'start' : 'center'
    },
    footer: {
      marginBottom: 20
    }
  } as const

  return (
    <div>
      {productsCart.length > 0 && (
        <>
          <header style={style.header}>
            <Logo />
          </header>
          <main>{children}</main>
          <footer>
            {step === 'cart' && (
              <Section styleCss={style.footer}>
                <Button
                  iconSize={25}
                  icon={HiArrowLongLeft}
                  text="Back to shopping"
                  label="icon-back"
                  onClick={() => navigate('/')}
                  styleCss={style.iconButton}
                />
              </Section>
            )}
          </footer>
        </>
      )}

      {productsCart.length === 0 && <p>No product in cart</p>}
    </div>
  )
}

export default OrderPage
