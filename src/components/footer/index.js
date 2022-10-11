import React from 'react'

import * as styles from './index.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.container}>
      &copy; {currentYear} The Render Archive
    </div>
  )
}

export default React.memo(Footer)
