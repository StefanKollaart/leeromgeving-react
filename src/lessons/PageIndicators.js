import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class PageIndicators extends PureComponent {

  render() {
    let userDoneLessonsId = this.props.currentUser.lesson_done.map(function(lesson) {
      return lesson._id
    })
    if (this.props.contentId + 1 < this.props.content.length && this.props.contentId > 0) {
      return(
        <div>
          <a onClick={this.props.decreaseContent}><img src="http://i.imgur.com/WJgacLw.png" width="30px" height="30px"/></a><a onClick={this.props.increaseContent}><img src="http://i.imgur.com/zk3n4wA.png" width="30px" height="30px"/></a><br/>
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
    } else if (this.props.contentId > 0 && !userDoneLessonsId.includes(this.props.lessonId)) {
      return(
        <div>
          <button><Link className="leren" to={`/quiz/${this.props.lessonId}`}>Doe quiz</Link></button><br/><br/>
          <a onClick={this.props.decreaseContent}><img src="http://i.imgur.com/WJgacLw.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}<br/>
        </div>
      )
    } else if (this.props.contentId > 0 && userDoneLessonsId.includes(this.props.lessonId)) {
      return(
        <div>
          <img src="http://i.imgur.com/5zuaeA9.png" width="20" height="20"/>Les afgerond<br/><br/>
          <a onClick={this.props.decreaseContent}><img src="http://i.imgur.com/WJgacLw.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}<br/>
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
