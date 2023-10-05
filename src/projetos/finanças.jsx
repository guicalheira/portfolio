import React from "react";
import "./projetos.css";
import MyMoneyMobile from "../img/MyMoney-Mobile.png";
import MyMoneyDesktop from "../img/MyMoney.png"


export default props => (
  <div className="flex-container">
    <div className="img-container">
    <div className="desktop">
      <img src={MyMoneyDesktop} alt="" className="img-desktop" />
    </div>
      <div className="cellphone">
    <img className="img-mobile" src={MyMoneyMobile} alt="" />
    </div>
    </div>
    <p>MUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTO</p>
    

  </div>
);
