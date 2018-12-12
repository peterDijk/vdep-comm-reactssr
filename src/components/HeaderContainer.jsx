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
      headingSub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat, beatae sunt consectetur in voluptatum."
    }
  }

  render() {
    return (
      <Header items={this.state.menuItems} content={this.state.content} />
    )
  }
}

export default HeaderContainer