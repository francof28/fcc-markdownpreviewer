import React from 'react';
import marked from 'marked';
import './MarkdownPreviewer.css';

const initialState =  
`This is a paragraph

# Header 
## Sub Header

[Visit my GitHub!](https://github.com/francof28)

This is inline code \`<div></div>\`

This is a code block

\`\`\`
    let x = 5;
\`\`\`

- list item
- list item 2
- list item 3

> Block Quote

![React](https://mpng.subpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg)

**This is bolded text**
`;

class MarkdownPreviewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: initialState,
        }
    }

    handleChange(event) {
        this.setState ({
            text: event.target.value
        })
    }

    getMarkdownText () {
        var rawMarkup = marked(this.state.text);
        return {__html: rawMarkup}
    }


    render () {
        const markedText = marked(this.state.text, {breaks: true});
        return (
            <div id="markdown-previewer">
                <div className="row">
                    <div className="col-8">
                        <h3 className="text-left"> - editor</h3>
                        <textarea id="editor" value={this.state.text} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="col-8" >
                        <h3 className="text-left"> - previewer</h3>
                        <div id="preview" className="preview" dangerouslySetInnerHTML={{__html: markedText}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer;