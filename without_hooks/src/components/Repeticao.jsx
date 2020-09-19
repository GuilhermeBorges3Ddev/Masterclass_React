import React from "react";

//Transformando um array de produtos(objetos) em trechos JSX
import produtos from '../components/data/produtos';

export default props => {
    
    function getProdutosListItem(produtos) {
        return produtos.map(prod => {
            return <li key={prod.id}>
                        {prod.id} - {prod.nome} - R${prod.preco}
                    </li>
        })
    }
    
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem(produtos)}
            </ul>
        </div>
    );
}