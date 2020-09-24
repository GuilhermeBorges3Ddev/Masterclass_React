import React from "react";
import Sub from "./Sub"

export default props => {

        function quandoClicar (valorRecebido, texto) {
            console.log(valorRecebido)
            console.log(texto)
        }

        return (
            <div>
                <h4>Valor: {quandoClicar}</h4>
                <Sub onClicar={quandoClicar}></Sub>
            </div>
        )
}