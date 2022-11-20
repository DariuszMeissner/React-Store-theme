import React, { FC, useRef } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface IProps {
  active: boolean
  onToggle: () => void
  title: string
  children: React.ReactNode
}

const AccordionItem: FC<IProps> = ({ active, onToggle, title, children }) => {
  const contentEl = useRef<HTMLDivElement>(null)

  const style = {
    open: {
      height: contentEl?.current?.scrollHeight,
      marginBottom: '16px',
      fontWeight: '300',
      lineHeight: '18px'
    },
    close: {
      height: '0px',
      overflow: 'hidden',
      marginBottom: '10px'
    },
    itemTitle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      textTransform: 'uppercase'
    },
    iconSize: {
      height: '20px',
      width: '20px'
    }
  } as const

  return (
    <div className="accordion-itemTitle">
      <button type="button" onClick={onToggle} style={style.itemTitle}>
        <span>{title}</span>
        {active ? (
          <AiOutlineMinus style={style.iconSize} />
        ) : (
          <AiOutlinePlus style={style.iconSize} />
        )}
      </button>
      <div ref={contentEl} style={active ? style.open : style.close}>
        {children}
      </div>
    </div>
  )
}

export default AccordionItem
