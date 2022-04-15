import React, { useState, useEffect} from 'react';
import './Profile.css';
import RobsonLogo from '../../../assets/svg/logo.svg';
import ProfilePic from '../../../assets/svg/image2.svg';
import Outdoor from '../../../assets/svg/profilePic.svg';
import { useNavigate } from 'react-router-dom';
import CardPortfolio from '../../CardPortfolio/CardPortfolio';
import Footer from '../../Footer/Footer';

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
            <a className="agendar" href={ user.calendly ? user.calendly : '/search-person'} target="_blank">
              Agendar um horário
            </a>
            <a className="whats" href={`https://api.whatsapp.com/send?phone=55${user.whatsapp}`} target="_blank">
              <i className="fa-brands fa-whatsapp"></i>WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="redes-sociais">
        {user.portfolio ? <CardPortfolio link={user.portfolio}/>:''}
        {user.linkedin ? <CardPortfolio link={user.linkedin}/>:''}
        {user.drive ? <CardPortfolio link={user.drive}/>:''}
      </div>
      <Footer/>
    </div>
  );
};

