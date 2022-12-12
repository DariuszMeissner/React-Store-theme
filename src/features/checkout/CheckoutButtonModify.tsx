import React, { CSSProperties, FC } from 'react'

interface IProps {
  text: string
  styleCss?: CSSProperties
  onClick: () => void
}

const CheckoutButtonModify: FC<IProps> = ({ text, styleCss, onClick }) => {
  const style = {
    button: {
      lineHeight: '20px',
      letterSpacing: 0.5,
      fontWeight: 300,
      padding: '2px 0',
      textAlign: 'center',
      borderBottom: '1px solid #000'
    }
  } as const

  return (
    <button
      type="button"
      style={{ ...style.button, ...styleCss }}
      onClick={onClick}>
      {text}
    </button>
  )
}

CheckoutButtonModify.defaultProps = {
  styleCss: {}
}

export default CheckoutButtonModify
