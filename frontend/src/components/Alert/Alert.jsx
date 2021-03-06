import React from "react";
import './Alert.css';

export default ({type, header, msg, show}) => {
    const isVisible = show ? 'visible' : 'hidden';

    return (
      <div className={type} style={{visibility: isVisible}}>
        <p>{header}</p>
        <p>{msg}</p>
      </div>
    );
  }