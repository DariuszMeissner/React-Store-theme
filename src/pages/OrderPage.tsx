import React, { FC } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { selectIsStep } from '../api/feature/checkout/checkoutSlice'
import { Button, Logo } from '../components'
import { useSizeScreen } from '../hooks'
import Section from '../layout/Section'

type TProps = {
  children: React.ReactNode
}

const OrderPage: FC<TProps> = ({ children }) => {
  const screen = useSizeScreen()
  const isStep = useSelector(selectIsStep)

  const style = {
    header: {
      position: 'sticky',
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
    <>
      <header style={style.header}>
        <Logo />
      </header>
      <main>{children}</main>
      <footer>
        {isStep.cart && (
          <Section styleCss={style.footer}>
            <Button
              type="link"
              iconSize={25}
              icon={HiArrowLongLeft}
              text="Back to shopping"
              label="icon-back"
              path="/"
              styleCss={style.iconButton}
            />
          </Section>
        )}
      </footer>
    </>
  )
}

export default OrderPage
