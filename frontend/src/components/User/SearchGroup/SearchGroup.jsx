import React, { useState, useEffect, useContext } from "react";
import Card from "../../CardGroup/CardGroup"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./SearchGroup.css";
import { set } from "js-cookie";
import RobsonLogo from '../../../assets/svg/logo.svg'
import FcamaraLogo from '../../../assets/imgs/logo-fcamara.png'
import { useNavigate } from 'react-router-dom'
import StoreContext from 'components/Store/Context';

const baseUrl = 'http://localhost:3001'

export default () => {  
  const { activeUser } = useContext(StoreContext);
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
      setSearch(value.toLowerCase())
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

  const handleEditProfile = () => {
    return navigate('/edit-profile');
  }

  const renderCards = () => {
    //if (search) {
      return groups.map((group) => 
        {
          if (group.subject.toLowerCase().search(search) != -1){
            return <Card group={group}/>
          }         
        }
      )
    //}
  }

  const myName = () => {
    const myName = activeUser.name.split(' ');
    const firstLetter = myName[0][0].toUpperCase();
    return `${firstLetter}${myName[0].substring(1, myName[0].length)}`
  }

  return (
    <div className="app">
      <div className="home-container">
        <header className="header-container">
          <nav>
            <img onClick={handleFindPerson} src= {RobsonLogo} alt="" />
            <ul className="ul-item">
              <li onClick={handleFindPerson}>Encontre uma pessoa</li>
              <li className="selected-page">Grupo de estudos</li>
              <li onClick={handleEditProfile}>{`Olá, ${myName()}!`}</li>
            </ul>
          </nav>
        </header>
        
        <div className="search-container">
          <div className="search-filter">
            <TagField tag={"DEV's"} onClick={handleClick}/>
            <TagField tag={"UX/UI"} onClick={handleClick}/>
          </div>
          <div className="input-group">
            <div className="i-search">
              <i id="icon-search" class="fas fa-search"></i>
            </div>
            <input name="searchField" type="text" className="search-field" id="search-input"onChange={handleChange} value={searchField} placeholder="Pesquisar"/>
          </div>
          
        </div>

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