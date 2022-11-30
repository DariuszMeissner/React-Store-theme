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
    sliderWrapper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    slider: {
      height: screen.isL || screen.isX ? '100%' : undefined,
      width: screen.isL || screen.isX ? 'max-content' : '100%',
      margin: '0 auto'
    },
    cartTop: {
      display: 'flex',
      justifyContent: 'end',
      marginBottom: 10,
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
    <div style={{ height: '100vh' }}>
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
      <div style={{ height: '90vh', display: 'flex' }}>
        <Slider
          spaceBetween={10}
          slidesPerView={1}
          navigation
          navigationPosition="center"
          configuration="scrollbar">
          {images?.map((path) => (
            <div style={style.sliderWrapper}>
              <div className="image-slider" style={style.slider} key={path}>
                <Image src={path} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductZoom
