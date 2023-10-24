import React from "react";
import "./projetos.css";
import CalculadoraDesktop from "../img/calculadora.png";
import CalculadoraMobile from "../img/calculadora-mobile.png";

export default (props) => (
  <div className="flex-container">
    <div className="img-container">
      <div className="desktop">
        <img className="img-desktop" src={CalculadoraDesktop} alt="" />
      </div>
      <div className="cellphone">
        <img className="img-mobile" src={CalculadoraMobile} alt="" />
      </div>
    </div>
    <span className="project-text">
      Esse foi o meu primeiro projeto que criei como programador web, uma calculadora
      feita em React ultilizando também da linguagens de marcação Html e da linguagem de estilização Css, ela realiza
      as quatro operações matemáticas básicas: Multiplicação,Subtração,Divisão e Soma. <br /> <strong>Código do projeto no Github:</strong> <a href="https://github.com/guicalheira/CalculadoraReact">https://github.com/guicalheira/CalculadoraReact</a>
    </span>
  </div>
);
