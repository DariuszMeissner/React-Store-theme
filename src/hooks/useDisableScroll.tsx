import React, { useCallback } from 'react'

const useDisableScroll = () => {
  const lockScroll = useCallback(() => {
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  }, [])

  const unlockScroll = React.useCallback(() => {
    document.body.style.position = ''
    document.body.style.width = ''
  }, [])

  return {
    lockScroll,
    unlockScroll
  }
}

export default useDisableScroll
