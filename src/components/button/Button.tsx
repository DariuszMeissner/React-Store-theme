import React, { CSSProperties, FC, useState } from 'react'

interface IProps {
  label?: string
  text?: string
  type?: 'button' | 'skeleton'
  variant?: 'underline' | 'white' | 'black' | null
  styleCss?: CSSProperties
  styleIcon?: CSSProperties
  icon?: React.ElementType | undefined
  iconSize?: number
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  children?: React.ReactNode
}

const Button: FC<IProps> = ({
  label,
  text,
  type,
  variant,
  styleCss,
  styleIcon,
  icon,
  iconSize,
  disabled,
  onClick,
  children
}) => {
  const [onMouse, setOnMouse] = useState<boolean>(false)
  const Icon = icon ?? 'i'

  const colors = {
    black: '#000',
    white: '#fff',
    red: '#da291c'
  }

  const options = {
    bgColor: variant === 'black' ? colors.black : colors.white,
    bgHoverColor: variant === 'black' ? colors.red : colors.black,
    textColor: variant === 'black' ? colors.white : colors.black,
    textHoverColor: colors.white,
    borderColor: colors.black,
    borderHoverColor: colors.red
  }

  const style = {
    buttonColor: {
      width: 137,
      fontWeight: 300,
      textTransform: 'uppercase',
      padding: '12px 18px',
      marginTop: 15,
      position: 'relative',
      backgroundSize: '200% 105%',
      backgroundImage:
        'linear-gradient(to right,#da291c 0%,#da291c 50%,transparent 50%,transparent 100%)',
      backgroundPosition: onMouse ? 'left' : 'right',
      border: '1px solid',
      borderRadius: 25,
      overflow: 'hidden',
      textAlign: 'center',
      willChange: 'color, border-color, background-position',
      transition: 'color 0.25s, border-color 0.25s, background-position 0.25s',
      lineHeight: '20px',
      backgroundColor: options.bgColor,
      color: onMouse ? options.textHoverColor : options.textColor,
      borderColor: onMouse ? options.borderHoverColor : options.borderColor
    },

    buttonUnderline: {
      fontWeight: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'capitalize'
    },
    skeleton: {
      width: 100,
      textAlign: 'center'
    },
    skeletonButton: {
      lineHeight: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      height: `${iconSize}px`,
      width: `${iconSize}px`,
      marginRight: text ? 5 : 0
    }
  } as const

  return (
    <>
      {type === 'button' && (
        <button
          type="button"
          style={
            variant === 'black' || variant === 'white'
              ? { ...style.buttonColor, ...styleCss }
              : { ...style.buttonUnderline, ...styleCss }
          }
          disabled={disabled}
          data-label={label}
          onClick={onClick}
          onMouseEnter={() => setOnMouse(true)}
          onMouseLeave={() => setOnMouse(false)}>
          {icon && <Icon style={{ ...style.icon, ...styleIcon }} />}
          {text}
          {children}
        </button>
      )}

      {type === 'skeleton' && (
        <button type="button" style={style.skeletonButton}>
          {React.Children.map(children, (child) => (
            <div style={style.skeleton}>{child}</div>
          ))}
        </button>
      )}
    </>
  )
}

Button.defaultProps = {
  label: '',
  text: '',
  type: 'button',
  variant: undefined,
  styleCss: {},
  styleIcon: {},
  iconSize: 25,
  disabled: false,
  icon: undefined,
  onClick: undefined,
  children: null
}

export default Button
