import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/core/layout'
import Collection from '../../components/pages/collections'

const CollectionPage = ({ data: { contentfulDeveloperCollection } }) => (
  <Layout>
    <Collection collection={contentfulDeveloperCollection} />
  </Layout>
)

export default CollectionPage

export const query = graphql`
  query Collection($id: String) {
    contentfulDeveloperCollection(id: { eq: $id }) {
      id
      title
      description {
        raw
      }
      logo {
        url
        description
      }
      scans {
        id
        url
        title
        description
        filename
        width
        height
      }
    }
  }
`
