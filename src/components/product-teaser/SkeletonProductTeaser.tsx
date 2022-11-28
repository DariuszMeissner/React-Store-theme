import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSizeScreen } from '../../hooks'

const SkeletonProductTeaser: FC = () => {
  const screen = useSizeScreen()

  const HEIGHT_IMAGE = screen.isS ? '230px' : '300px'

  const style = {
    teaser: {
      marginBottom: screen.isS ? '15px' : '40px'
    },
    data: {
      marginTop: '10px'
    }
  }

  return (
    <div className="product-teaser" style={style.teaser}>
      <Skeleton height={HEIGHT_IMAGE} />
      <Skeleton style={style.data} />
      <Skeleton style={style.data} />
      <Skeleton style={style.data} />
    </div>
  )
}

export default SkeletonProductTeaser
