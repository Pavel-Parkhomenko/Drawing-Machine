import React, { useState } from 'react'
import { Menu } from '../Menu'
import styles from './Header.module.scss'

export function Header() {
  const [isBurger, setIsBurger] = useState(false)

  const handleBurgerClick = () => {
    setIsBurger(!isBurger)
  }

  return (
    <header className={styles.header}>
      <h1>Drawing</h1>
      <button
        type={'button'}
        onClick={handleBurgerClick}
      >
        Menu
      </button>
      {isBurger && <Menu isBurger={isBurger} />}
    </header>
  )
}
