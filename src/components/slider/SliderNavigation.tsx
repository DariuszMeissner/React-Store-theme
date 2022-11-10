import React, { FC, useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSwiper } from 'swiper/react'
import useSizeScreen from '../../hooks/useSizeScreen'
import IconButton from '../IconButton'

const SliderNavigation: FC = () => {
  const swiper = useSwiper()
  const [disabledPrev, setDisabledPrev] = useState(false)
  const [disabledNext, setDisabledNext] = useState(false)
  const screen = useSizeScreen()

  const style = {
    buttons: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 99,
      marginTop: screen.isS ? '30px' : '10px'
    }
  } as const

  useEffect(() => {
    if (swiper.isBeginning) setDisabledPrev(true)
  }, [])

  const onClickPrev = () => {
    swiper.slidePrev()
    if (disabledNext) setDisabledNext(false)
    if (swiper.isBeginning) setDisabledPrev(true)
  }

  const onClickNext = () => {
    swiper.slideNext()
    if (disabledPrev) setDisabledPrev(false)
    if (swiper.isEnd) setDisabledNext(true)
  }

  return (
    <div style={style.buttons}>
      <IconButton
        disabled={disabledPrev}
        label="prevButton"
        icon={IoIosArrowBack}
        onClick={onClickPrev}
        iconSize={35}
        styleCss={{ color: disabledPrev ? 'lightgray' : 'black' }}
      />

      <IconButton
        disabled={disabledNext}
        label="nextButton"
        icon={IoIosArrowForward}
        onClick={onClickNext}
        iconSize={35}
        styleCss={{ color: disabledNext ? 'lightgray' : 'black' }}
      />
    </div>
  )
}

export default SliderNavigation
