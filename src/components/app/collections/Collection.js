import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import * as styles from './index.module.css'

const Collection = ({
  collection: { id: collectionId, title, description, scans },
}) => (
  <article className={styles.collectionContainer}>
    <h1>{title}</h1>
    <p>{renderRichText(description)}</p>
    <hr />
    <div className={styles.collectionScansContainer}>
      {scans.map(({ id: scanId, title, mainImage: { url } }) => (
        <Link key={scanId} to={`/scans/${scanId}`} state={{ collectionId }}>
          <img src={url} alt={title} width={200} height={200} />
        </Link>
      ))}
    </div>
  </article>
)

export default Collection
