import React from 'react'
import styles from './Menu.module.scss'

export function Menu({ message, children }) {
  return (
    <nav className={children ? styles.active : styles.noActive}>
      <div>
        <p className={styles.message}>
          { message }
        </p>
      </div>
      { children }
    </nav>
  )
}
