import React from "react";
import "./CardGroup.css";

export default () => {
  const group = {
    title: 'Criptos para jogar açai',
    date: '27/04/2022',
    time: '19:00/20:00',
    subject: 'Cripto moedas',
    link: '/aqui-seria-o-grupo'
  }

  return (
    <div className="card fade-in-fwd">
      <div className="card-body">
        <div>
          <h2 className="card-title">{group.title}</h2>
          <h4 className="card-date">{group.date}</h4>
          <h4 className="card-time">{group.time}</h4>
          <h4 className="card-subject">{group.subject}</h4>
        </div>
        
        <a href={group.link} target='_blank'>Juntar-se</a>
      </div>
    </div>
  )
}
