import React from "react";
import "./projetos.css";
import ToDoDesktop from "../img/ToDo.png";
import ToDoMobile from "../img/ToDo-Mobile.png";

export default (props) => (
  <div className="flex-container">
    <div className="img-container">
      <div className="desktop">
        <img className="img-desktop" src={ToDoDesktop} alt="" />
      </div>
      <div className="cellphone">
        <img className="img-mobile" src={ToDoMobile} alt="" />
      </div>
    </div>

    <p className="project-text">
      Este app é um gerenciador de tarefas, criado para auxiliar o usuário a
      organizar suas tarefas de dia a dia,o usuário consegue adicionar suas tarefas,marcar como concluídas ou não, editá-las e/ou excluí-las, também possui uma barra de pesquisas que auxilia o usuário a encontrar a tarefa desejada. <br /> Nele usei integração com o MongoDB (ultilizado para banco de dados),
      Redux(ultilizado para gerenciamento de estado), React, HTML, CSS(ultilizado para estilização) entre outros frameworks. 
      <br/> <strong>Código do projeto no Github:</strong> <a href="https://github.com/guicalheira/Projeto-Cadastro">https://github.com/guicalheira/Projeto-Cadastro</a>
    </p>
  </div>
);
