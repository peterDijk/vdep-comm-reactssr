import * as React from 'react'
import Header from './Header'

class HeaderContainer extends React.PureComponent {
  state = {
    menuItems: [
      {
        name: "Home",
        path: "/"
      },
      {
        name: "Test",
        path: "/test"
      }
    ],
    content: {
      headingMain: "Communicatie over Grenzen",
      headingSub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat, beatae sunt consectetur in voluptatum.",
      bgImgUrl: 'https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80'
    }
  }

  render() {
    return (
      <Header items={this.state.menuItems} content={this.state.content} />
    )
  }
}

export default HeaderContainer