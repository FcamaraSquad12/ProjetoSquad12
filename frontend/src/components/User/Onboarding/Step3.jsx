import React from "react";
import ProfileFinal from '"../../assets/svg/profileFinal.svg'
import './Onboarding.css'

export default () => 
    < div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        hgghhgdhdfdhfd
        <div className="logo">
            <img src={ProfileFinal} alt=""/>
        </div>
        <div className="card-body">
            <h1>Agora você faz parte da ROBSON!!</h1>
            <p>Aproveite para tirar suas dúvidas, compartilhar suas experiências e indicar o seu conteúdo de referência!</p>
            <p>Fazer networking agora ficou fácil.</p> 
            <div className="btn-card-1">
                <button type="button" className="btn-1">Acessar Home Page<i className="fa-solid fa-arrow-right-long"></i></button>
            </div>   
        </div>
    </div>
    
    