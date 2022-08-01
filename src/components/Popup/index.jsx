import React from 'react'
import Popup from 'reactjs-popup'
import styles from './Popup.module.scss'
import { noReloadInfo, popupInfo, yesReloadInfo } from '../../mocks'

export function PopupInfo({ trigger }) {
  return (
    <Popup
      trigger={trigger}
      modal
      nested
    >
      {close => (
        <div className={styles.modal}>
          <button type="button" className={styles.close} onClick={close}>
            &times;
          </button>
          <div className={styles.header}>Necessary information</div>
          <div className={styles.controlPanel}>
            {popupInfo.map(({
              title,
              summary
            }) => (
              <div key={title} className={styles.controlInfo}>
                <span>{title}</span>
                <span>{summary}</span>
              </div>
            ))}
          </div>
          <div className={styles.menuInfoContainer}>
            <ul className={styles.ulInfo}>
              <summary>Menu</summary>
              {noReloadInfo.map(({
                title,
                summary
              }) => (
                <li key={title}>
                  {title}
                  {' '}
                  -
                  {' '}
                  {summary}
                </li>
              ))}
            </ul>
            <ul className={styles.ulInfo}>
              <summary>Menu</summary>
              {yesReloadInfo.map(({
                title,
                summary
              }) => (
                <li key={title}>
                  {title}
                  {' '}
                  -
                  {' '}
                  {summary}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={() => {
              close()
            }}
          >
            I want to draw!
          </button>
        </div>
      )}
    </Popup>
  )
}
