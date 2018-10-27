import React from "react";

const Preview = ({ value, getMarkdownText }) => {
  return <div id="preview" dangerouslySetInnerHTML={getMarkdownText(value)} />;
};

export default Preview;
