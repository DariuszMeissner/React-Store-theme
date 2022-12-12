import React, { FC } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { Button, Headline1, Headline2 } from '../components'
import { Section } from '../layout'

// interface IProps {}

const style = {
  iconButton: {
    color: 'black',
    margin: 0,
    textTransform: 'uppercase',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
} as const

const ThankYouPage: FC = () => {
  return (
    <Section>
      <Headline2 styleCss={{ textAlign: 'center' }}>
        Your order was placed
      </Headline2>
      <Button
        type="link"
        iconSize={25}
        icon={HiArrowLongLeft}
        text="Back to home"
        label="icon-back"
        path="/"
        styleCss={style.iconButton}
      />
    </Section>
  )
}
export default ThankYouPage
