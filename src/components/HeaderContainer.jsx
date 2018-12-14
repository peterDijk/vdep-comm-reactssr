import * as React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

class HeaderContainer extends React.PureComponent {

  render() {
    if (this.props.page.data.length === 0) return 'Loading'
    const headerNode = this.props.page.included.filter( incl => incl.type === 'node--header' )
    const imageNode = this.props.page.included.filter( incl => incl.id === headerNode[0].relationships.field_background_image.data.id )
    return (
      <Header headerNode={ headerNode[0] } imageNode={ imageNode[0] }/>
    )
  }
}

const mapStateToProps = (state) => ({ 
  page: state.page
})

export default connect(mapStateToProps)(HeaderContainer)