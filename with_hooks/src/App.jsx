import React from "react";

//Componente usado para a montagem do layout dos outros 6 componentes abaixo
import Card from './components/layout/Card';

//Componentes funcionais, onde cada um deles foi trabalhado um aspecto fundamental do React (Primeira parte)
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

//Componentes mais elaborados (Segunda parte)
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


import "./App.css";


export default props => (

    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card 
                titulo="#01 - Primeiro Componente - Com dois textos fixos"
                color=""
            >
                <Primeiro />
            </Card>

            <Card 
                titulo="#02 - ComParametro - Com dois textos passados por parãmetro"
                color="#354458"
            >
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>
            </Card>
        
            <Card 
                titulo="#03 - ComFilhos - Usando children para passar dados na chamada do componente"
                color="#DE593A"
            >
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Paula</li>
                        <li>Bruno</li>
                        <li>Tião</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card 
                titulo="#04 - Repeticao - Rodando um loop de produtos via map"
                color="#8C4646"    
            >
                <Repeticao />
            </Card>

            <Card 
                titulo="#05 - Condicional Simples - Exibindo 'Par' para um elemento par ou 'Ímpar' caso contrário"
                color="#E94C6F"    
            >
                <Condicional numero={11} />
            </Card>

            <Card 
                titulo="#06 - Condicional Elaborada - Mostra 'Par' para um elemento par ou 'Ímpar' mas usa um componente externo para operar"
                color="#FA6900"
            >
                <CondicionalComIf numero={10} />
            </Card>

            <Card 
                titulo="#07 - Comunicação Direta"
                color="Pink"
            >
                <Pai sobrenome="Freitas" />
            </Card>

            <Card 
                titulo="#08 - Comunicação Indireta"
                color="Cyan"
            >
                <Super />
            </Card>

            <Card 
                titulo="#09 - Input"
                color="Orange"
            >
                <Input />
            </Card>

            <Card 
                titulo="#10 - Contador"
                color="darkBlue"
            >
                <Contador passo={10} valor={100} />
            </Card>

            <Card 
                titulo="#11 - Mega Sena"
                color="#73503C"
            >
                <Mega qtdeNumero={8} />
            </Card>

        </div>

        
        
    </div>
);