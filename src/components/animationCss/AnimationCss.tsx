import React, { CSSProperties, FC } from 'react'
import useDelayUnmount from '../../hooks/useDelayUnmount'
import useSizeScreen from '../../hooks/useSizeScreen'
import './AnimationCss.scss'

interface IProps {
  isMounted: boolean
  children: React.ReactNode
  variant: 'fadeLeft' | 'fadeRight' | 'appear'
  styleCss?: CSSProperties
}

const DELAY_TIME = 500

const AnimationCss: FC<IProps> = ({
  isMounted,
  children,
  variant,
  styleCss
}) => {
  const screen = useSizeScreen()
  const showElement = useDelayUnmount(isMounted, DELAY_TIME)
  const animationVariant = screen.isS ? 'fadeBottom' : variant
  const duration = variant === 'appear' ? '300ms' : '500ms'

  const style = {
    layerAnimation: {
      position: 'relative',
      zIndex: 6,
      ...styleCss
    },
    mountedStyle: {
      animation: `${animationVariant}InAnimation ${duration} ease`
    },
    unmountedStyle: {
      animation: `${animationVariant}OutAnimation ${duration} ease-in`,
      animationFillMode: 'forwards'
    }
  } as const

  return (
    <div className="layer-animation" style={style.layerAnimation}>
      {showElement ? (
        <div style={isMounted ? style.mountedStyle : style.unmountedStyle}>
          {children}
        </div>
      ) : undefined}
    </div>
  )
}

AnimationCss.defaultProps = {
  styleCss: {}
}

export default AnimationCss
