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
        onClick={handleClear}
        title="Clear"
      />
      <Button
        onClick={handleUndo}
        title="Undo"
      />
      <Button
        onClick={handlePlay}
        title="Play"
      />
      <Button
        title="Without Reload"
        onClick={handleNoReload}
      />
      <Button
        title="With Reload"
        onClick={handleYesReload}
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
