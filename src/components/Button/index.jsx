import React from 'react'
import styles from './Button.module.scss'

export function Button({
  title,
  onClick
}) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
