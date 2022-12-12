import React, { ChangeEvent, FC } from 'react'
import { useSizeScreen } from '../hooks'

interface IProps {
  label: string
  value: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: FC<IProps> = ({ label, value, onChange }) => {
  const screen = useSizeScreen()

  const style = {
    label: { paddingLeft: 20, paddingRight: 35, lineHeight: '20px' },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      paddingLeft: screen.isL || screen.isX ? 10 : 0,
      cursor: 'pointer',
      position: 'relative',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none'
    },
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer'
    },
    checkmark: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 20,
      width: 20,
      backgroundColor: value ? '#000' : '#fff',
      border: '1px solid #000',
      borderRadius: '50%'
    }
  } as const

  return (
    <label htmlFor={label} style={style.wrapper}>
      <input
        style={style.input}
        type="radio"
        id={label}
        name={label}
        value={label}
        checked={value}
        onChange={onChange}
      />
      <span style={style.checkmark} />
      <span style={style.label}>{label}</span>
    </label>
  )
}
export default RadioButton
