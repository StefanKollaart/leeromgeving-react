import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {stateFromHTML} from 'draft-js-import-html';
import { convertToRaw, convertFromHTML, ContentState, EditorState } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import { Editor } from 'react-draft-wysiwyg';
import {stateToHTML} from 'draft-js-export-html';
import draftToHtml from 'draftjs-to-html';
import './wysiwyg.scss'

class ContentFields extends Component {

  constructor(props) {
    super(props)
    let contentState = stateFromHTML(this.props.content);
    const editorState = EditorState.createWithContent(contentState);

    this.state = {
      editorContents: [editorState],
    };
  }

  onEditorStateChange: Function = (index, editorContent) => {
    let editorContents = this.state.editorContents
    editorContents[index] = editorContent
    editorContents = [...editorContents]
    this.setState({
      editorContents,
    })
    this.props.handleTekst(this.props.id, editorContents[0] && draftToHtml(convertToRaw(editorContents[0].getCurrentContent())))
  };



  render() {
    const { editorContents } = this.state;
    if (this.props.type == 1) {
      return(
        <li>
          <label>Video ({this.props.order}) - <span className="removeItem" onClick={() => {this.props.removeItem(this.props.id)}}>Verwijder</span></label>
          {this.props.content ? <iframe className="vimeo" src={"https://player.vimeo.com/video/" + this.props.content} width="640" height="360" allowFullScreen>
          </iframe>  : null }
          <input type="text" placeholder="Vimeo ID" value={this.props.content} onChange={this.props.handleVideo.bind(this, this.props.id)} className="field-long"/>
        </li>
      )
    } else if (this.props.type == 2) {
      return(
        <li>
        <label>Tekst ({this.props.order}) - <span className="removeItem" onClick={() => {this.props.removeItem(this.props.id)}}>Verwijder</span></label>
          <Editor
            hashtag={{}}
            editorState={editorContents[0]}
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange.bind(this, 0)}
          />
        </li>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default ContentFields
