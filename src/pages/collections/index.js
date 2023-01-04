import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Collections from '../../components/app/collections'
import Layout from '../../components/core/layout'

class CollectionsPage extends React.Component {
  render() {
    const collections = get(this, 'props.data.collection.nodes')

    return (
      <Layout>
        <Collections collections={collections} />
      </Layout>
    )
  }
}

export default CollectionsPage

export const pageQuery = graphql`
  query CollectionsQuery {
    collection: allContentfulDeveloperCollection {
      nodes {
        id
        title
        description {
          raw
        }
        logo {
          url
          description
        }
      }
    }
  }
`
