import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class PageIndicators extends PureComponent {

  render() {
    if (this.props.contentId + 1 < this.props.content.length && this.props.contentId > 0) {
      return(
        <div>
          <a onClick={this.props.decreaseContent}><img src="http://i.imgur.com/WJgacLw.png" width="30px" height="30px"/></a> | <a onClick={this.props.increaseContent}><img src="http://i.imgur.com/zk3n4wA.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}
        </div>
        )
    } else if (this.props.contentId + 1 < this.props.content.length) {
      return(
        <div>
          <a onClick={this.props.increaseContent}><img src="http://i.imgur.com/zk3n4wA.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}
        </div>
      )
    } else if (this.props.contentId > 0) {
      return(
        <div>
          <a onClick={this.props.decreaseContent}><img src="http://i.imgur.com/WJgacLw.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default PageIndicators
