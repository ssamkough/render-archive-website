import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Layout from '../components/layout'

class Home extends React.Component {
  render() {
    const developers = get(this, 'props.data.allContentfulDeveloper.nodes')

    return (
      <Layout>
        {developers.map(({ id, title, description, logo, collections }) => (
          <div
            key={id}
            style={{
              maxWidth: '700px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '8px',
              border: '2px dotted black',
              borderRadius: '2px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap-reverse',
                gap: '8px',
              }}
            >
              <div
                style={{
                  maxWidth: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h2 style={{ margin: '0px', padding: '0px' }}>{title}</h2>
                <span style={{ fontSize: '20px' }}>
                  {JSON.parse(description.raw).content[0].content[0].value}
                </span>
              </div>
              <img
                src={logo.url}
                alt={logo.description}
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
            <hr style={{ width: '100%' }} />
            <span style={{ fontSize: '18px' }}>
              <em>Featured Collections</em>
            </span>
            <div style={{ width: '100%', display: 'flex' }}>
              {collections.map(
                ({
                  id: collectionId,
                  title: collectionTitle,
                  logo: collectionLogo,
                }) => (
                  <div
                    key={collectionId}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    <h4 style={{ margin: 0, padding: 0 }}>{collectionTitle}</h4>
                    <img src={collectionLogo.url} style={{ width: '150px' }} />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home

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
