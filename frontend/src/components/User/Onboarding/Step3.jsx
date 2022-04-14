import React from "react";
import ProfileFinal from '"../../assets/svg/profileFinal.svg'
import './Onboarding.css'

export default () => 
    < div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="card-body">
            <div>
                <img src={ProfileFinal} alt=""/>
            </div>
            <div className="card-body">
                <h1>Agora você faz parte da ROBSON!!</h1>
                <p>Aproveite para tirar suas dúvidas, compartilhar suas experiências e indicar o seu conteúdo de referência!</p>
                <p>Fazer networking agora ficou fácil.</p>    
            </div>
        </div>
    </div>
    
    