import React, { Component } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Topbar from "./components/topbar";
import classNames from "classnames";

const marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: defaultPlaceholder,
      editorMaximized: false,
      previewMaximized: false,
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
    this.handleMaximize = this.handleMaximize.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleMaximize(myWindow) {
    const { editorMaximized, previewMaximized } = this.state;

    if (myWindow === "editor") {
      editorMaximized
        ? this.setState({ editorMaximized: false })
        : this.setState({ editorMaximized: true });
    }
    if (myWindow === "preview") {
      previewMaximized
        ? this.setState({ previewMaximized: false })
        : this.setState({ previewMaximized: true });
    }
  }

  getMarkdownText(value) {
    return { __html: marked(value, { breaks: true, gfm: true }) };
  }

  render() {
    const { value, editorMaximized, previewMaximized } = this.state;
    const editorClass = classNames("editor", {
      "max editor-max": editorMaximized
    });
    const previewClass = classNames("previewer", { max: previewMaximized });

    return (
      <div className="App">
        <div className={editorClass}>
          <Topbar
            heading={"Editor"}
            windowIcon={<i className="far fa-edit" />}
            onClick={() => {
              this.handleMaximize("editor");
            }}
            maximized={editorMaximized}
          />
          <Editor value={value} onChange={this.handleChange} />
        </div>

        <div className={previewClass}>
          <Topbar
            heading={" Preview"}
            windowIcon={<i className="fas fa-tv" />}
            onClick={() => {
              this.handleMaximize("preview");
            }}
            maximized={previewMaximized}
          />
          <Previewer value={value} getMarkdownText={this.getMarkdownText} />
        </div>
      </div>
    );
  }
}

const defaultPlaceholder = `# React Markdown Parser!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![A kitten w/ Text](https://placekitten.com/g/200/300)
`;

export default App;
