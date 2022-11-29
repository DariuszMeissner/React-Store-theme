import React, { FC, useCallback, useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSwiper } from 'swiper/react'
import useSizeScreen from '../../hooks/useSizeScreen'
import Button from '../button/Button'

interface IProps {
  position: string | undefined
}

const SliderNavigation: FC<IProps> = ({ position }) => {
  const swiper = useSwiper()
  const [disabledPrev, setDisabledPrev] = useState(false)
  const [disabledNext, setDisabledNext] = useState(false)
  const screen = useSizeScreen()

  const style = {
    wrapper: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 99,
      marginTop: screen.isS ? '30px' : '10px',
      transform: position === 'center' ? 'translateY(-50vh)' : undefined
    },
    buttons: {
      background: 'white',
      borderRadius: '50%',
      height: 40,
      width: 40
    }
  } as const

  useEffect(() => {
    if (swiper.isBeginning) setDisabledPrev(true)
  }, [])

  const onClickPrev = useCallback(() => {
    swiper.slidePrev()
    if (disabledNext) setDisabledNext(false)
    if (swiper.isBeginning) setDisabledPrev(true)
  }, [disabledNext])

  const onClickNext = useCallback(() => {
    swiper.slideNext()
    if (disabledPrev) setDisabledPrev(false)
    if (swiper.isEnd) setDisabledNext(true)
  }, [disabledPrev])

  return (
    <div style={style.wrapper}>
      <Button
        type="button"
        disabled={disabledPrev}
        label="prevButton"
        icon={IoIosArrowBack}
        onClick={onClickPrev}
        iconSize={35}
        styleCss={{
          ...style.buttons,
          color: disabledPrev ? 'lightgray' : 'black'
        }}
      />

      <Button
        type="button"
        disabled={disabledNext}
        label="nextButton"
        icon={IoIosArrowForward}
        onClick={onClickNext}
        iconSize={35}
        styleCss={{
          ...style.buttons,
          color: disabledNext ? 'lightgray' : 'black'
        }}
      />
    </div>
  )
}

export default SliderNavigation
