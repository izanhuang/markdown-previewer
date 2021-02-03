import React, { Component } from 'react';
import marked from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

export default class Markdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: placeholder,
            display: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.getMarkdownText = this.getMarkdownText.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }
    getMarkdownText() {
        var rawMarkup = marked(this.state.input, {sanitize: true});
        marked.setOptions({
            breaks: true
          })
        return { __html: rawMarkup };
      }
    render() {
        return (
            <div id="markdown-div">
                <div id="editor-div">
                    <label for="editor">
                        Markdown Editor
                            {this.state.display ? 
                            <FontAwesomeIcon className="icon" icon={faWindowMinimize}  onClick={this.toggleDisplay}/>
                            : <FontAwesomeIcon className="icon" icon={faWindowMaximize}  onClick={this.toggleDisplay}/>
                            }
                    </label>
                    {this.state.display && <textarea type="text" value={this.state.input} onChange={this.handleChange} id="editor" name="editor">
                    </textarea>}
                </div>
                <div id="preview-div">
                    <label for="preview">
                        Markdown Previewer
                    </label>
                    <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}>
                    </div>
                </div>
            </div>
        )
    }
}

const placeholder = `# Hi, welcome to my Markdown Previewer! 

## This is the second heading

**Bold text**

There are also [links](https://www.google.com)!

Here is some code \`<div></div>\`

For a multi-line code, use 
\`\`\` 
'\`\`\`' at the beginning and '\`\`\`' at the end!
\`\`\`

Here is a
> Block Quote

[![Leaves Cover Photo](https://i.pinimg.com/originals/7a/a9/cc/7aa9cc0ee0e0c3a923a793e9e61dcc62.jpg)](https://br.pinterest.com/pin/AWYS096DrxqFc1ScwouxwpuanVJaKop09Dj5LIdS7VjftfKoMvhkoWc/)

- List item 1
    - List subitem 1
`;