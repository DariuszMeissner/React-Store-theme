import React, { FC } from 'react'
import useSizeScreen from '../../hooks/useSizeScreen'

const FooterCopyright: FC = () => {
  const screen = useSizeScreen()

  const style = {
    copyright: {
      paddingTop: '30px',
      lineHeight: '22px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: screen.isS ? 'column' : undefined
    }
  } as const

  return (
    <div className="footer-copy" style={style.copyright}>
      <span>Company S.p.A.&nbsp;</span>
      <span>Copyright © 2022 - All Rights Reserved&nbsp;</span>
      <span>Powered by Dariusz Robert Meissner</span>
    </div>
  )
}

export default FooterCopyright
