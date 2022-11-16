/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { CSSProperties, FC, useCallback, useState } from 'react'
import AccordionItem from './AccordionItem'

interface IProps {
  items: IItem[]
  styleCss?: CSSProperties
}

interface IItem {
  title: string
  content: string
}

const Accordion: FC<IProps> = ({ items, styleCss }) => {
  const [clicked, setClicked] = useState<number>(0)

  const handleToggle = useCallback(
    (index: number) => {
      if (index === clicked) {
        setClicked(0)
      } else {
        setClicked(index)
      }
    },
    [clicked]
  )

  const accordionItems = items.map((el, index) => (
    <AccordionItem
      key={el.title}
      title={el.title}
      content={el.content}
      active={clicked === index + 1}
      onToggle={() => handleToggle(index + 1)}
    />
  ))

  return (
    <div className="accordion" style={{ ...style.accordion, ...styleCss }}>
      {accordionItems}
    </div>
  )
}

const style = {
  accordion: {
    width: '100%',
    height: '100%'
  }
}

Accordion.defaultProps = {
  styleCss: {}
}

export default Accordion
