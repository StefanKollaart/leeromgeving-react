import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ContentItem extends PureComponent {

  componentWillMount() {
    this.state = ({
      content: this.props.content
    })
  }

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render() {
    const { content } = this.props
    if (content.type == 1) {
      return (
        <iframe src={"https://player.vimeo.com/video/" + content.content} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      )
    } else if(content.type == 2) {
      debugger
      return (
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default ContentItem
