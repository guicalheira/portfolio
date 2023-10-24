import React from "react";
import "../style/aboutMe.css";
import Curriculo from "../img/CurriculoPdf.pdf";

export default (props) => (
  <div className="aboutMe-container">
    <h2>Sobre Mim</h2>

    <span className="experiencia-text">
      Sou um programador focado em aplicativos da web e sites responsivos,
      apaixonado pelo mundo da programação . Minha jornada me levou a enfrentar
      desafios empolgantes que aprimoraram minhas habilidades tanto no front-end
      quanto no back-end, permitindo-me criar soluções inovadoras e altamente
      funcionais. Além do mundo da programação, sou apaixonado por esportes,
      fascinado pela astronomia e obcecado por tecnologias de vanguarda. Não
      posso negar que, quando não estou programando, você me encontrará imerso
      em video games, explorando mundos virtuais e buscando novas histórias. 
    <br />
     <br />
    <a className="curriculo" href={Curriculo}>
      Currículo
    </a>
    
    </span>
 
   
    
  </div>
);
