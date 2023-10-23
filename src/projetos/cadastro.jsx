import React from "react";
import "./projetos.css";
import Cadastro from "../img/Cadastro.png";

export default (props) => (
  <div className="flex-container">
    <div className="desktop">
      <img className="img-desktop" src={Cadastro} alt="" />
    </div>
    <p className="project-text">
      Este é um projeto de cadastro simples , em que utilizei de React,
      JavaScript, Html, TypeScript, Css para sua construção também utilizei
      integração no firebase como banco de dados. <br/> <strong>Código do projeto no Github:</strong> <a href="https://github.com/guicalheira/Projeto-Cadastro">https://github.com/guicalheira/Projeto-Cadastro</a>
    </p>
  </div>
);
