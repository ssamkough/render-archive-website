import { Link } from 'gatsby'
import React from 'react'
import * as styles from './index.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.navContainer}>
    <Link to="/" className={styles.logoLink}>
      <img
        src="/logo.png"
        alt="render archive logo which is a castle (in the style of super mario) with a green flag atop it"
        style={{ width: '50px' }}
      />
      <span className={styles.navigationItem}>The Render Archive</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default React.memo(Navigation)
