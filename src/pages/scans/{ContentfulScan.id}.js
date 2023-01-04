import { graphql } from 'gatsby'
import React from 'react'
import Scan from '../../components/app/scans/Scan'
import Layout from '../../components/core/layout'

const ScanPage = ({
  data: { contentfulScan },
  location: {
    state: { collectionId },
  },
}) => (
  <Layout>
    <Scan scan={contentfulScan} collectionId={collectionId} />
  </Layout>
)

export default ScanPage

export const query = graphql`
  query Scan($id: String) {
    contentfulScan(id: { eq: $id }) {
      id
      title
      mainImage {
        id
        url
        description
      }
      uncroppedImage {
        id
        url
        description
      }
      description {
        raw
      }
      alternativeScans {
        id
        title
        mainImage {
          id
          url
          description
        }
      }
    }
  }
`
