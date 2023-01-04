import React from 'react'
import '../../../styles/globals.css'
import '../../../styles/variables.css'
import Footer from '../footer'
import Head from '../head'
import Navigation from '../navigation'
import * as styles from './index.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Head />
        <Navigation />
        <main id="main" style={{ padding: '40px 0px' }}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default React.memo(Layout)
