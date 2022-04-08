import React, { useContext } from 'react';
import './Home.css';
import StoreContext from '../../components/Store/Context';
import { useHistory } from 'react-router-dom'

const PagesHome = () => {  
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const handleSearch = () =>{
    return history.push('/search')
  }

  return(
    <div className="pages-home">
      <p>Você acessou o menu principal da aplicação!</p>
      <button onClick={ () => {setToken('')}}>Sair</button>
      <button onClick={handleSearch}>buscar mentores</button>
    </div>
  )
};

export default PagesHome;
