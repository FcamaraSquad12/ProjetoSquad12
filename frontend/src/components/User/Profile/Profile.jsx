import React from "react";
import "./Profile.css";
import RobsonLogo from "../../../assets/svg/logo.svg";
import ProfilePic from "../../../assets/svg/image2.svg";

export default ({ user }) => {
  return (
    <div className="profile-page-container">
        <header className="header-container">
        <nav>
                <img src={RobsonLogo} alt="" />
                <ul className="ul-item">
                   <li>Encontre uma pessoa</li>
                   <li>Grupo de estudos</li>
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
          <h3>{user.description}</h3>
          <button>Agendar</button>
        </div>
      </div>

      <div>
        {(skills) => {
          return skills.map((skill) => <span>#{skill}</span>);
        }}
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <h2>Acesse meu portifólio</h2>
          <h3>Portifólio</h3>
        </div>

        <div>
          <img src="" alt="" />
          <h2>Acesse meu Linkedin</h2>
          <h3>Linkedin</h3>
        </div>

        <div>
          <img src="" alt="" />
          <h2>Acesse meus arquivos</h2>
          <h3>Google Drive</h3>
        </div>
      </div>
    </div>
  );
};