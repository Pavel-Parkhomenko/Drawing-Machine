import React, { useContext, useState } from 'react'
import styles from './ControlPanel.module.scss'
import { MenuContext } from '../../context'
import { Menu } from '../Menu'
import { NoReloadMenu } from '../NoReloadMenu'
import { YesReloadMenu } from '../YesReloadMenu'

export function ControlPanel() {
  const { canvas } = useContext(MenuContext)
  const [isYesReloadMenu, setIsYesReloadMenu] = useState(false)
  const [isNoReloadMenu, setIsNoReloadMenu] = useState(false)

  const handleNoReload = () => {
    setIsNoReloadMenu(!isNoReloadMenu)
    if (isYesReloadMenu) setIsYesReloadMenu(!isYesReloadMenu)
  }

  const handleYesReload = () => {
    setIsYesReloadMenu(!isYesReloadMenu)
    if (isNoReloadMenu) setIsNoReloadMenu(!isNoReloadMenu)
  }

  const handleClear = () => {
    canvas.current.clear()
  }

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClear}>Clear</button>
      <button
        type="button"
        onClick={handleNoReload}
      >
        Without Reload
      </button>
      <button
        type={'button'}
        onClick={handleYesReload}
      >
        With Reload
      </button>
      {isYesReloadMenu && (
        <Menu>
          <YesReloadMenu />
        </Menu>
      )}
      {isNoReloadMenu && (
        <Menu>
          <NoReloadMenu />
        </Menu>
      )}
    </div>
  )
}
