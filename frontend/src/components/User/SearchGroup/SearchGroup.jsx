import React, { useState, useEffect, useContext } from "react";
import Card from "../../CardGroup/CardGroup"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./SearchGroup.css";
import { set } from "js-cookie";
import RobsonLogo from '../../../assets/svg/logo.svg'
import { useNavigate } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import Footer from '../../Footer/Footer';

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
      setSearchField(value);
      setSearch(value.toLowerCase());
      return renderCards()
  };

  const handleFindPerson = () => {
    return navigate('/search-person');
  }

  const handleEditProfile = () => {
    return navigate('/edit-profile');
  }

  const renderCards = () => {
    return groups.map((group) => 
    {
      let found = false;

      if (!found && (group.subject.toLowerCase().search(search) != -1 ||
                     group.title.toLowerCase().search(search) != -1)){
        found = true;
        return <Card group={group}/>  
      }
    })
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
          <Footer/>
        </div>
      </div>
    </div>
  )
}