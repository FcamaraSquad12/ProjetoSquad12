import React, { useState, useEffect} from 'react';
import './Profile.css';
import RobsonLogo from '../../../assets/svg/logo.svg';
import ProfilePic from '../../../assets/svg/image2.svg';
import Outdoor from '../../../assets/svg/profilePic.svg';
import Medium from '../../../assets/svg/mediumPic.svg';
import Linkedin from '../../../assets/svg/linkedin.svg';
import Drive from '../../../assets/svg/drivePic.svg';
import { useNavigate } from 'react-router-dom';
import FcamaraLogo from '../../../assets/imgs/logo-fcamara.png'

export default ({user}) => {
  const navigate = useNavigate();
  
  const handleFindGroup = () => {
    return navigate('/search-group')
  }
  
  const handleFindPerson = () => {
    return navigate('/search-person')
  }

  return (
    <div className="profile-page-container">
      <header className="header-container">
        <nav>

          <img onClick={handleFindPerson} src={RobsonLogo} alt="" />
          <ul className="ul-item">
              <li onClick={handleFindPerson}>Encontre uma pessoa</li>
              <li onClick={handleFindGroup}>Grupo de estudos</li>
          </ul>
        </nav>
      </header>

      <div className="outdoor">
        <img className ="outdoor-img" src={Outdoor} alt="" />
      </div>
      
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={ProfilePic} alt="" />
          <div className="skills-container">
            {user.skills.map((skill) => skill ? <span className="item-skill">{skill}</span> : '')}
          </div>
        </div>

        <div className="profile-infos">
          <h1>{user.name}</h1>
          <h2>{user.profession}</h2>
          <p>
            {user.description}
          </p>
          <div className="contato">
            <a className="agendar" href={user.calendly} target="_blank">
              Agendar um horário
            </a>
            <a className="whats" href={`https://api.whatsapp.com/send?phone=55${user.whatsapp}`} target="_blank">
              <i className="fa-brands fa-whatsapp"></i>WhatsApp
            </a>
          </div>
        </div>
      </div>

      {<div className="redes-sociais">
        
        <a src={user.portfolio} href={user.portfolio} target="_blank">
          <img src={Medium} alt="" />
          <h2>Acesse meus artigos</h2>
          <p>Medium</p>
        </a>
        

        <a href={user.linkedin} target="_blank">
          <img src={Linkedin} alt="" />
          <h2>Acesse meu Linkedin</h2>
          <p>Linkedin</p>
        </a>


        <a href={user.drive} target="_blank">
          <img src={Drive} alt="" />
          <h2>Acesse meu Drive</h2>
          <p>Google Drive</p>
        </a>

      </div>}
      <div className="footer-container">
        <footer>
          <div className="footer-robson-logo">
            <img src={RobsonLogo} alt="" />
          </div>
          <div className="footer-fcamara-logo">
            <img src={FcamaraLogo} alt="" />
          </div>
        </footer>
      </div>
    </div>
  );
};

