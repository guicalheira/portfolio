import React from 'react';
import Menu from './components/menu';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content';
import './style/app.css'; // Importe o arquivo CSS da animação de fundo

export default function App() {
  return (
    <div className='app'>
      <div className='background'></div> {/* Div para a animação de fundo */}
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
}
