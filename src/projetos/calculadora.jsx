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
    <p>MUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTO</p>
   

  </div>
);
