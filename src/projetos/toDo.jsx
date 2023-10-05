import React from "react";
import "./projetos.css"
import ToDoDesktop from "../img/ToDo.png"
import ToDoMobile from "../img/ToDo-Mobile.png"



export default props=>(
    <div className="flex-container">
       <div className="img-container">
       <div className="desktop">
        <img className="img-desktop" src={ToDoDesktop} alt="" />
       </div>
       <div className="cellphone">
        <img className="img-mobile" src={ToDoMobile} alt="" />
       </div>
       </div>
      

       <p>MUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTOMUITOTEXTO</p>
    </div>

)