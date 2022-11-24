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
    itemContent: {
      height: active ? contentEl?.current?.scrollHeight : 0,
      marginBottom: '16px',
      fontWeight: 300,
      lineHeight: '18px',
      transition: 'height 300ms ease',
      overflow: 'hidden'
    },
    itemTitle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      textTransform: 'uppercase'
    },
    iconSize: {
      height: 20,
      width: 20
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
      <div ref={contentEl} style={style.itemContent}>
        {children}
      </div>
    </div>
  )
}

export default AccordionItem
