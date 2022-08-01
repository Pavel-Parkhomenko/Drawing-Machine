import React from 'react'
import styles from './Header.module.scss'
import { ControlPanel } from '../ControlPanel'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Drawing Machine</h1>
      <ControlPanel />
    </header>
  )
}
