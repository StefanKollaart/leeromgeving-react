import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LessonItem extends PureComponent {
  static propTypes = {
    lessonNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.array,
    tekst: PropTypes.array,
  }
  render() {
    const { _id, lessonNumber, title, content } = this.props

    return (

      <article>
        <span className="image">
          <img src="http://i.imgur.com/aj3Pl4y.jpg" alt="" />
        </span>
        <header className="major">
          <h3>{lessonNumber}. { title }</h3>
          <p>Deze les gaat over..</p>
          <Link className="leren" to={`/lessons/${_id}`}><button className="lerenButton">Leren</button></Link>
        </header>
      </article>
    )
  }
}

export default LessonItem
