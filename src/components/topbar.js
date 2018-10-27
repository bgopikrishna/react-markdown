import React from "react";

const Topbar = (props) => {
    const icon = props.maximized ?<i className="far fa-window-close" style={{'color': "red"}}></i>:  <i className="fas fa-arrows-alt" />  ;
  return (
    <div className="toolbar">
      <span>
        {" "}
        <i className="fab fa-react" /> {props.heading}
      </span>
      <span>
        <button onClick={props.onClick}>
          {icon}
        </button>
      </span>
    </div>
  );
};

export default Topbar;
