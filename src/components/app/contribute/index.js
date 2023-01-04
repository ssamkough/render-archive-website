import React from 'react'
import * as styles from './index.module.css'

const Contribute = () => (
  <div className={styles.contributeContainer}>
    <h1>Contribute</h1>
    <p>
      Message us through{' '}
      <a
        href="https://mobile.twitter.com/render_archive"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.twitterLink}
      >
        @renderarchive's Twitter dms.
      </a>
    </p>
    <p>Thanks for wanting to contribute. We really appreciate it :D</p>
  </div>
)

export default Contribute
