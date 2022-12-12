import React, { ChangeEvent, FC } from 'react'

interface IProps {
  label: string
  name: string
  type: 'email' | 'text' | 'number'
  dataValRegex: string
  dataValRegexPattern: string
  dataValRequired: string
  dataValLengthMax: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  error: string
}

const Input: FC<IProps> = ({
  label,
  name,
  type,
  dataValRegex,
  dataValRegexPattern,
  dataValRequired,
  dataValLengthMax,
  value,
  onChange,
  onBlur,
  error
}) => {
  const style = {
    wrapper: {
      fontWeight: 300,
      maxWidth: 400,
      textAlign: 'left',
      position: 'relative',
      paddingBottom: 19
    },
    label: { paddingBottom: 8 },
    input: {
      width: '100%',
      minHeight: 46,
      padding: '0 16px',
      border: '1px solid',
      borderColor: error ? '#da291c' : '#000',
      borderRadius: 46,
      backgroundColor: 'transparent',
      WebkitAppearance: 'none',
      appearance: 'none',
      color: '#000',
      fontWeight: 300,
      fontFamily: 'Poppins'
    },
    validation: {
      padding: '6px 16px 0',
      color: '#da291c'
    }
  } as const

  return (
    <div className="input-wrapper" style={style.wrapper}>
      {/* label */}
      <div style={style.label}>
        <label htmlFor={name}>{label}</label>
      </div>

      {/* value */}
      <div>
        <input
          style={style.input}
          name={name}
          type={type}
          data-val-regex={dataValRegex}
          data-val-regex-pattern={dataValRegexPattern}
          data-val-required={dataValRequired}
          data-val-length-max={dataValLengthMax}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>

      {/* field validation container  */}
      {error && <div style={style.validation}>{error}</div>}
    </div>
  )
}

export default Input
