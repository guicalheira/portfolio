import React from "react";
import "./projetos.css"
import ToDoDesktop from "../img/ToDo.png"
import ToDoMobile from "../img/ToDo-Mobile.png"
import Desktop from "../img/desktop.png"


export default props=>(
    <div className="flex-container">
       
       <div className="desktop">
        <img className="img-desktop" src={ToDoDesktop} alt="" />
       </div>
       <div className="cellphone">

        <img className="img-mobile" src={ToDoMobile} alt="" />
       </div>
    </div>
)