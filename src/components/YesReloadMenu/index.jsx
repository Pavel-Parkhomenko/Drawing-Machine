import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { MenuContext } from '../../context'

export function YesReloadMenu() {
  const { menuState } = useContext(MenuContext)

  const formik = useFormik({
    initialValues: menuState,
    onSubmit: values => {
      localStorage.setItem('drawSettings', JSON.stringify(values))
    },
  })

  return (
    <div>
      <p>
        Attention! To apply these settings, you need to reload the page.
        Your drawing will NOT be saved.
      </p>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
