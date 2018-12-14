import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'

function Home(props) {
  const { sections } = props
  const sectionIntro = sections.filter(sec => sec.attributes.field_slug === 'section-intro')[0]
  
    return (
      <main>
        <section className="section-intro">
          <div className="u-center-text u-margin-bottom-medium">
            <h2 class="heading-secondairy">
              { sectionIntro.attributes.title }
            </h2>
          </div>
          <p className="paragraph u-center-text">
            { ReactHtmlParser(sectionIntro.attributes.body.processed) }
          </p>
        </section>
      </main>
      
    )
}

// function parseHtml(string) {
//   let parser = new DomParser()
//   return parser.parseFromString(string, 'text/html')

// }

export default Home