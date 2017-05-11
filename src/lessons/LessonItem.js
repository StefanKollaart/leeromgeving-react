import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LessonItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    video: PropTypes.array,
    tekst: PropTypes.array,
    active: PropTypes.bool,
  }
  render() {
    const { _id, title, content, currentUser, track, active } = this.props
    const currentUserLessons = currentUser.unlockedLessons.map(function(lesson) {
      return lesson._id
    })

    if (active) {
      if (currentUserLessons.includes(_id)) {
        return (

          <article>
            <span className="image">
              <img src="https://s27.postimg.org/am1ifej1f/aj3_Pl4y.jpg" alt="" />
            </span>
            <header className="major">
              <h3>{ title }</h3>
              <p>Deze les gaat over..</p>
              <Link className="leren" to={`/lessons/${_id}`}><button className="lerenButton">Leren</button></Link>
            </header>
          </article>
        )
      } else {
        return <article>
          <span className="image">
            <img src="https://s27.postimg.org/am1ifej1f/aj3_Pl4y.jpg" alt="" />
          </span>
          <header className="major">
            <h3>{ title }</h3>
            <p>Deze les gaat over..</p>
          <button className="lerenButton"><img src="https://s27.postimg.org/ca0nu1wwz/7idppli.png" width="12" height="12"/></button>
          </header>
        </article>
      }
    } else {
      return <span></span>
    }
  }
}

export default LessonItem
