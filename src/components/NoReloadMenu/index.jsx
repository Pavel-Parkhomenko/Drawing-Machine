import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { MenuContext } from '../../context'
import { Submit } from '../Submit'
import { Range } from '../Range'

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
      <p>Color</p>
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
      <p>Radius</p>
      <Range
        id="range"
        name="range"
        min="1"
        max="50"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.range}
      />
      <p>Rope lenght</p>
      <Range
        id="lazyRadius"
        name="lazyRadius"
        min="1"
        max="100"
        step="1"
        onChange={formik.handleChange}
        value={formik.values.lazyRadius}
      />
      <Submit title="Submit" />
    </form>
  )
}
