import * as React from 'react'

function Header(props) {
  const { items } = props
  return (
    <header className="header">
      <nav>
        <ul>
        { items.map(item => {
          return (
            <li key={item.path}>{item.name}</li>
          )
        }) }
        </ul>
      </nav>
      <div className="header__logo-box">
        <img src="images/vdep-logo.png" alt="Van Dijk E-Projects" className="header__logo"/>
      </div>
      <div className="header__text-box">
        <span className="heading-primairy--main">
          { props.content.headingMain }
        </span>
        <span className="heading-primairy--sub">
          { props.content.headingSub }
        </span>
      </div>

    </header>
  )
}

export default Header