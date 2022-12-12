import React, { FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useSizeScreen } from '../../../../../hooks'
import CheckoutButtonModify from '../../../CheckoutButtonModify'

interface IProps {
  id: string
  status: { data: boolean; active: boolean }
  activeStep: string | undefined
  handleEditStep: (id: string, activeStep: string | undefined) => void
  title: string
}

const FilledStep: FC<IProps> = ({
  id,
  status,
  activeStep,
  handleEditStep,
  title
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
      lineHeight: '20px'
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
    }
  } as const

  const filledStep = status.active && status.data && activeStep !== id

  return filledStep ? (
    <div style={style.step}>
      <div style={style.welcomeMessage}>
        <span>{title}</span>
        <div>content</div>
        <AiOutlineCheck style={style.iconCheck} />
      </div>
      <CheckoutButtonModify
        onClick={() => handleEditStep(id, activeStep)}
        text="Modify"
        styleCss={style.buttonModify}
      />
    </div>
  ) : null
}

export default FilledStep
