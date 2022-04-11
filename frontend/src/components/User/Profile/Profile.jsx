import React from "react"
import "./Profile.css"

export default () => {
    const user = {
        name: "Miguel Fialho",
        profession: "Traine",
        description: "Oi, Eu sou o Miguel!",
        skills: ["react", "javascript"],
        whatsApp: "1234654564",
        linkedin: "/",
        medium: "/",
        portfolio: "/"
    }

    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.profession}</h2>
                    <h3>{user.description}</h3>
                    <button>Agendar</button>

                </div>
            </div>

            <div>
                {   
                    (skills) => {
                        return skills.map((skill) => <span>#{skill}</span>) 
                    }
                }
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                    <h2>Acesse meu portifólio</h2>
                    <h3>Portifólio</h3>
                </div>

                <div>
                    <img src="" alt="" />
                    <h2>Acesse meu Linkedin</h2>
                    <h3>Linkedin</h3>
                </div>

                <div>
                    <img src="" alt="" />
                    <h2>Acesse meus arquivos</h2>
                    <h3>Google Drive</h3>
                </div>

            </div>
        </div>
    )
}