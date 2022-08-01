import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { MenuContext } from '../../context'
import { Submit } from '../Submit'
import { Range } from '../Range'

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
      <Range
        id="gridSizeX"
        name="gridSizeX"
        min="5"
        max="50"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.gridSizeX}
      />
      <p>Grid Size-Y</p>
      <Range
        id="gridSizeY"
        name="gridSizeY"
        min="5"
        max="50"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.gridSizeY}
      />
      <p>Grid Line Width</p>
      <Range
        id="gridLineWidth"
        name="gridLineWidth"
        min="0.5"
        max="5"
        step="0.5"
        onChange={formik.handleChange}
        value={formik.values.gridLineWidth}
      />
      <Submit title="Submit" />
    </form>
  )
}
