import React, { FC } from 'react'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  rowGap: [number, number, number]
  columnGap: [number, number, number]
  gridColumns: [number, number, number]
  columnEqual?: boolean
  children: React.ReactNode
}

const Grid: FC<IProps> = ({
  gridColumns,
  rowGap,
  columnGap,
  columnEqual,
  children
}) => {
  const screen = useSizeScreen()

  const setColumnWidth = `${columnEqual ? '1fr ' : 'auto '}`

  const gridTemplate =
    (screen.isS && `${setColumnWidth}`.repeat(gridColumns[0])) ||
    (screen.isM && `${setColumnWidth}`.repeat(gridColumns[1])) ||
    (screen.isL && `${setColumnWidth}`.repeat(gridColumns[2]))

  const setRowGap =
    (screen.isS && rowGap[0]) ||
    (screen.isM && rowGap[1]) ||
    (screen.isL && rowGap[2])

  const setColumnGap =
    (screen.isS && columnGap[0]) ||
    (screen.isM && columnGap[1]) ||
    (screen.isL && columnGap[2])

  const style = {
    grid: {
      display: 'grid',
      gridTemplateColumns: gridTemplate || undefined,
      gridGap: `${setRowGap}px ${setColumnGap}px`,
      marginTop: '25px'
    }
  } as const

  return (
    <div className="grid" style={style.grid}>
      {children}
    </div>
  )
}

Grid.defaultProps = {
  columnEqual: false
}

export default Grid
