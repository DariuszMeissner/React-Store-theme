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
  return (
    <div className="input-wrapper">
      {/* label */}
      <div>
        <label htmlFor={name}>{label}</label>
      </div>

      {/* value */}
      <div>
        <input
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
      {error && <div>{error}</div>}
    </div>
  )
}

export default Input
