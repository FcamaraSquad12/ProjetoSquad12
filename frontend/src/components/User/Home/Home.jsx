import React, { useState, useEffect } from "react";
import Card from "../../Card/Card"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./Home.css";
import { set } from "js-cookie";
import RobsonLogo from './Group7.svg'

const baseUrl = 'http://localhost:3001/'

export default () => {  
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');     
  const [search, setSearch] = useState([]);

  useEffect(() => {
      axios(baseUrl).then(resp => {
          setUsers(resp.data);
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

  const renderCards = () => {
    if (search) {
      return users.map((user) => 
        {
          return user.skills.map((skill) => {
            if (skill.search(search) != -1){
              return <Card user={user}/>
            }
          })          
        }
      )
    }
  }

  return (
    <div className="app">
      <div className="home-container">
        <header className="header-container">
          <nav>
            <img src= {RobsonLogo} alt="" />
            <ul>
              <li>Encontre uma pessoa</li>
              <li>Grupo de estudos</li>
            </ul>
          </nav>
        </header>
        
        <div className="search-container">
        <div className="search-filter">
            <TagField tag={"react"} onClick={handleClick}/>
            <TagField tag={"java"} onClick={handleClick}/>
          </div>
          <input name="searchField" type="text" className="search-field" onChange={handleChange} value={searchField} placeholder="Pesquisar"/>
          
        </div>

        {/* <div className="search-filter">
          <TagField tag={"UX / UI"} />
          <TagField tag={"DEV"} />
          <TagField tag={"PRODUTO"} />
        </div> */}
        <div>
          <h1>Nossos #SangueLaranjas</h1>
        </div>
        <div className="cards-container">
          
          {renderCards()}
        </div>
      </div>
    </div>
  )
}

