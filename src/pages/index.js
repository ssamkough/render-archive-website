import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Home from '../components/app/home'
import Layout from '../components/core/layout'

class HomePage extends React.Component {
  render() {
    const collections = get(this, 'props.data.collection.nodes')

    return (
      <Layout>
        <Home collections={collections} />
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
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
