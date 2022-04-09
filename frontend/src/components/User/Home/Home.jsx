import React, { useState, useEffect } from "react";
import Card from "../../Card/Card"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./Home.css";
import { set } from "js-cookie";

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
    if (search != '') {
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
        <div className="header-container">
          <div className="profile-image"></div>
          <div className="label-header"></div>
          <div className="label-header"></div>
          <div className="label-header"></div>
          <div className="profile-image"></div>
        </div>
        
        <div className="search-container">
          <input name="searchField" type="text" className="search-field" onChange={handleChange} value={searchField} placeholder="Pesquisar"/>
          <div className="search-filter">
            <TagField tag={"java"} onClick={handleClick}/>
            <TagField tag={"react"} onClick={handleClick}/>
            <TagField tag={"Pessoas"} onClick={handleClick}/>
            <TagField tag={"mongodb"} onClick={handleClick}/>
          </div>
        </div>

        <div className="search-filter">
          <TagField tag={"UX / UI"} />
          <TagField tag={"DEV"} />
          <TagField tag={"PRODUTO"} />
        </div>

        <div className="cards-container">
          {renderCards()}
        </div>
      </div>
    </div>
  )
}

