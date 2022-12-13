import React, { CSSProperties, FC, useState } from 'react'

interface IProps {
  text: string
  styleCss?: CSSProperties
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CheckoutButtonPurchase: FC<IProps> = ({ text, styleCss, onClick }) => {
  const [onMouse, setOnMouse] = useState<boolean>(false)

  const style = {
    button: {
      textTransform: 'uppercase',
      padding: '12px 18px',
      marginTop: 15,
      position: 'relative',
      backgroundSize: '200% 105%',
      backgroundColor: 'transparent',
      backgroundImage:
        'linear-gradient(to right,#da291c 0%,#da291c 50%,transparent 50%,transparent 100%)',
      backgroundPosition: onMouse ? 'left' : 'right',
      border: '1px solid',
      borderColor: onMouse ? '#da291c' : '#000',
      borderRadius: 25,
      color: onMouse ? '#fff' : '#000',
      overflow: 'hidden',
      textAlign: 'center',
      willChange: 'color, border-color, background-position',
      transition: 'color 0.25s, border-color 0.25s, background-position 0.25s'
    }
  } as const

  return (
    <button
      type="button"
      style={{ ...style.button, ...styleCss }}
      onClick={onClick}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}>
      {text}
    </button>
  )
}

CheckoutButtonPurchase.defaultProps = {
  styleCss: {}
}

export default CheckoutButtonPurchase
