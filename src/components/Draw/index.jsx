import React, { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'

export function Draw({ color, range }) {
  const canvas = useRef()
  const [coords, setCoords] = useState('')
  const handleOnChange = (event) => {
    setCoords(canvas.current.getSaveData())
  }

  const test = () => {
    canvas.current.loadSaveData(coords)
  }

  return (
    <>
      <CanvasDraw
        ref={canvas}
        onChange={handleOnChange}
        canvasWidth={1400}
        canvasHeight={900}
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={test}>test</button>
    </>

  )
}
