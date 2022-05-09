import React from 'react';
import ReactDOM from 'react-dom/client';

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia';
import Pai from './components/Pai'
import Filho from './components/Filho'

// <BomDia nome="Arthur" color="Green"/>, // Utiliza o import React, com o uso do JS

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <div>
      <Pai nome="Carlos" sobrenome="Diesel">
        <Filho nome="Pedro"/>
        <Filho nome="Arthur"/>
        <Filho nome="João"/>
      </Pai>
    </div>,
  )
