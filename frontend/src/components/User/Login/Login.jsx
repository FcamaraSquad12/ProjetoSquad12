import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import ImgMain from '../../../assets/svg/img-login.svg'
import RobsonLogo from '../../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';
import Alert from '../../Alert/Alert'
import './Login.css';

const baseUrl = 'http://localhost:3001/people';

function initialState() {
  return {email: '', password: ''};
}

const initialMsg = {
  type:'',
  header: '',
  msg: '',
  show: false
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const {setToken, activeUser, setActiveUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [msg, setStatusMsg] = useState(initialMsg);
  
  useEffect(() => {
    axios(baseUrl).then(resp => {
        setUsers(resp.data);
    })

    setToken('');
    //setStatusMsg({show: false});
  },[])

  useEffect(() => {
    setTimeout(() => {setStatusMsg(false)}, 7000);
  },[msg])
  
  function login({ email, password }) {
    let loginSucess = false;

    users.map((user) => {
        if (email === user.email && password.toString() === user.password) {
          loginSucess = true;
          setActiveUser(user);
        }
    });

    if (loginSucess)
    {
      return { token: activeUser._id };
    } else {
      const msg = {
        type:'error',
        msg: '❌ Usuário ou senha inválida',
        show: true
      }

      setStatusMsg(msg)
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

    const { token } = login(values);
    if (token) {
      setToken(activeUser._id)
      return navigate('/search-person');
    }
    
    setValues(initialState);
  }

  return (
    <div className="container">
      <div className="logo-container scale-up-center">
        <img id="Robson-logo" src= {RobsonLogo} alt="" />
        <h3>Uma rede de conexão para criar</h3>
        <h3>Vínculos e conquistar objetivos juntos</h3>
        <img className='img-login' src={ImgMain} alt="" />
      </div>
      <div className="login-content scale-up-center">
        <label className="login-title">Acessar Conta</label>
        <form className='form' autoComplete="" onSubmit={onSubmit}>
          <div className="form-login">
            <label htmlFor="email"><b>E-mail <span className='asterisco'> *</span></b></label>
            <input id="email" type="text" name="email" autoComplete="off" onChange={handleChange} value={values.email} placeholder="Digite seu e-mail"/>
          </div>
          <div className="form-login">
            <label htmlFor="password"><b>Senha <span className='asterisco'> *</span></b></label>
            <input id="password" type="password" name="password" onChange={handleChange} value={values.password} placeholder="Digite sua senha"/>
          </div>
          <div className='forgot'>
            <a id="forgot" href="./">Esqueci a senha</a>
          </div>

          <UIButton
            type="submit"
            theme=""
            className="btn-login"
            rounded
          >
            Entrar
          </UIButton>
          <p  >Não é cadastrado? <Link id="onboarding" to="/onboarding">Cadastre-se</Link></p>
        </form>
        <Alert type={msg.type} header={msg.header} msg={msg.msg} show={msg.show}/>
      </div>
    </div>
  );
};

export default UserLogin;
