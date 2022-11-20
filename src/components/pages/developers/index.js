import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
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
      <div className={styles.collectionsContainer}>
        {collections.map(
          ({
            id: collectionId,
            title: collectionTitle,
            description: collectionDescription,
            logo: {
              url: collectionLogoUrl,
              description: collectionLogoDescription,
            },
          }) => (
            <Link
              key={collectionId}
              to={`/collections/${collectionId}`}
              className={styles.collection}
            >
              <div className={styles.collectionHeadings}>
                <h3>{collectionTitle}</h3>
                <p>{renderRichText(collectionDescription)}</p>
              </div>
              <img src={collectionLogoUrl} alt={collectionLogoDescription} />
            </Link>
          )
        )}
      </div>
    </section>
  </article>
)

export default Developer
