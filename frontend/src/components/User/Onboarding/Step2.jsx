import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StoreContext from "components/Store/Context";
import UIButton from "components/UI/Button/Button";
import ImgMain from "../../../assets/svg/img-signup.svg";
import RobsonLogo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import './Onboarding.css'

const baseUrl = "http://localhost:3001/";

function initialState() {
  return {
    name: "",
    profession: "",
    email: "",
    password: "",
    confirmPassword: "",
    calendly: "",
    whatsapp: "",
    portfolio: "",
    linkedin: "",
    drive: "",
    skills:[],
    skillField: ""
  };
}

export default () => {
  const [values, setValues] = useState(initialState);
  const { token, setToken, setActiveUser } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    setToken("");
  }, []);

  const save = () => {
    const user = {
      name: values.name,
      profession: values.profession,
      email: values.email,
      password: values.password,
      calendly: values.calendly,
      whatsapp: values.whatsapp,
      portfolio: values.portfolio,
      linkedin: values.linkedin,
      drive: values.drive,
      skills: values.skillField.split(' ')
    }

    const method = user._id ? 'put' : 'post';
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    axios[method](url, user)
      .then(resp => {
          setToken(user._id);
          setActiveUser(user);
        }
      )
  } 

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    save(values);
    if (token) return navigate('/search-person');
  }
 
  return (
    <div className="scale-up-center">
      <form className="signup-container" autoComplete="" onSubmit={onSubmit}>
        <div className="list-form">
          <div>
            <img id="Robson-logo" className="robson-logo" src= {RobsonLogo} alt="" />
            <div className="signup-content d-pessoais  signup-form-control">
            
              <label className="signup-title">Dados Pessoais</label>
            
              <label><b>Nome Completo</b></label>
              <input id="name" type="text" name="name" autoComplete="off" onChange={handleChange} value={values.name} placeholder="Digite seu nome"/>
            
              <label><b>Endereço de e-mail</b></label>
              <input id="email" type="text" name="email" autoComplete="off" onChange={handleChange} value={values.email} placeholder="Digite seu e-mail"/>
            
              <label><b>Senha</b></label>
              <input id="password" type="text" name="password" autoComplete="off" onChange={handleChange} value={values.password} placeholder="Digite sua senha"/>
              <label><b>Confirme a senha</b></label>
              <input id="confirmPassword" type="text" name="confirmPassword" autoComplete="off" onChange={handleChange} value={values.confirmPassword} placeholder="Confirmar senha"/>
            
              <label><b>Whatsapp</b></label>
              <input id="whatsapp" type="text" name="whatsapp" autoComplete="off" onChange={handleChange} value={values.whatsapp} placeholder="[xx] xxxxx-xxxx"/>
            </div>
            
          </div>
          <div className="signup-content  signup-form-control">
            <label className="signup-title">Dados Profissionais</label>

            <label><b>Qual o seu cargo?</b></label>
            <input id="profession" type="text" name="profession" onChange={handleChange} value={values.profession} placeholder="Dev Trainee Ux/Ui Pleno"/>
            
            <label><b>Quais suas principais skills?</b></label>
            <input id="skillField" type="text" name="skillField" onChange={handleChange} value={values.skillField} placeholder="Skills"/>

            <label><b>Qual o seu portifólio?</b></label>
            <input id="portfolio" type="text" name="portfolio"  onChange={handleChange}  value={values.portfolio}  placeholder="Portifólio"/>

            <label><b>calendly</b></label>
            <input id="calendly" type="text" name="calendly" onChange={handleChange} value={values.calendly} placeholder="Calendly"/>
            
            <label><b>Drive</b></label>
            <input id="drive" type="text" name="drive" onChange={handleChange} value={values.drive} placeholder="Drive"/>

            <label><b>LinkedIn</b></label>
            <input id="linkedin" type="text" name="linkedin" onChange={handleChange} value={values.linkedin} placeholder="LinkedIn"/>
          </div>
          
          <div>
            <UIButton type="submit" theme="" className="btn-submit" rounded><i class="fa-solid fa-arrow-right-long"></i></UIButton>
          </div>
        </div>
      </form>    
  </div>
  );
};
