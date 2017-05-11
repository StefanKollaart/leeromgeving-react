import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import ContentItem from './ContentItem'
import PageIndicators from './PageIndicators'
import lessonWorking from '../actions/user/lesson-working'
import { history } from '../store'


export class LessonPage extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)
    if(this.props.currentUser.lesson_working && this.props.currentUser.lesson_working._id == this.props.params.lessonId) {
      this.state = {
        contentId: this.props.currentUser.content_working
      }
    } else {
      this.state = {
        contentId: 0
      }
    }


    this.increaseContent = this.increaseContent.bind(this)
    this.decreaseContent = this.decreaseContent.bind(this)
  }

  renderItem(content, index) {
    return <ContentItem content = {content} key={index} />
  }

  componentDidMount() {
    let user = this.props.currentUser
    user.lesson_working = this.props.params.lessonId
    user.content_working = this.state.contentId
    this.props.lessonWorking(user)
    this.props.fetchLessons()
  }

  increaseContent() {
    if (this.state.contentId + 1 < this.props.content.length) {
      let contentId = this.state.contentId + 1
      this.setState({
        contentId: contentId
      }, function() {
        let user = this.props.currentUser
        user.lesson_working = this.props.params.lessonId
        user.content_working = this.state.contentId
        this.props.lessonWorking(user)
      })
    }
  }

  decreaseContent() {
    if (this.state.contentId >= 0) {
      let contentId = this.state.contentId - 1
      this.setState({
        contentId: contentId
      }, function() {
        let user = this.props.currentUser
        user.lesson_working = this.props.params.lessonId
        user.content_working = this.state.contentId
        this.props.lessonWorking(user)
      })
    }
  }


  render() {
    const { title, content, _id, active } = this.props

    if (active) {
      return(
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{ title }</h1>
              </header>
              {((content != undefined && content.length > 0) && this.renderItem(content[this.state.contentId], this.state.contentId))}
              <div className="arrows">
                {(content != undefined && <PageIndicators currentUser={this.props.currentUser} lessonId={_id} content={content} contentId={this.state.contentId} increaseContent={this.increaseContent} decreaseContent={this.decreaseContent}/>)}
              </div>
            </div>
          </section>
        </div>
      )
    } else {
      return(
        <div>
          {history.push('/')}
        </div>
      )
    }
  }
}

const mapStateToProps = ({ lessons, currentUser }, { params }) => {
  const lesson = lessons.reduce((prev, next) => {
    if (next._id === params.lessonId) {
      return next
    }
    return prev
  }, {})

  return {
    ...lesson, currentUser
  }
}



export default connect(mapStateToProps, { lessonWorking, fetchLessons })(LessonPage)
