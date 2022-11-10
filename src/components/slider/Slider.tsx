import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y } from 'swiper'
import SliderNavigation from './SliderNavigation'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface IProps {
  spaceBetween: number
  slidesPerView: number
  configuration?: 'scrollbar' | 'pagination'
  children: React.ReactNode
}

const Slider: FC<IProps> = ({
  spaceBetween,
  slidesPerView,
  children,
  configuration
}) => {
  const config = {
    scrollbar: { enabled: configuration === 'scrollbar', draggable: true },
    pagination: {
      enabled: configuration === 'pagination',
      clickable: true,
      type: `fraction`
    },
    spaceBetween,
    slidesPerView
  } as const

  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={config.spaceBetween}
      slidesPerView={config.slidesPerView}
      pagination={config.pagination}
      scrollbar={config.scrollbar}>
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
      <SliderNavigation />
    </Swiper>
  )
}

Slider.defaultProps = {
  configuration: 'pagination'
}

export default Slider
