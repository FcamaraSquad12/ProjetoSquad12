import React from 'react';
import './Card.css'

export default ({user}) => 
    <div className="card">
        <div className="card-img"></div>
        <h1>{user.name}</h1>
        <div>
            {
                user.skills.map((skill) => 
                    <p>{skill}</p>
                )
            }
            <button>Conectar</button>
        </div>
    </div>
