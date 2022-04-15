import React from "react";
import Medium from '../../assets/svg/mediumPic.svg';
import Github from '../../assets/svg/gitHubPic.svg'
import Linkedin from '../../assets/svg/linkedinPic.svg';
import Drive from '../../assets/svg/drivePic.svg';
import './CardPortfolio.css'

export default ({link}) => {
    let portfolioImg = '';
    let title ='';
    let portfolio ='';

    
if (link.toLowerCase().includes('medium')){
        portfolioImg = Medium;
        title = "Acesse meu Linkedin";
        portfolio = "Medium";
    } else if (link.toLowerCase().includes('github')) {
        portfolioImg = Github;
        title = "Acesse meu GitHub";
        portfolio = "GitHub";
    } else if (link.toLowerCase().includes('linkedin')) {
        portfolioImg = Linkedin;
        title = "Acesse meu Linkedin";
        portfolio = "Linkedin";
    } else {
        portfolioImg = Drive;
        title = "Acesse meu Drive";
        portfolio = "Google Drive";
    }

return <a src={link} href={link} target="_blank">
            <img src={portfolioImg} alt="" />
            <h2>{title}</h2>
            <p>{portfolio}</p>
        </a>
}