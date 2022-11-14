import React, { FC, useRef } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface IProps {
  active: boolean
  onToggle: () => void
  title: string | undefined
  content: string | undefined
}

const AccordionItem: FC<IProps> = ({ active, onToggle, title, content }) => {
  const contentEl = useRef<HTMLDivElement>(null)

  const style = {
    open: {
      height: contentEl?.current?.scrollHeight,
      transition: 'height 200ms ease-in'
    },
    close: {
      height: '0px',
      overflow: 'hidden',
      transition: 'height 200ms ease-in'
    },
    alignBetween: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }

  return (
    <div className="accordion-item">
      <button type="button" onClick={onToggle} style={style.alignBetween}>
        <span>{title}</span>
        {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <div ref={contentEl} style={active ? style.open : style.close}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default AccordionItem
