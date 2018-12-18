import * as React from 'react'
import * as constants from '../constants'

function Header(props) {
  const { headerNode, imageNode } = props
  return (
    <header className="header" style={{'--bg-img-url': `url(${ constants.contentDomain }${ imageNode.attributes.uri.url })`}}> 
    {/* style={{'--bg-img-url': `url(${ constants.contentDomain }${ imageNode.attributes.uri.url })`}} */}
      {/* <nav className="header__nav">
        <ul>
        { items.map(item => {
          return (
            <li key={item.path}>{item.name}</li>
          )
        }) }
        </ul>
      </nav> */}
      <div className="header__logo-box">
        <img src="/images/vdep-logo.png" alt="Van Dijk E-Projects" className="header__logo"/>
      </div>
      <div className="header__text-box">
        <h1>
          <span className="heading-primary heading-primary--main">
            { headerNode.attributes.title }
          </span>
          <span className="heading-primary heading-primary--sub">
            { headerNode.attributes.field_subtitle }
          </span>
        </h1>
      </div>

    </header>
  )
}

export default Header