import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faDollarSign,
  faTableList,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "../style/projects.css";

export default (props) => (
  <div className="flex-container">
    <div className="button-container">
      <button className="pins">
        <a href="/projects/calculadora">
          <FontAwesomeIcon className="icon" icon={faCalculator} />
        </a>
      </button>
      <span className="button-label">Calculadora</span>
    </div>

    <div className="button-container">
      <button className="pins">
        <a href="/projects/finanças">
          <FontAwesomeIcon className="icon" icon={faDollarSign} />
        </a>
      </button>
      <span className="button-label">Finanças</span>
    </div>

    <div className="button-container">
      <button className="pins">
        <a href="/projects/toDo">
          <FontAwesomeIcon className="icon" icon={faTableList} />
        </a>
      </button>
      <span className="button-label">Lista de Tarefas</span>
    </div>

    <div className="button-container">
      <button className="pins">
        <a href="/projects/cadastro">
          <FontAwesomeIcon className="icon" icon={faAddressCard} />
        </a>
      </button>
      <span className="button-label">Cadastro</span>
    </div>
  </div>
);
