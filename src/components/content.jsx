import React from "react";
import "./content.css"
import { Routes, Route } from "react-router-dom";

import AboutMe from "../pages/aboutMe"
import Contact from "../pages/contact"
import HomePage from "../pages/homePage";
import Projects from "../pages/projects"
import Calculadora from "../projetos/calculadora";
import Finanças from "../projetos/finanças";
import Cadastro from "../projetos/cadastro";
import ToDo from "../projetos/toDo"


const Content =  props => (
    <main className="main">
<Routes>
   <Route path="/" element={<HomePage/>}></Route>
   <Route path="/projects" element={<Projects/>}></Route>
   <Route path="/contact" element={<Contact/>}></Route>
   <Route path="/aboutMe" element={<AboutMe/>}></Route>
   <Route path="/projects/calculadora" element={<Calculadora/>}></Route>
   <Route path="/projects/cadastro" element={<Cadastro/>}></Route>
   <Route path="/projects/finanças" element={<Finanças/>}></Route>
   <Route path="/projects/toDo" element={<ToDo/>}></Route>
</Routes>
    </main>
)

export default Content;