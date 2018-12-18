import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Section(props) {
  const { section } = props
  return (
      <section className="section-intro">
        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondairy">
            { section.attributes.title }
          </h2>
        </div>
        <div className="paragraph u-center-text">
          { ReactHtmlParser(section.attributes.body.processed) }
        </div>
        <Link key={section.id} to={`/more/${section.attributes.field_slug}`} className="btn-readmore">
          <Button variant="contained" >
            Lees meer
          </Button>
        </Link>
      </section>
  )
}

export default Section