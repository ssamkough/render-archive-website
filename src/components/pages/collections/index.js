import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'

const Collection = ({
  collection: {
    id,
    title,
    description,
    logo: { url: logoUrl, description: logoDescription },
    scans,
  },
}) => (
  <article>
    <h1>{title}</h1>
    <h3>{renderRichText(description)}</h3>
  </article>
)

export default Collection
