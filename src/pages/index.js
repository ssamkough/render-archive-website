import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Layout from '../components/core/layout'
import Home from '../components/pages/home'

class HomePage extends React.Component {
  render() {
    const developers = get(this, 'props.data.allContentfulDeveloper.nodes')

    return (
      <Layout>
        <Home developers={developers} />
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulDeveloper {
      nodes {
        id
        title
        description {
          raw
        }
        logo {
          description
          url
        }
        collections {
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
  }
`
