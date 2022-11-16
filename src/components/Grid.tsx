import React, { FC } from 'react'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  rowGap: [number, number, number, number]
  columnGap: [number, number, number, number]
  gridColumns: [number, number, number, number]
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
  const [gridColumnS, gridColumnM, gridColumnL, gridColumnX] = gridColumns
  const [rowGapS, rowGapM, rowGapL, rowGapX] = rowGap
  const [columnGapS, columnGapM, columnGapL, columnGapX] = columnGap

  const setColumnWidth = `${columnEqual ? '1fr ' : 'auto '}`

  const gridTemplate =
    (screen.isS && `${setColumnWidth}`.repeat(gridColumnS)) ||
    (screen.isM && `${setColumnWidth}`.repeat(gridColumnM)) ||
    (screen.isL && `${setColumnWidth}`.repeat(gridColumnL)) ||
    (screen.isX && `${setColumnWidth}`.repeat(gridColumnX))

  const setRowGap =
    (screen.isS && rowGapS) ||
    (screen.isM && rowGapM) ||
    (screen.isL && rowGapL) ||
    (screen.isX && rowGapX)

  const setColumnGap =
    (screen.isS && columnGapS) ||
    (screen.isM && columnGapM) ||
    (screen.isL && columnGapL) ||
    (screen.isX && columnGapX)

  const style = {
    grid: {
      display: 'grid',
      gridTemplateColumns: gridTemplate || undefined,
      gridGap: `${setRowGap}px ${setColumnGap}px`
    }
  } as const

  return (
    <div className="grid" style={style.grid}>
      {children}
    </div>
  )
}

Grid.defaultProps = {
  columnEqual: true
}

export default Grid
