import React from "react";
import "./Home.css";
export default (props) => (
  <div className="app">
    <div className="home-container">
      <div className="header-container">
        <div className="profile-image"></div>
        <div className="label-header"></div>
        <div className="label-header"></div>
        <div className="label-header"></div>
        <div className="profile-image"></div>
      </div>

      <div className="search-container">
        <input type="text" className="search-field" />
        <div className="search-filter">
          <span className="search-span">Conteudo</span>
          <span className="search-span">Pessoas</span>
          <span className="search-span">comunidades</span>
        </div>
      </div>

      <div className="search-filter">
        <span className="search-span">UX / UI</span>
        <span className="search-span">DEV</span>
        <span className="search-span">comunidades</span>
      </div>

      <div className="cards-container">
        <div className="cards">
          <div className="cards-img"></div>
          <h1>Wellington</h1>
          <p>Desenvolvedor Web</p>
          <div>
            <p>MongoDB</p>
            <p>React</p>
            <p>Node</p>
            <button>Conectar</button>
          </div>
        </div>

        <div className="cards">
          <div className="cards-img"></div>
          <h1>Miguel</h1>
          <p>Desenvolvedor Web</p>
          <div>
            <p>Javascript</p>
            <p>Css</p>
            <p>Html</p>
            <button>Conectar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
