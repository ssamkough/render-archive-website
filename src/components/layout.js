import React from 'react'
import Footer from './footer'
import './global.css'
import Navigation from './navigation'
import Seo from './seo'
import './variables.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
