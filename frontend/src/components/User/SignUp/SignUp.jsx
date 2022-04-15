import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StoreContext from "components/Store/Context";
import UIButton from "components/UI/Button/Button";
import ImgMain from "../../../assets/svg/img-signup.svg";
import RobsonLogo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

import "./SignUp.css";

const baseUrl = "http://localhost:3001/";

function initialState() {
  return {
    // name: "",
    // profession: "",
    // email: "",
    // password: "",
    // confirmPassword: "",
    // portfolio: "",
    // whatsapp: "",
    // linkedin: "",
    // drive: "",
    // skills:[],
    // skillField: ""
    
      name: 'Teste',
      profession: 'Teste',
      email: 'teste@teste.com',
      password: 'Teste',
      confirmPassword: 'Teste',
      portfolio: 'Teste',
      whatsapp: 'Teste',
      linkedin: 'Teste',
      drive: 'Teste',
      skills: ['java', 'react'],
      skillField: 'react, java'
  };
}

const UserSignUp = () => {
  const [values, setValues] = useState(initialState);
  const { token, setToken, setActiveUser } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    setToken("");
  }, []);

  const save = () => {
    const user = values
    console.log(user)
    const method = user._id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

    axios[method](url, user)
      .then(resp => {
          setActiveUser({
            name: values.name,
            profession: values.profession,
            email: values.email,
            password: values.password,
            portfolio: values.portfolio,
            whatsapp: values.whatsapp,
            linkedin: values.linkedin,
            drive: values.drive,
            skills: values.skillField.split(' ')
          })
          console.log(resp.data);
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
    console.log(token);
    save(values);
    if (token) return navigate('/search-person');
  }

  return (
    <div className="signup-container">
      <div className="signup-content scale-up-center">
        <label className="signup-title">Criar Conta</label>
        <form className="signup-form" autoComplete="" onSubmit={onSubmit}>
          <div className="signup-form-control">
            <label htmlFor="name">
              <b>Nome Completo</b>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              value={values.name}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="email">
              <b>Endereço de E-mail</b>
            </label>
            <input
              id="email"
              type="text"
              name="email"
              autoComplete="off"
              onChange={handleChange}
              value={values.email}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="password">
              <b>Senha</b>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="confirm-password">
              <b>Confirmar Senha</b>
            </label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              value={values.confirmPassword}
              placeholder="Confirmar senha"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="whatsapp">
              <b>Whatsapp</b>
            </label>
            <input
              id="whatsapp"
              type="text"
              name="whatsapp"
              onChange={handleChange}
              value={values.whatsapp}
              placeholder="Inserir número"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="drive">
              <b>Cargo</b>
            </label>
            <input
              id="drive"
              type="text"
              name="profession"
              onChange={handleChange}
              value={values.profession}
              placeholder="Cargo"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="skills">
              <b>Adicione suas skills</b>
            </label>
            <input
              id="skillField"
              type="text"
              name="skillField"
              onChange={handleChange}
              value={values.skillField}
              placeholder="Skills"
            />
          </div>

          <div className="signup-form-control">
            <label htmlFor="portfolio">
              <b>Portifólio</b>
            </label>
            <input
              id="portfolio"
              type="text"
              name="portfolio"
              onChange={handleChange}
              value={values.portfolio}
              placeholder="Portifólio"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="drive">
              <b>Drive</b>
            </label>
            <input
              id="drive"
              type="text"
              name="drive"
              onChange={handleChange}
              value={values.drive}
              placeholder="Drive"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="LinkedIn">
              <b>LinkedIn</b>
            </label>
            <input
              id="linkedIn"
              type="text"
              name="linkedin"
              onChange={handleChange}
              value={values.linkedin}
              placeholder="LinkedIn"
            />
          </div>

          <UIButton type="submit" theme="" className="btn-login" rounded>
            Entrar
          </UIButton>

          {
            !values._id ? 
            <p>
              Já tem cadastro?{" "}
              <Link id="Sign-up" to="/login">
                Entre
              </Link>
            </p>
            : {}
          }
        </form>
      </div>
      <div className="signup-logo-container scale-up-center">
        <img id="Signup-Robson-logo" src={RobsonLogo} alt="" />
        <h2>Você está há alguns passos de mudar</h2>
        <h2>totalmente seu networking!</h2>
        <img id="signup-img" src={ImgMain} alt="" />
      </div>
    </div>
  );
};

export default UserSignUp;
