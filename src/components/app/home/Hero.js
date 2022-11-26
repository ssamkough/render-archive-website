import { Link } from 'gatsby'
import React from 'react'
import * as styles from './index.module.css'

const Hero = () => (
  <section className={styles.heroHomeContainer}>
    <div className={styles.heroTitleAndDescriptionContainer}>
      <h1>The Render Archive</h1>
      <h3>
        A group of people dedicated to making collections for render artwork.
      </h3>
    </div>
    <p>
      If you have any promotional materials you'd like to share,{' '}
      <Link to="/contribute" className={styles.cta}>
        let's chat
      </Link>
      !
    </p>
  </section>
)

export default React.memo(Hero)
