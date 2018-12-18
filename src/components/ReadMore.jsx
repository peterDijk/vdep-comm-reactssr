import * as React from 'react'

function ReadMore(props) {
  return (
    <main>
      <section className="section-intro">
        <h2 className="heading-secondairy">{ props.section.attributes.title } readmore</h2>
      </section>
    </main>      
  )
}

export default ReadMore