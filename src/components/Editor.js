import React from "react";


const Editor = ({value, onChange}) => {
  return (
    <textarea id="editor"
      value={value}
      onChange={onChange}
      type="text"/>
    )
}

export default Editor;
