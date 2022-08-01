import React from 'react'
import styles from './Menu.module.scss'

export function Menu({ children }) {
  return (
    <nav className={children ? styles.active : styles.noActive}>
      { children }
    </nav>
  )
}
