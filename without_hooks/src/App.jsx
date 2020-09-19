import React from "react";

//Componente usado para a montagem do layout dos outros 4 componentes abaixo
import Card from './components/layout/Card';

//Componentes funcionais, onde cada um dele foi trabalhado um aspecto fundamental do React
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Repeticao from "./components/Repeticao";

import "./App.css";

export default props => (

    <div className="App">

        <Card titulo="#01 - Primeiro Componente - Com dois textos fixos">
            <Primeiro />
        </Card>

        <Card titulo="#02 - ComParametro - Com dois textos passados por parãmetro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>
        </Card>
      
        <Card titulo="#03 - ComFilhos - Usando children para passar dados na chamada do componente">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Paula</li>
                    <li>Bruno</li>
                    <li>Tião</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 - Repeticao - Rodando um loop de produtos via map">
            <Repeticao />
        </Card>
        
    </div>
);