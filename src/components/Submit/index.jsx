import React from 'react'
import styles from './Submit.module.scss'

export function Submit({ title }) {
  return (
    <button className={styles.slidingButton} type="submit">{title}</button>
  )
}
