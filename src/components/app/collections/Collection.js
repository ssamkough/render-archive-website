import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useState } from 'react'
import * as styles from './index.module.css'

const Collection = ({
  collection: { id: collectionId, title, description, scans, renders },
}) => {
  const [currentTab, setCurrentTab] = useState('scans')

  return (
    <article className={styles.collectionContainer}>
      <h1>{title}</h1>
      <p>{renderRichText(description)}</p>
      <hr />
      <div className={styles.tabContainer}>
        <button
          onClick={() => setCurrentTab('scans')}
          className={currentTab === 'scans' && styles.activeTabButton}
        >
          Scans
        </button>
        <button
          onClick={() => setCurrentTab('renders')}
          className={currentTab === 'renders' && styles.activeTabButton}
        >
          Renders
        </button>
      </div>
      <div className={styles.collectionScansContainer}>
        {currentTab === 'scans' &&
          scans.map(({ id: scanId, title, mainImage: { url } }) => (
            <Link key={scanId} to={`/scans/${scanId}`} state={{ collectionId }}>
              <img src={url} alt={title} width={200} height={200} />
            </Link>
          ))}
        {currentTab === 'renders' &&
          renders.map(({ id: renderId, title, image: { url } }) => (
            <img
              key={renderId}
              src={url}
              alt={title}
              width={200}
              height={200}
            />
          ))}
      </div>
    </article>
  )
}

export default Collection
