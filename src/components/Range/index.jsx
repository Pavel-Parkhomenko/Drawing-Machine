import React from 'react'
import styles from './Range.module.scss'

export function Range({
  id,
  name,
  min,
  max,
  step,
  onChange,
  value
}) {
  return (
    <input
      className={styles.range}
      id={id}
      name={name}
      type="range"
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      value={value}
    />
  )
}
