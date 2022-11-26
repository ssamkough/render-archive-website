import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import CollectionsList from '../collections/CollectionsList'
import * as styles from './index.module.css'

const Developer = ({
  developer: {
    title,
    description,
    logo: { url: logoUrl, description: logoDescription },
    collections,
  },
}) => (
  <article className={styles.pageContainer}>
    <header className={styles.pageHeader}>
      <div className={styles.headings}>
        <h1>{title}</h1>
        <h3>{renderRichText(description)}</h3>
      </div>
      <img src={logoUrl} alt={logoDescription} className={styles.headingLogo} />
    </header>
    <section>
      <h2>Collections</h2>
      <CollectionsList collections={collections} />
    </section>
  </article>
)

export default Developer
