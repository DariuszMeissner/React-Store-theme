import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSizeScreen } from '../../../hooks'

const SkeletonHero = () => {
  const screen = useSizeScreen()

  const style = {
    hero: {
      width: '100%',
      height: screen.isS ? '100vh' : '600px'
    }
  } as const

  return <Skeleton height={style.hero.height} width={style.hero.width} />
}

export default SkeletonHero
