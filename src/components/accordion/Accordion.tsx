/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { CSSProperties, FC, useCallback, useState } from 'react'
import AccordionItem from './AccordionItem'

interface IProps {
  styleCss?: CSSProperties
  children: React.ReactNode
  titles: string[]
}

const Accordion: FC<IProps> = ({ styleCss, children, titles }) => {
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

  const itemsList = React.Children.map(children, (child, index) => (
    <AccordionItem
      title={titles[index]}
      active={clicked === index + 1}
      onToggle={() => handleToggle(index + 1)}>
      {child}
    </AccordionItem>
  ))

  return (
    <div className="accordion" style={{ ...style.accordion, ...styleCss }}>
      {itemsList}
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
