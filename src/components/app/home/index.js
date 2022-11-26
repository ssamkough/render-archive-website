import React from 'react'
import Cards from './Cards'
import Hero from './Hero'
import * as styles from './index.module.css'

const Home = ({ developers }) => (
  <div className={styles.homeContainer}>
    <Hero />
    <Cards developers={developers} />
  </div>
)

export default React.memo(Home)
