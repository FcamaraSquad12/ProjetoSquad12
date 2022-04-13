import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StoreContext from "components/Store/Context";
import UIButton from "components/UI/Button/Button";
import ImgMain from "../../../assets/svg/img-signup.svg";
import RobsonLogo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";


const baseUrl = "http://localhost:3001/";

function initialState() {
  return {
    name: "",
    profession: "",
    email: "",
    password: "",
    confirmPassword: "",
    portfolio: "",
    whatsapp: "",
    linkedin: "",
    drive: "",
    skills:[],
    skillField: ""
  };
}

const UserOnboarding = () => {
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
        <label className="signup-title">Dados Pessoais</label>
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
              placeholder="(xx) xxxxx-xxxx"
            />
          </div>
        </form>
      </div>

      {/* -------------------------------------------------------------------------------------------- */}

      <div className="signup-content scale-up-center">
        <label className="signup-title">Dados Profissionais</label>
        <form className="signup-form" autoComplete="" onSubmit={onSubmit}>
          <div className="signup-form-control">
            <label htmlFor="profession">
              <b>Qual o seu cargo?</b>
            </label>
            <input
              id="profession"
              type="text"
              name="profession"
              onChange={handleChange}
              value={values.profession}
              placeholder="Dev Trainee Ux/Ui Pleno"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="skills">
              <b>Quais suas principais skills?</b>
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
              <b>Qual o seu portifólio?</b>
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
        </form>
      </div>
      
    </div>
  );
};

export default UserOnboarding;
