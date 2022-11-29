import React, { FC, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerModal } from '../../../api/feature/modal-slice/modalSlice'
import { RootState } from '../../../api/feature/store'
import {
  AnimationCss,
  Grid,
  ImageBackground,
  Modal,
  Slider
} from '../../../components'
import { useDisableScroll, useSizeScreen } from '../../../hooks'
import MODALS from '../../../util/modalsID'
import ProductZoom from '../product-zoom/ProductZoom'

interface IProps {
  images: string[] | undefined
}

const ProductCarousel: FC<IProps> = ({ images }) => {
  const screen = useSizeScreen()
  const dispatch = useDispatch()

  const style = {
    carouselWrapper: {
      marginBottom: screen.isS || screen.isM ? 20 : undefined
    },
    buttonZoom: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      color: 'white'
    },
    galleryZoom: {
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center'
    }
  } as const

  const maxImages = images?.slice(0, 4)

  const IMAGE_HEIGHT = screen.isS ? '90vh' : '350px'

  // get state active of modal
  const isActiveModal = useSelector(
    (state: RootState) => state.modal.registered
  )

  const { lockScroll, unlockScroll } = useDisableScroll()

  const handleRegisterModal = useCallback(
    (id: number | null) => {
      if (isActiveModal === id) {
        dispatch(registerModal(null))
        unlockScroll()
      } else {
        dispatch(registerModal(id))
        lockScroll()
      }
    },
    [isActiveModal]
  )

  const carouselOnXL = (
    <Grid
      rowGap={[2, 2, 10, 10]}
      columnGap={[2, 2, 10, 10]}
      gridColumns={[2, 2, 2, 2]}>
      {maxImages?.map((item) => (
        <div
          className="image-slider"
          style={{ height: IMAGE_HEIGHT, position: 'relative' }}
          key={item}>
          <ImageBackground pathImage={item} />
          <button
            type="button"
            onClick={() => handleRegisterModal(MODALS.GALLERY_ZOOM_ID)}
            style={style.buttonZoom}
            name="zoom-product">
            <span />
          </button>
        </div>
      ))}
    </Grid>
  )
  const carouselOnMS = (
    <Slider
      spaceBetween={10}
      slidesPerView={screen.isS ? 1 : 2}
      navigation={false}
      configuration="scrollbar">
      {images?.map((item) => (
        <div
          className="image-slider"
          style={{ height: IMAGE_HEIGHT, position: 'relative' }}
          key={item}>
          <ImageBackground pathImage={item} />
          <button
            type="button"
            onClick={() => handleRegisterModal(MODALS.GALLERY_ZOOM_ID)}
            style={style.buttonZoom}
            name="zoom-product">
            <span />
          </button>
        </div>
      ))}
    </Slider>
  )

  return (
    <>
      {/* product carousel */}
      <div className="product-carousel" style={style.carouselWrapper}>
        {(screen.isL || screen.isX) && carouselOnXL}
        {(screen.isS || screen.isM) && carouselOnMS}
      </div>

      {/* gallery zoom */}
      <AnimationCss
        isMounted={isActiveModal === MODALS.GALLERY_ZOOM_ID}
        variant="appear"
        styleCss={{ zIndex: '999' }}>
        {/* modal */}
        <Modal
          id={MODALS.GALLERY_ZOOM_ID}
          closeOnClick={() => handleRegisterModal(MODALS.GALLERY_ZOOM_ID)}
          modalPosition="left"
          styleCss={style.galleryZoom}>
          {/* content */}
          <ProductZoom
            images={maxImages}
            closeOnClick={() => handleRegisterModal(MODALS.GALLERY_ZOOM_ID)}
          />
        </Modal>
      </AnimationCss>
    </>
  )
}

export default ProductCarousel
