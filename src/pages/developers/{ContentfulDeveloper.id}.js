import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/core/layout'
import Developer from '../../components/pages/developers'

const DeveloperPage = ({ data: { contentfulDeveloper } }) => (
  <Layout>
    <Developer developer={contentfulDeveloper} />
  </Layout>
)

export default DeveloperPage

export const query = graphql`
  query Developer($id: String) {
    contentfulDeveloper(id: { eq: $id }) {
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
`
