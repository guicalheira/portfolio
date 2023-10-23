import React from "react";
import "./projetos.css";
import MyMoneyMobile from "../img/MyMoney-Mobile.png";
import MyMoneyDesktop from "../img/MyMoney.png";

export default (props) => (
  <div className="flex-container">
    <div className="img-container">
      <div className="desktop">
        <img src={MyMoneyDesktop} alt="" className="img-desktop" />
      </div>
      <div className="cellphone">
        <img className="img-mobile" src={MyMoneyMobile} alt="" />
      </div>
    </div>
    <p className="project-text">
      Meu projeto gerenciador de finanças, este até então foi o projeto mais
      complexo que criei, nele utilizei tecnologias como React, MongoDB(ultilizado como banco de
      dados), Redux(ultilizado para gerenciamento de estado) e Bootstrap(ultilizado para estilização), como o nome diz é um
      gerenciador de finanças, nele você pode armazenar e gerenciar dados financeiros, como, seus débitos, seus créditos, 
      você também consegue organiza-los por data e nome. <br/> <strong>Código do projeto no Github:</strong> <a href="https://github.com/guicalheira/Ciclos-de-Pagamento">https://github.com/guicalheira/Ciclos-de-Pagamento</a>
    </p>
  </div>
);
