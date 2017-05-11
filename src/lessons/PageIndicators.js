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
          <a onClick={this.props.decreaseContent}><img src="https://s27.postimg.org/6oe8pzw83/WJgac_Lw.png" width="30px" height="30px"/></a><a onClick={this.props.increaseContent}><img src="https://s27.postimg.org/wvfflyehv/zk3n4w_A.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}
        </div>
        )
    } else if (this.props.contentId + 1 < this.props.content.length) {
      return(
        <div>
          <a onClick={this.props.increaseContent}><img src="https://s27.postimg.org/wvfflyehv/zk3n4w_A.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}
        </div>
      )
    } else if (this.props.contentId > 0 && !userDoneLessonsId.includes(this.props.lessonId)) {
      return(
        <div>
          <button><Link className="leren" to={`/quiz/${this.props.lessonId}`}>Doe quiz</Link></button><br/><br/>
          <a onClick={this.props.decreaseContent}><img src="https://s27.postimg.org/6oe8pzw83/WJgac_Lw.png" width="30px" height="30px"/></a><br/>
          {this.props.contentId + 1}/{this.props.content.length}<br/>
        </div>
      )
    } else if (this.props.contentId > 0 && userDoneLessonsId.includes(this.props.lessonId)) {
      return(
        <div>
          <img src="https://s3.postimg.org/hmhb6eqqb/5zuae_A9.png" width="20" height="20"/>Les afgerond<br/><br/>
          <a onClick={this.props.decreaseContent}><img src="https://s27.postimg.org/6oe8pzw83/WJgac_Lw.png" width="30px" height="30px"/></a><br/>
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
