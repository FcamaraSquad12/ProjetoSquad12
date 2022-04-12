import React from 'react';
import './Profile.css';
import RobsonLogo from '../../../assets/svg/logo.svg';
import ProfilePic from '../../../assets/svg/image2.svg';
import Medium from '../../../assets/svg/mediumPic.svg';
import Linkedin from '../../../assets/svg/linkedin.svg';
import Drive from '../../../assets/svg/drivePic.svg';
import { useNavigate } from 'react-router-dom';

export default ({ user }) => {

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

          <img src={RobsonLogo} alt="" />
          <ul className="ul-item">
              <li onClick={handleFindPerson}>Encontre uma pessoa</li>
              <li onClick={handleFindGroup}>Grupo de estudos</li>
          </ul>
        </nav>
      </header>
      
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={ProfilePic} alt="" />
        </div>

        <div className="profile-infos">
          <h1>{user.name}</h1>
          <h2>{user.profession}</h2>
          <p>
            {user.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fugit voluptatibus,
            cupiditate eos, velit, ipsa neque sit ut nemo aliquid corporis facere sunt molestiae ipsum alias dolorum
            eveniet. Iure, eveniet?
          </p>
          <div className="contato">
            <a className="agendar" href={user.calendly} target="_blank">
              Agendar um horário
            </a>
            <a className="whats" href="#" target="_blank">
              <i class="fa-brands fa-whatsapp"></i>Whatapp
            </a>
          </div>
        </div>
      </div>

      <div>
        {user.skills.map((skill) => (
          <span className="item-skill">{skill} </span>
        ))}
      </div>

      {<div className="redes-sociais">
        <div>
          <img src={Medium} alt="" />
          <h2>Acesse meus artigos</h2>
          <a src={user.portfolio} href={user.portfolio} target="_blank">
            Medium
          </a>
        </div>

        <div>
          <img src={Linkedin} alt="" />
          <h2>Acesse meu Linkedin</h2>
          <a href={user.linkedin} target="_blank">
            Linkedin
          </a>
        </div>

        <div>
          <img src={Drive} alt="" />
          <h2>Acesse meu Drive</h2>
          <a href={user.drive} target="_blank">
            Google Drive
          </a>
        </div>
      </div>}
    </div>
  );
};

