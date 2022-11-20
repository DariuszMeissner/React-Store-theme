import React, { ChangeEvent, CSSProperties, FC } from 'react'
import { useSizeScreen } from '../hooks'

interface IProps {
  label: string
  value: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: FC<IProps> = ({ label, value, onChange }) => {
  const screen = useSizeScreen()

  const style = {
    radioBtn: { paddingLeft: '10px' },
    label: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      paddingLeft: screen.isL || screen.isX ? '10px' : '0'
    }
  } as const

  return (
    <label htmlFor={label} style={style.label}>
      <input
        type="radio"
        id={label}
        name={label}
        value={label}
        checked={value}
        onChange={onChange}
      />
      <span style={style.radioBtn}>{label}</span>
    </label>
  )
}
export default RadioButton
