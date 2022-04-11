import React from "react";
import "./CardPerson.css";
import Img from '../../assets/svg/profile.svg'
import { useNavigate } from 'react-router-dom'

export default ({ user }) => {
  const navigate = useNavigate();

  const handleOpenProfile = () => {
    return navigate('/profile', {state: user})
  }

  return (
    <div className="card fade-in-fwd">
      <img src={Img} alt="foto" className="card-img-top" />
      <div className="card-body">
        <div>
          <h2 className="card-title">{user.name}</h2>
          <h4 className="card-subtile mb-2 text-muted">{user.profession}</h4>
          <div>
            <p className="skill">
              {user.skills.map((skill) => (
                <span className="item-skill">{skill} </span>
              ))}
            </p>
          </div>
        </div>
        
        <button className= "button-profile" onClick={handleOpenProfile}>Ver perfil</button>
      </div>
    </div>
  )
}
