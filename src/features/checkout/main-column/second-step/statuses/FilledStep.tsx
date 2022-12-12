import React, { FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useSizeScreen } from '../../../../../hooks'
import { IData } from '../../../../../hooks/useForm'
import CheckoutButtonModify from '../../../CheckoutButtonModify'

interface IProps {
  id: string
  status: { data: boolean; active: boolean }
  activeStep: string | undefined
  handleEditStep: (id: string, activeStep: string | undefined) => void
  title: string
  formData: IData
}

const FilledStep: FC<IProps> = ({
  id,
  status,
  activeStep,
  handleEditStep,
  title,
  formData
}) => {
  const screen = useSizeScreen()
  const style = {
    step: {
      display: 'flex',
      flexDirection: screen.isS || screen.isM ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: screen.isS || screen.isM ? 'start' : 'center'
    },
    welcomeMessage: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      lineHeight: '20px',
      fontWeight: 500
    },
    iconCheck: {
      height: 20,
      width: 20,
      marginLeft: 10,
      position: screen.isS || screen.isM ? 'absolute' : undefined,
      right: 0
    },
    buttonModify: {
      marginTop: screen.isS || screen.isM ? 15 : 0
    },
    formDataWrapper: {
      fontWeight: 300
    },
    formDataValue: {
      lineHeight: '20px'
    }
  } as const

  function showFormData() {
    return Object.keys(formData).map((key) => (
      <div style={style.formDataValue}>
        {formData[key as keyof typeof status]}
      </div>
    ))
  }

  const filledStep = status.active && status.data && activeStep !== id

  return filledStep ? (
    <div>
      <div style={style.step}>
        <div style={style.welcomeMessage}>
          <span>{title}:&nbsp;</span>

          {/* form data */}
          {id !== 'shippingAddress' && (
            <div style={style.formDataWrapper}>{showFormData()}</div>
          )}

          <AiOutlineCheck style={style.iconCheck} />
        </div>

        {/* form data shipping address, size S/M */}
        {id === 'shippingAddress' && (screen.isS || screen.isM) && (
          <div style={{ ...style.formDataWrapper, marginTop: 20 }}>
            {showFormData()}
          </div>
        )}

        <CheckoutButtonModify
          onClick={() => handleEditStep(id, activeStep)}
          text="Modify"
          styleCss={style.buttonModify}
        />
      </div>

      {/* form data shipping address, size X/L */}
      {id === 'shippingAddress' && (screen.isL || screen.isX) && (
        <div style={{ ...style.formDataWrapper, marginTop: 20 }}>
          {showFormData()}
        </div>
      )}
    </div>
  ) : null
}

export default FilledStep
