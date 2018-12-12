import * as React from 'react'

function Header(props) {
  const { items } = props
  return (
    <header className="header" style={{'--bg-img-url': `url(images/mark-eder-310600-unsplash.jpg)`}}>
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
        <img src="images/vdep-logo.png" alt="Van Dijk E-Projects" className="header__logo"/>
      </div>
      <div className="header__text-box">
        <h1>
          <span className="heading-primary heading-primary--main">
            { props.content.headingMain }
          </span>
          <span className="heading-primary heading-primary--sub">
            { props.content.headingSub }
          </span>
        </h1>
      </div>

    </header>
  )
}

export default Header