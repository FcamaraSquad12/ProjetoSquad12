import React from "react";
import "./CardGroup.css";

export default ({group}) => {
  return (
    <div className="card-group-container fade-in-fwd">
      <div className="card-group-body">
        <div>
          <h2 className="card-group-title">{group.title}</h2>
          <h4 className="card-group-date"> <i class="fa-solid fa-calendar-days"></i>{group.date}</h4>
          <h4 className="card-group-time"><i class="fa-solid fa-clock"></i>{group.time}</h4>
          <h4 className="card-group-subject">{group.subject}</h4>
          
        </div>
        
        <div className="join-container">
          <a className="join-group"href={group.link} target='_blank'>Juntar-se</a>
        </div>
      </div>
    </div>
  )
}

