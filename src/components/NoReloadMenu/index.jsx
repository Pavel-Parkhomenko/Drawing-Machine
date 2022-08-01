import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { MenuContext } from '../../context'

export function NoReloadMenu() {
  const {
    color,
    catenaryColor,
    range,
    lazyRadius,
    setMenuState
  } = useContext(MenuContext)

  const formik = useFormik({
    initialValues: {
      color,
      catenaryColor,
      range,
      lazyRadius
    },
    onSubmit: values => {
      setMenuState({
        color,
        catenaryColor,
        range,
        lazyRadius,
        ...values
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="color"
        name="color"
        type="color"
        onChange={formik.handleChange}
        value={formik.values.color}
      />
      <p>Rope Color</p>
      <input
        id="catenaryColor"
        name="catenaryColor"
        type="color"
        onChange={formik.handleChange}
        value={formik.values.catenaryColor}
      />
      <p>Range</p>
      <input
        id="range"
        name="range"
        type="range"
        min="0"
        max="50"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.range}
      />
      <p>Rope lenght</p>
      <input
        id="lazyRadius"
        name="lazyRadius"
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.lazyRadius}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
