import { graphql } from 'gatsby'
import React from 'react'
import Collection from '../../components/app/collections/Collection'
import Layout from '../../components/core/layout'

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
        title
        mainImage {
          url
          description
          filename
          width
          height
        }
      }
      renders {
        id
        title
        image {
          id
          url
          description
        }
      }
    }
  }
`
