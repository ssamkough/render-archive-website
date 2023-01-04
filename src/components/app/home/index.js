import React from 'react'
import CollectionsList from '../collections/CollectionsList'
import Hero from './Hero'
import * as styles from './index.module.css'

const Home = ({ collections }) => (
  <div className={styles.homeContainer}>
    <Hero />
    <CollectionsList collections={collections} />
  </div>
)

export default React.memo(Home)
