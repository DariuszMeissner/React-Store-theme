import React, { FC } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { useParams } from 'react-router-dom'
import { Button, Logo } from '../components'
import { useSizeScreen } from '../hooks'
import Section from '../layout/Section'

type TProps = {
  children: React.ReactNode
}

const OrderPage: FC<TProps> = ({ children }) => {
  const screen = useSizeScreen()
  const { step } = useParams()

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
    <>
      <header style={style.header}>
        <Logo />
      </header>
      <main>{children}</main>
      <footer>
        {step === 'cart' && (
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
