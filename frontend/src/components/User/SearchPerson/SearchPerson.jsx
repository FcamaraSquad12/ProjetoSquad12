import React, { useState, useEffect, useContext } from "react";
import Card from "../../CardPerson/CardPerson"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./SearchPerson.css";
import { set } from "js-cookie";
import RobsonLogo from '../../../assets/svg/logo.svg'
import { useNavigate } from 'react-router-dom'
import StoreContext from 'components/Store/Context';

const baseUrl = 'http://localhost:3001/people';

export default () => {  
  const { activeUser } = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');     
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axios(baseUrl).then(resp => {
          setUsers(resp.data);
      })
  },[])

  const handleChange = (e) => {
      const { value } = e.target;
      setSearchField(value);
      setSearch(value);
      return renderCards();
  };

  const handleClick = (e) => {
    const { name } = e.target;
    setSearch(name);
    return renderCards();
  };

  const handleFindGroup = () => {
    return navigate('/search-group');
  }

  const renderCards = () => {
    let found = false;

    return users.map((user) => 
      {
        found = false;

        return user.skills.map((skill) => {
          if (!found && activeUser._id != user._id && skill.search(search) != -1){
            found = true;
            return <Card user={user}/>
          }
        })          
      }
    )
  }

  return (
    <div className="app">
      <div className="home-container">
        <header className="header-container">
          <nav>
            <img src= {RobsonLogo} alt="" />
            <ul className="ul-item">
              <li className="selected-page">Encontre uma pessoa</li>
              <li onClick={handleFindGroup}>Grupo de estudos</li>
              <li>{`Olá, ${activeUser.name}!`}</li>
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
          <h1>Nossos #DEV's</h1>
        </div>
        <div className="cards-container">
          {renderCards()}
        </div>
      </div>
    </div>
  )
}