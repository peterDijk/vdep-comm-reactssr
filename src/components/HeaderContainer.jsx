import * as React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

class HeaderContainer extends React.PureComponent {

  render() {
    if (this.props.page.data.length === 0) return 'Header Loading'
    const headerNode = this.props.page.included.filter( incl => incl.type === 'node--header' )[0]
    const imageNode = this.props.page.included.filter( incl => incl.id === headerNode.relationships.field_background_image.data.id )[0]
    return (
      <Header headerNode={ headerNode } imageNode={ imageNode }/>
    )
  }
}

const mapStateToProps = (state) => ({ 
  page: state.page
})

export default connect(mapStateToProps)(HeaderContainer)