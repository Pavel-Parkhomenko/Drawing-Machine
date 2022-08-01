import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { MenuContext } from '../../context'
import { Submit } from '../Submit'

export function YesReloadMenu() {
  const {
    gridSizeX,
    gridSizeY,
    gridLineWidth,
    hideGridX
  } = useContext(MenuContext)

  const formik = useFormik({
    initialValues: {
      gridSizeX,
      gridSizeY,
      gridLineWidth,
      hideGridX
    },
    onSubmit: values => {
      localStorage.setItem('drawSettings', JSON.stringify(values))
      window.location.reload()
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>Grid Size-x</p>
      <input
        id="gridSizeX"
        name="gridSizeX"
        type="range"
        min="0"
        max="50"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.gridSizeX}
      />
      <p>Grid Size-Y</p>
      <input
        id="gridSizeY"
        name="gridSizeY"
        type="range"
        min="0"
        max="50"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.gridSizeY}
      />
      <p>Grid Line Width</p>
      <input
        id="gridLineWidth"
        name="gridLineWidth"
        type="range"
        min="0"
        max="5"
        step="0.5"
        onChange={formik.handleChange}
        value={formik.values.gridLineWidth}
      />
      <Submit title="Submit" />
    </form>
  )
}
