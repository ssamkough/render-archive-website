import { Link } from 'gatsby'
import React from 'react'
import * as styles from './index.module.css'

const Home = ({ developers }) => (
  <div className={styles.homeContainer}>
    {developers.map(({ id, title, description, logo, collections }) => (
      <Link to={`developers/${id}`}>
        <article key={id} className={styles.cardContainer} tabIndex="0">
          <div className={styles.cardMainInfo}>
            <div className={styles.cardMainInfoText}>
              <h2 className={styles.noHeadingSpacing}>{title}</h2>
              <span className={styles.cardMainInfoDescription}>
                {JSON.parse(description.raw).content[0].content[0].value}
              </span>
            </div>
            <div className={styles.cardMainInfoImageContainer}>
              <img
                src={logo.url}
                alt={logo.description}
                className={styles.cardMainInfoImage}
              />
            </div>
          </div>
          <div className={styles.cardCollectionContainer}>
            <hr className={styles.cardCollectionDivider} />
            <span className={styles.cardCollectionHeaderText}>
              <em>Featured Collections</em>
            </span>
            <div className={styles.cardCollectionCardsContainer}>
              {collections.map(
                ({
                  id: collectionId,
                  title: collectionTitle,
                  logo: collectionLogo,
                }) => (
                  <article
                    key={collectionId}
                    className={styles.cardCollectionIndividualCardContainer}
                    tabIndex="0"
                  >
                    <h4 className={styles.noHeadingSpacing}>
                      {collectionTitle}
                    </h4>
                    <img
                      src={collectionLogo.url}
                      alt={collectionLogo.description}
                      className={styles.cardCollectionIndividualCardText}
                    />
                  </article>
                )
              )}
            </div>
          </div>
        </article>
      </Link>
    ))}
  </div>
)

export default React.memo(Home)
