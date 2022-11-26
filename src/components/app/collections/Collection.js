import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import * as styles from './index.module.css'

const Collection = ({
  collection: {
    id,
    title,
    description,
    logo: { url: logoUrl, description: logoDescription },
    scans,
  },
}) => (
  <article className={styles.collectionContainer}>
    <h1>{title}</h1>
    <p>{renderRichText(description)}</p>
  </article>
)

export default Collection
