import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container as="footer">
      <div className={styles.container}>
        &copy; {currentYear} The Render Archive
      </div>
    </Container>
  )
}

export default React.memo(Footer)
