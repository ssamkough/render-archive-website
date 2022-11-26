import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import * as styles from './index.module.css'

const CollectionsList = ({ collections }) => (
  <div className={styles.collectionsGridContainer}>
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
)

export default React.memo(CollectionsList)
