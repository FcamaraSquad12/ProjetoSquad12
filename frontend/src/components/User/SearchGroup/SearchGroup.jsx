import React, { useState, useEffect } from "react";
import Card from "../../CardGroup/CardGroup"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./SearchGroup.css";
import { set } from "js-cookie";
import RobsonLogo from '../../../assets/svg/logo.svg'
import FcamaraLogo from '../../../assets/imgs/logo-fcamara.png'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'http://localhost:3001'

export default () => {  
  const [groups, setGroups] = useState([]);
  const [searchField, setSearchField] = useState('');     
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axios(baseUrl).then(resp => {
          setGroups(resp.data);
      })
  },[])

  const handleChange = (e) => {
      const { value } = e.target;
      setSearchField(value)
      setSearch(value)
      return renderCards()
  };

  const handleClick = (e) => {
    const { name } = e.target;
    setSearch(name)
    return renderCards()
  };

  const handleFindPerson = () => {
    return navigate('/search-person')
  }

  const renderCards = () => {
    //if (search) {
      return groups.map((group) => 
        {
          if (group.subject.search(search) != -1){
            return <Card group={group}/>
          }         
        }
      )
    //}
  }

  return (
    <div className="app">
      <div className="home-container">
        <header className="header-container">
          <nav>
            <img src= {RobsonLogo} alt="" />
            <ul className="ul-item">
              <li onClick={handleFindPerson}>Encontre uma pessoa</li>
              <li className="selected-page">Grupo de estudos</li>
            </ul>
          </nav>
        </header>
        
        <div className="search-container">
          <div className="search-filter">
            <TagField tag={"DEV's"} onClick={handleClick}/>
            <TagField tag={"UX/UI Designers"} onClick={handleClick}/>
          </div>
          <div className="input-group">
            <div className="i-search">
            <i id="icon-search" class="fas fa-search"></i>
            </div>
            <input name="searchField" type="text" className="search-field" id="search-input"onChange={handleChange} value={searchField} placeholder="Pesquisar"/>
          </div>
          
        </div>

        {/* <div className="search-filter">
          <TagField tag={"UX / UI"} />
          <TagField tag={"DEV"} />
          <TagField tag={"PRODUTO"} />
        </div> */}
        <div>
          <h1>Grupos de estudo online</h1>
        </div>
        <div className="container-body">
          <div className="cards-container">
            
            {renderCards()}
          </div>

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
      </div>
    </div>
  )
}