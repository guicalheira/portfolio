// DropdownMenu.js
import React from "react";

import "./menu.css";

export default function Menu() {
  
  return (
  

    <div className="menu" >
     <div className="left-content">
     <span>
      GuiCalheira_dev
     </span>
     </div>
     
   <div className="right-content">
   <button><a href="/">Inicio</a></button>
    <button><a href="/aboutMe">Sobre mim</a></button>
    <button><a href="/projects">Projetos</a></button>
    <button><a href="/contact">Contato</a></button>
   </div>
    </div>
    
  );
}
