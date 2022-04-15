import React, { useState, useContext, useEffect } from 'react';
import './EditProfile.css';
import RobsonLogo from '../../../assets/svg/logo.svg';
import ProfilePic from '../../../assets/svg/image2.svg';
import Outdoor from '../../../assets/svg/profilePic.svg';
// import Medium from '../../../assets/svg/mediumPic.svg';
// import Linkedin from '../../../assets/svg/linkedin.svg';
// import Drive from '../../../assets/svg/drivePic.svg';
import { useNavigate } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from "components/UI/Button/Button";
import axios from "axios";
import FcamaraLogo from '../../../assets/imgs/logo-fcamara.png';
import Alert from '../../Alert/Alert'
import { set } from 'js-cookie';

const initialMsg = {
  type:'',
  header: '',
  msg: '',
  show: false
}

const baseUrl = "http://localhost:3001";

export default () => {
  const { activeUser, setActiveUser } = useContext(StoreContext);
  const [values, setValues] = useState(activeUser);
  const [skillField, setSkillField] = useState(values.skills.join(' '));
  const navigate = useNavigate();  
  const [msg, setStatusMsg] = useState(initialMsg);

  useEffect(() => {
    setTimeout(() => {setStatusMsg(false)}, 7000);
  },[msg])

  const handleFindGroup = () => {
    return navigate('/search-group')
  }

  const handleFindPerson = () => {
    return navigate('/search-person')
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleChangeSkillField(e) {
    const {value } = e.target;

    setSkillField(value);
  }

  const update = () => {
    const user = {...values, skills: skillField.split(' ')};
    const url = `${baseUrl}/${values._id}`;

    axios['patch'](url, user)
      .then(resp => {
          setActiveUser(user);
          
          const msg = {
            type:'success',
            header: 'Salvo com sucesso',
            msg: 'Suas informações já estão salvas',
            show: true
          }
    
          setStatusMsg(msg);
        }
      )
  }

  function onSubmit(e) {
    alert('tudo ok!!')
    e.preventDefault();
    update();
  }

  return (
    <div className="profile-page-container">
      <form className="" autoComplete="" onSubmit={onSubmit}>

        <header className="header-container">
          <nav>
            <img onClick={handleFindPerson} src={RobsonLogo} alt="" />
            <ul className="ul-item">
                <li onClick={handleFindPerson}>Encontre uma pessoa</li>
                <li onClick={handleFindGroup}>Grupo de estudos</li>
            </ul>
          </nav>
        </header>

        <div className="outdoor">
          <img className ="outdoor-img" src={Outdoor} alt="" />
        </div>
        
        <div className="profile-container">
          <div className="profile-image-container">
            <img src={ProfilePic} alt="" />
          </div>

          <div className="profile-infos">
            <h1>{activeUser.name}</h1>
            <h2>{activeUser.profession}</h2>
          
            <div className="contato">
                <label><b>Descrição</b></label>
                <textarea id="description" multiline rows ="5" cols="20" type="text" name="description" onChange={handleChange} value={values.description} placeholder="Descrição"/>
                
                <label><b>Skills</b></label>
                <input id="skills" type="text" name="skills" onChange={handleChangeSkillField} value={skillField} placeholder="Skills"/>

                <label><b>Calendly</b></label>
                <input id="calendly" type="text" name="calendly" onChange={handleChange} value={values.calendly} placeholder="Calendly"/>

                <label><b>Whatsapp</b></label>
                <input id="whatsapp" type="text" name="whatsapp" onChange={handleChange} value={values.whatsapp} placeholder="Whatsapp"/>
                <label><b>Portifólio</b></label>
                <input id="portfolio" type="text" name="portfolio"  onChange={handleChange}  value={values.portfolio}  placeholder="Portifólio"/>
          
                <label><b>LinkedIn</b></label>
                <input id="linkedin" type="text" name="linkedin" onChange={handleChange} value={values.linkedin} placeholder="LinkedIn"/>

                <label><b>Drive</b></label>
                <input id="drive" type="text" name="drive" onChange={handleChange} value={values.drive} placeholder="Drive"/>
            </div>
          </div>
        </div>

        <div className='btn-edit'>
          <UIButton type="submit" theme="" className="edit-btn-submit" rounded>{'SALVAR'}</UIButton>
        </div>
      </form>
      <Alert type={msg.type} header={msg.header} msg={msg.msg} show={msg.show}/>
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
  );
};

