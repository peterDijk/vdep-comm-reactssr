import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

import Button from '@material-ui/core/Button'

function Home(props) {
  const { sections } = props
  const sectionIntro = sections.filter(sec => sec.attributes.field_slug === 'section-intro')[0]
  
    return (
      <main>
        <section className="section-intro">
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondairy">
              { sectionIntro.attributes.title }
            </h2>
          </div>
          <div className="paragraph u-center-text">
            { ReactHtmlParser(sectionIntro.attributes.body.processed) }
          </div>
          <Link key={sectionIntro.id} to={`/more/${sectionIntro.attributes.field_slug}`} >
            <Button variant="contained" className="btn-readmore">
              Lees meer
            </Button>
          </Link>
          <NavLink to="/test" >
            <Button variant="contained" className="btn-readmore" onClick={() => props.testFn()}>
              test
            </Button>
          </NavLink>
        </section>
      </main>
      
    )
}

export default Home