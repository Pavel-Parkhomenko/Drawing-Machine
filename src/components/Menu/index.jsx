import React from 'react'
import styles from './Menu.module.scss'
// onSubmit={formik.handleSubmit}

export function Menu({ isBurger }) {
  return (
    <nav className={isBurger ? styles.active : styles.noActive}>
      <div>
        <form className={styles.form}>
          <p>Color</p>
          <input
            id="color"
            name="color"
            type="color"
            // onChange={formik.handleChange}
            // value={formik.values.color}
          />
          <p>Range</p>
          <input
            id="range"
            name="range"
            type="range"
            min="0"
            max="50"
            step="1"
            // onChange={formik.handleChange}
            // value={formik.values.range}
          />
          <button type="submit">Submit</button>
        </form>
        <div className={styles.management}>
          <h3>Management</h3>
          <p>
            s -
            <span>save</span>
          </p>
          <p>
            s -
            <span>save</span>
          </p>
          <p>
            s -
            <span>save</span>
          </p>
        </div>
      </div>
    </nav>
  )
}
