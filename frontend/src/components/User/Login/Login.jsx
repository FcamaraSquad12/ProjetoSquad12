import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import ImgMain from '../../../assets/svg/img-login.svg'
import RobsonLogo from '../../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';

import './Login.css';

const baseUrl = 'http://localhost:3001/people'

function initialState() {
  return {email: '', password: ''};
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [statusMsg, setStatusMsg] = useState(false);

  useEffect(() => {
    axios(baseUrl).then(resp => {
        setUsers(resp.data);
    })

    setToken('');
    setStatusMsg("hidden");
  },[])
  
  function login({ email, password }) {
    let loginSucess = false;

    
    users.map((user) => {
        if (email === user.email && password.toString() === user.password) return loginSucess = true;
    });

    if (loginSucess)
    {
      console.log("acessou!!!")
      setStatusMsg('Hidden')
      return { token: '1234' } 
    } else {
      setStatusMsg('visible')
    }
  
    return { error: 'Usuário ou senha inválida'}
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault();

    const { token } = login(values)

    if (token) {
      setToken(token);
      return navigate('/search-person')
    }

    setValues(initialState);
  }

  return (
    <div className="container">
      <div className="logo-container scale-up-center">
        <img id="Robson-logo" src= {RobsonLogo} alt="" />
        <h2>Uma rede de conexão para criar</h2>
        <h2>vínculos e conquistar objetivos juntos</h2>
        <img src={ImgMain} alt="" />
      </div>
      <div className="login-content scale-up-center">
        <label className="login-title">Acessar Conta</label>
        <label htmlFor="" style={{visibility: statusMsg, fontSize: '0.8rem', color: 'red'}}>Usuário ou senha inválida!</label>

        <form className='form' autoComplete="" onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="email"><b>E-mail</b></label>
            <input id="email" type="text" name="email" autoComplete="off" onChange={handleChange} value={values.email} placeholder="Digite seu e-mail"/>
          </div>
          <div className="form-control">
            <label htmlFor="password"><b>Senha</b></label>
            <input id="password" type="password" name="password" onChange={handleChange} value={values.password} placeholder="Digite sua senha"/>
            <a id="forgot" href="./">Esqueci a senha</a>
          </div>
          {
          // Msg de usuário ou senha inválida removida
          }

          <UIButton
            type="submit"
            theme=""
            className="btn-login"
            rounded
          >
            Entrar
          </UIButton>
          <p  >Não é cadastrado? <Link id="Sign-up" to="/signup">Cadastre-se</Link></p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
