import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Slider, Image, Button } from '../../../components'
import { useSizeScreen } from '../../../hooks'

interface IProps {
  images: string[] | undefined
  closeOnClick: () => void
}

const ProductZoom: FC<IProps> = ({ images, closeOnClick }) => {
  const screen = useSizeScreen()

  const style = {
    slider: {
      height: screen.isS ? '' : '80vh',
      width: 'max-content',
      margin: '0 auto'
    },
    cartTop: {
      display: 'flex',
      justifyContent: 'end',
      marginBottom: 30,
      position: 'relative'
    },
    iconButtonClose: {
      color: 'black',
      zIndex: 10,
      marginRight: 0,
      background: 'white',
      borderRadius: '50%',
      width: 50
    }
  } as const

  return (
    <div>
      <div style={style.cartTop}>
        <Button
          type="button"
          label="icon-close"
          icon={IoCloseOutline}
          onClick={closeOnClick}
          iconSize={40}
          styleCss={style.iconButtonClose}
        />
      </div>
      <Slider
        spaceBetween={10}
        slidesPerView={1}
        navigation
        navigationPosition="center"
        configuration="scrollbar">
        {images?.map((path) => (
          <div className="image-slider" style={style.slider} key={path}>
            <Image src={path} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductZoom
