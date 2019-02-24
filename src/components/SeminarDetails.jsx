import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { requestSeminars } from '../actions/seminars'

const SeminarDetails = (props) => {
  const { seminar } = props;
  return (
    <section className="section-intro">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondairy">
          { seminar.attributes.title }
        </h2>
      </div>
      <div className="paragraph">
          { ReactHtmlParser(seminar.attributes.body.processed) }
        </div>      
    </section>
  )
}

export default SeminarDetails