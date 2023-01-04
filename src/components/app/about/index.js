import { Link } from 'gatsby'
import React from 'react'
import * as styles from './index.module.css'

const About = () => (
  <div className={styles.aboutContainer}>
    <h1>About</h1>
    <p>
      <dfn>The Render Archive</dfn> is a group of people dedicated to making
      collections for render artwork.
    </p>
    <h4>
      People Behind <em>The Render Archive</em>
    </h4>
    <ul>
      <li>
        Malon - creator (
        <a
          href="https://twitter.com/mrwater79321297"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mrwater79321297
        </a>
        )
      </li>
      <li>
        sammy - developer (
        <a
          href="https://twitter.com/mrwater79321297"
          target="_blank"
          rel="noopener noreferrer"
        >
          sammy.pizza
        </a>
        )
      </li>
    </ul>
    <h4>Contributors</h4>
    Currently nobody! It can be you though! Find out more{' '}
    <Link to="/contribute">here</Link>.
  </div>
)

export default React.memo(About)
