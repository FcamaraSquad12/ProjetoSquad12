import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import ImgMain from '../../../assets/svg/img-login.svg'
import RobsonLogo from './Group7.svg'

import './Login.css';

const baseUrl = 'http://localhost:3001/'

function initialState() {
  return {email: '', password: ''};
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
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
      return history.push('/home')
    }

    setValues(initialState);
  }

  return (
    <div className="container">
      <div className="logo-container">
        <img id="Robson-logo" src= {RobsonLogo} alt="" />
        <h2>Uma rede de conexão para criar</h2>
        <h2>vínculos e conquistar objetivos juntos</h2>
        <img src={ImgMain} alt="" />
      </div>
      <div className="login-content scale-up-center">
        <label className="login-title">Acessar Conta</label>
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
          //<label htmlFor="" style={{visibility: statusMsg, fontSize: '0.8rem', color: 'red'}}>Usuário ou senha inválida</label>
          }

          <UIButton
            type="submit"
            theme=""
            className="btn-login"
            rounded
          >
            Entrar
          </UIButton>
          <p  >Não é cadastrado? <a id="sing-up" href="./">Cadastre-se</a></p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
