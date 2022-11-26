import React from 'react'
import CollectionsList from './CollectionsList'
import * as styles from './index.module.css'

const Collections = ({ collections }) => (
  <div className={styles.collectionsContainer}>
    <h1>Collections</h1>
    <CollectionsList collections={collections} />
  </div>
)

export default React.memo(Collections)
