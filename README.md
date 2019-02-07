# React Markdown Previewer

freeCodeCamp project
You can check the depolyed version [here][App]


### Introduction

Hey, this project is a part of freeCodeCamp's front end libraries certification. I'm gonna try to explain as simply as possible.

### User Stories

- I have to use React JS.
- When I enter GitHub flavoured markdown into the Editor Tab, the text is rendered as HTML in the Preview Tab as I type.
- There should be a maximizing and minimizing button on both Editor and Preview Tabs.

### Extra Dependencies

- I used the [**marked.js**][markedJS] library for markdown parsing. You can install it by entering the following command in your terminal
    ```
     npm install marked --save
    ```
- And used [**classnames.js**](#) for adding and removing CSS classes based on user interaction for maximizing and minimizing. You can install it by entering the following command in your terminal,
    ```
     npm install classnames --save
    ```



### How I Did It?

I split my app into three components. An Editor Component, a Previewer component and a Topbar component.

My App.js file roughly looks like this.

```JSX
<App>
<Editor />
<Previewer />
</App>
```

When the user types the text in the `textarea` of the `Editor Component` , the value is passed to `getMarkdownText()` function for marked parsing which uses [**marked.js**][markedJS] library.
It looks like ,

```Javascript
getMarkdownText(value) {
    return { __html: marked(value, { breaks: true, gfm: true }) };
  }
```

The returned value form the `getMarkdownText()` is rendered in Previewer Component by using `dangerouslySetInnerHTML` property. You can find more about it [here][classNames]

The properties `{ breaks: true, gfm: true }` are from the marked.js library. 
* `breaks: true` - It enables soft line breaks
* `gfm: true` - It parses in GitHub Flavoured Markdown. 


I achieved maximizing and minimizing using [**classNames.js**][classNames] by switching classes by using `onClick` method.

```JS
 const editorClass = classNames("editor", {
      "max editor-max": editorMaximized
    });
    const previewClass = classNames("previewer", { max: previewMaximized });
```

Thats How I finished it.


You can find the source code of this project [here][SourceCode]
and live application [here][App].



[App]: https://react-markdown.netlify.com/ "App link"
[SourceCode]: https://github.com/bgopikrishna/react-markdown "Source Code" 
[markedJS]: https://marked.js.org/#/README.md#README.md "marked.js library link"
[classNames]: https://github.com/JedWatson/classnames "classNames library link"