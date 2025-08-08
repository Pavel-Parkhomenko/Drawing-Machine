import React, { useContext, useState } from 'react'
import styles from './ControlPanel.module.scss'
import { MenuContext } from '../../context'
import { Menu } from '../Menu'
import { NoReloadMenu } from '../NoReloadMenu'
import { YesReloadMenu } from '../YesReloadMenu'
import { messageYesReload, messageNoReload } from '../../mocks'
import { Button } from '../Button'

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

  const handleUndo = () => {
    canvas.current.undo()
  }

  const handlePlay = () => {
    canvas.current.loadSaveData()
  }

  return (
    <div className={styles.container}>
      <Button
        title="Clear"
        onClick={handleClear}
      />
      <Button
        title="Undo"
        onClick={handleUndo}
      />
      <Button
        title="Play"
        onClick={handlePlay}
      />
      <Button
        title="Reload+"
        onClick={handleNoReload}
        isActive={isNoReloadMenu}
      />
      <Button
        title="Reload-"
        onClick={handleYesReload}
        isActive={isYesReloadMenu}
      />
      {isYesReloadMenu && (
        <Menu message={messageYesReload}>
          <YesReloadMenu />
        </Menu>
      )}
      {isNoReloadMenu && (
        <Menu message={messageNoReload}>
          <NoReloadMenu />
        </Menu>
      )}
    </div>
  )
}
