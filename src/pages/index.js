import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    console.log('this', this)
    const developers = get(this, 'props.data.allContentfulDeveloper.nodes')

    return (
      <Layout location={this.props.location}>
        {developers.map(({ title, description, logo }) => (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <h2>{title}</h2>
          </div>
        ))}
      </Layout>
    )
  }
}

export default RootIndex

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
          file {
            url
          }
        }
        collections {
          id
          logo {
            filename
          }
        }
      }
    }
  }
`
