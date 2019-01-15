import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'


import Button from '@material-ui/core/Button'

import Section from './Section'
import SeminarsContainer from './SeminarsContainer'

function Home(props) {
  const { sections } = props
  // const sectionIntro = sections.filter(sec => sec.attributes.field_slug === 'section-intro')[0]
  // const sectionAbout = sections.filter(sec => sec.attributes.field_slug === 'section-about')[0]
  // const sectionSeminars = sections.filter(sec => sec.attributes.field_slug === 'section-seminars')[0]
  
    return (
      
      <main>
        {/* <Section section={ sectionIntro } />
        <Section section= { sectionSeminars } seminars={props.seminars}/>
        <Section section={ sectionAbout } /> */}
      </main>
      
    )
}

export default Home