import { Link } from 'gatsby'
import React from 'react'
import * as styles from './index.module.css'

const Scan = ({
  scan: {
    title,
    mainImage: { url: mainImageUrl, description: mainImageDescription },
    uncroppedImage,
    alternativeScans,
  },
  location,
}) => (
  <article className={styles.scanContainer}>
    {location?.state?.collectionId && (
      <Link to={`/collections/${location.state.collectionId}`}>
        &larr; Back to collection
      </Link>
    )}
    <h1>{title}</h1>
    <div className={styles.mainScanContainer}>
      <div>
        {uncroppedImage && <h2>Cropped</h2>}
        <img src={mainImageUrl} alt={mainImageDescription} width={300} />
      </div>
      {uncroppedImage && (
        <div>
          <h2>Original</h2>
          <img
            src={uncroppedImage.url}
            alt={uncroppedImage.description}
            width={300}
          />
        </div>
      )}
    </div>
    {alternativeScans && (
      <>
        <hr />
        <h3>Alternative Scans</h3>
        <div className={styles.alternativeScansContainer}>
          {alternativeScans.map(
            ({
              id: alternativeScanId,
              title,
              mainImage: { url: alternativeScanUrl },
            }) => (
              <img
                key={alternativeScanId}
                src={alternativeScanUrl}
                alt={title}
                width={200}
                height={200}
              />
            )
          )}
        </div>
      </>
    )}
  </article>
)

export default Scan
