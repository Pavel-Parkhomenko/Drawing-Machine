import React, {
  useContext,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import CanvasDraw from 'react-canvas-draw'
import { MenuContext } from '../../context'
import styles from './Draw.module.scss'

export const Draw = React.forwardRef((prop, canvas) => {
  const [coords] = useState('')
  const { menuState } = useContext(MenuContext)
  const ref = useRef()

  useImperativeHandle(canvas, () => ({
    clear: () => {
      ref.current.clear()
    },
    getSaveData: () => {
      ref.current.getSaveData()
    },
    loadSaveData: () => {
      ref.current.loadSaveData(coords)
    }
  }))

  // const handleOnChange = (event) => {
  //   setCoords(canvas.current.getSaveData())
  // }

  return (
    <div className={styles.container}>
      <CanvasDraw
        ref={ref}
        onChange={null}
        canvasWidth={1200}
        canvasHeight={600}
        brushRadius={menuState.range}
        brushColor={menuState.color}
        lazyRadius={menuState.lazyRadius}
        catenaryColor={menuState.catenaryColor}
        gridSizeX={menuState.gridSizeX}
        gridSizeY={menuState.gridSizeY}
        gridLineWidth={0.5}
        hideGridX={false}
        hideGridY={false}
      />
    </div>
  )
})
