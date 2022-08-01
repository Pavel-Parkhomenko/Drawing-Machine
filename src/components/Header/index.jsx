import React from 'react'
import styles from './Header.module.scss'
import { ControlPanel } from '../ControlPanel'
import { PopupInfo } from '../Popup'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <PopupInfo trigger={<button type="button">Drawing Machine</button>} />
        <p>Click here</p>
      </div>
      <ControlPanel />
    </header>
  )
}
