import React, { useState, useEffect, useContext } from "react";
import Card from "../../CardPerson/CardPerson"
import TagField from "../../TagField/TagField"
import axios from 'axios'
import "./SearchPerson.css";
import { set } from "js-cookie";
import RobsonLogo from '../../../assets/svg/logo.svg'
import FcamaraLogo from '../../../assets/imgs/logo-fcamara.png'
import { useNavigate } from 'react-router-dom'
import StoreContext from 'components/Store/Context';

const baseUrl = 'http://localhost:3001/people';

const initialState = {
  dev: false,
  ux: false,
  ui: false,
  marketing: false,
  rh: false,
  profession: ''
}

export default () => {  
  const { activeUser } = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');     
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
      axios(baseUrl).then(resp => {
          setUsers(resp.data);
      })
  },[])

  const handleChange = (e) => {
      setValues(initialState);
      const { value } = e.target;
      setSearchField(value);
      setSearch(value.toLowerCase());
      return renderCards();
  };

  const handleChangeProfession = (e) => {
    const { name } = e.target;
    setValues({...initialState, [name]: true, profession: name.toLowerCase()})
    setSearchField('');
    return renderCards();
  };

  const handleFindGroup = () => {
    return navigate('/search-group');
  }

  const handleEditProfile = () => {
    return navigate('/edit-profile');
  }

  const renderCards = () => {
    let found = false;

    return users.map((user) => 
      {
        found = false;

        if (values.profession) {
          if (!found && (user.profession.toLowerCase().search(values.profession) != -1)){
            found = true;
            return <Card user={user}/>
          }
        } else {
          return user.skills.map((skill) => {
            if (!found && (user.name.toLowerCase().includes(search) || 
              activeUser._id != user._id && skill.toLowerCase().search(search) != -1)){
              found = true;
              return <Card user={user}/>
            }
          })
        }  
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
              <li onClick={handleEditProfile}>{`Olá, ${activeUser.name}!`}</li>
            </ul>
          </nav>
        </header>
        
        <div className="search-container">
          <div className="search-filter">
            <TagField name='dev' selected={values.dev} tag={"DEV"} onClick={(e) => handleChangeProfession(e)}/>
            <TagField name='ux' selected={values.ux} tag={"UX"} onClick={(e) => handleChangeProfession(e)}/>
            <TagField name='ui' selected={values.ui} tag={"UI"} onClick={(e) => handleChangeProfession(e)}/>
            <TagField name='marketing' selected={values.marketing} tag={"MARKETING"} onClick={(e) => handleChangeProfession(e)}/>
            <TagField name='rh' selected={values.rh} tag={"RH"} onClick={(e) => handleChangeProfession(e)}/>
          </div>
          <div className="input-group">
            <div className="i-search">
              <i id="icon-search" class="fas fa-search"></i>
            </div>
            <input name="searchField" type="text" className="search-field" id="search-input"onChange={handleChange} value={searchField} placeholder="Pesquisar por nome ou skill"/>
          </div>
          
        </div>

        <div>
          <h1>Nossos #SangueLaranja</h1>
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