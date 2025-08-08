import React from 'react'
import styles from './Button.module.scss'

export function Button({
  title,
  onClick,
  isActive = false,
}) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : styles.notActive}`}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
