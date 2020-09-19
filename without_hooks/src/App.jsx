import React from "react";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';

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
        
    </div>
);