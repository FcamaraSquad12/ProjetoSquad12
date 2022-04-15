import React from "react";
import TeamPic from '"../../assets/svg/teampic.svg'
import './Onboarding.css'

export default () =>         
    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div className="card-body" id="card-img">
            <div>
                <img src={TeamPic} alt=""/>
            </div>
            <div className="text-card">
                <h2>Olá <span>Sangue Laranja</span>, que bom ter você aqui!</h2>
                <p>Você está prestes a se conectar à <span>ROBSON</span>: Rede Otimizada de Busca e Solução “Orange Networking”</p>
                <ul>
                    <li>Pessoas da FCamara com diversas skills prontas pra te ajudar ou precisando de sua ajuda.</li>
                    <li>Grupos de estudos (crowdlearning) para compartilhar suas experiências e aprender coletivamente.</li>
                    <li>Materiais indicados pelos usuários da ROBSON.
                    </li>
                </ul>
            </div>
        </div>
    </div>