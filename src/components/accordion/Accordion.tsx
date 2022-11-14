/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useState } from 'react'
import { IProduct } from '../../api/feature/apiSlice'
import AccordionItem from './AccordionItem'

interface IProps {
  items: IItem[]
}

interface IItem {
  title: string | undefined
  content: string | undefined
}

const Accordion: FC<IProps> = ({ items }) => {
  const [clicked, setClicked] = useState<number>(0)

  const handleToggle = (index: number) => {
    if (index === clicked) {
      setClicked(0)
    } else {
      setClicked(index)
    }
  }

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
    <div className="accordion" style={style.accordion}>
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

export default Accordion
