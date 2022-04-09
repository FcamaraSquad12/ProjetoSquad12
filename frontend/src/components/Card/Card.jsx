import React from "react";
import "./Card.css";
import Img from '../../assets/imgs/img-profile.jpg'

export default ({ user }) => (
  <div className="card fade-in-fwd">
    <img src={Img} alt="foto" className="card-img-top" />
    <div className="card-body">
      <div>
        <h2 className="card-title">{user.name}</h2>
        <h4 className="card-subtile mb-2 text-muted">{user.specialty}Develop</h4>
        <div>
          <p>
            {user.skills.map((skill) => (
              <span className="item-skill">{skill} </span>
            ))}
          </p>
        </div>
      </div>

      <div className="icon-item">
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-medium"></i>
        <i class="fa-solid fa-calendar-check"></i>
      </div>
    </div>
    
  </div>
);
